import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Users, Award, MessageSquare, ArrowLeft, Zap, Activity, TrendingUp, Brain, CheckCircle, Shield, Loader2, AlertCircle, Calendar as CalendarIcon, PhoneCall, MailQuestion, Languages, GraduationCap, Sprout, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMentorById } from "@/services/profile/getMentorById";
import { getMenteeById } from "@/services/profile/getMenteeById";
import { z } from "zod";
import { hasValidSubscription } from "@/helpers/hasValidSubscription";
import { getUserFromLocalStorage } from "@/helpers/getUserFromLocalStorage";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { Calendar as MentorCalendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { format, parse, isValid } from "date-fns";
import { rateMentor } from "@/services/profile/rateMentor";
import { requestMentorship } from "@/services/request/requestMentorship";
import { visitMentorProfile } from "@/services/profile/visitMentorProfile";

const MentorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mentorData, setMentorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = getUserFromLocalStorage();
  const isAuthenticated = !!user;
  const hasSubscription = hasValidSubscription(user);
  // If mentor has a valid subscription, show contact to any authenticated mentee
  let canViewContact = false;
  if (isAuthenticated && user.role === 'MENTEE') {
    canViewContact = hasValidSubscription(mentorData);
  } else {
    canViewContact = isAuthenticated && hasSubscription;
  }
  const [showContacts, setShowContacts] = useState(false);
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [requestSubject, setRequestSubject] = useState("");
  const [requestMessage, setRequestMessage] = useState("");
  const [requestLoading, setRequestLoading] = useState(false);
  const [requestSuccess, setRequestSuccess] = useState("");
  const [requestError, setRequestError] = useState("");
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [userRating, setUserRating] = useState<number | null>(null);
  const [userComment, setUserComment] = useState("");
  const [submittingRating, setSubmittingRating] = useState(false);
  const [userOwnRating, setUserOwnRating] = useState<any>(null);
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [commenterNames, setCommenterNames] = useState<Record<string, string>>({});
  const [showCommentsCount, setShowCommentsCount] = useState(3);

  // Find user's own rating if exists
  useEffect(() => {
    if (!mentorData || !user?.id) return;
    const own = (mentorData.ratings || []).find((r: any) => r.visitor_id === user.id);
    setUserOwnRating(own || null);
    if (own) {
      setUserRating(own.rating);
      setUserComment(own.comment || "");
      setIsAnonymous(own.is_anonymous || false);
    } else {
      setUserRating(null);
      setUserComment("");
      setIsAnonymous(false);
    }
  }, [mentorData, user?.id]);

  // Fetch commenter names
  useEffect(() => {
    const fetchCommenterNames = async () => {
      if (!mentorData?.ratings) return;
      
      const names: Record<string, string> = {};
      const uniqueVisitorIds = Array.from(new Set(mentorData.ratings.map((r: any) => r.visitor_id)));
      
      await Promise.all(uniqueVisitorIds.map(async (visitorId: string) => {
        try {
          // Try to get mentee first
          const menteeResult = await getMenteeById(visitorId);
          if (menteeResult.mentee) {
            names[visitorId] = menteeResult.mentee.profile?.fullname || menteeResult.mentee.email || 'Utilisateur inconnu';
            return;
          }
        } catch (error) {
          // If mentee not found, try mentor
          try {
            const mentorResult = await getMentorById(visitorId);
            if (mentorResult.mentor) {
              names[visitorId] = mentorResult.mentor.profile?.fullname || mentorResult.mentor.email || 'Utilisateur inconnu';
              return;
            }
          } catch (mentorError) {
            // If neither found, use default
            names[visitorId] = 'Utilisateur inconnu';
          }
        }
      }));
      
      setCommenterNames(names);
    };
    
    fetchCommenterNames();
  }, [mentorData?.ratings]);

  useEffect(() => {
    const fetchMentorData = async () => {
      if (!id) {
        setError("ID du mentor manquant");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const result = await getMentorById(id);
        
        if (result.mentor) {
          setMentorData(result.mentor);
        } else {
          setError("Mentor non trouvé");
        }
      } catch (error) {
        console.error("Error fetching mentor:", error);
        if (error instanceof z.ZodError) {
          setError(error.errors.map((e) => e.message).join("\n"));
        } else {
          setError(error.message || "Erreur lors de la récupération du mentor.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchMentorData();
  }, [id]);

  // Count profile visit in DB when mentorData is loaded
  useEffect(() => {
    const visitMentorProfilePage = async () => {
      if (!mentorData?.id) return;
      const user = getUserFromLocalStorage();
      if (!user || !user.id) return;
      if (user.id === mentorData.id) return; // Don't count self-visits
      try {
        const data = await visitMentorProfile({ mentorUserId: mentorData.id, visitorUserId: user.id })
        if (!data.success) {
          toast({
            title: "Erreur de comptage de visite",
            description: data.error || "Impossible de compter la visite.",
            variant: "destructive",
          });
        }
      } catch (err) {
        toast({
          title: "Erreur réseau",
          description: err.message || "Impossible de compter la visite.",
          variant: "destructive",
        });
      }
    }
    visitMentorProfilePage();
  }, [mentorData?.id]);

  // Check if mentee has an accepted request with this mentor
  let hasAcceptedRequest = false;
  if (user && user.role === 'MENTEE' && Array.isArray(user.sentRequests)) {
    hasAcceptedRequest = user.sentRequests.some(
      (req) => req.to_mentor_id === mentorData?.id && req.status === 'ACCEPTED'
    );
  }

  if (loading || !mentorData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
              <p className="text-gray-600">Chargement du profil du mentor...</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Erreur</h2>
              <p className="text-gray-600 mb-4">{error}</p>
              <Button onClick={() => navigate(-1)} className="bg-blue-600 hover:bg-blue-700">
                Retour
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const profile = mentorData?.profile;
  const ratings = mentorData?.ratings || [];
  const averageRating = ratings.length > 0 
    ? (ratings.reduce((sum, r) => sum + r.rating, 0) / ratings.length).toFixed(1)
    : 0;
    

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link to="#" onClick={e => { e.preventDefault(); navigate(-1); }}>
          <Button className="mb-6 trust-button bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border/60">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour
          </Button>
        </Link>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Profile Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Header */}
            <div className="professional-card rounded-xl overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h1 className="text-4xl font-bold mentorship-gradient">
                        {profile?.fullname || "Nom non disponible"}
                      </h1>
                      <div className="trust-indicator w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                    </div>
                    <p className="text-xl text-muted-foreground mb-4">{profile?.title || "Titre non disponible"}</p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 confidence-accent" />
                        {profile?.location || "Localisation non disponible"}
                      </div>
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="w-4 h-4 confidence-accent" />
                        Membre depuis {mentorData?.created_at ? new Date(mentorData.created_at).toLocaleDateString("fr-FR") : "Date inconnue"}
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span className="text-green-600 font-medium">Vérifié</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-6 h-6 rating-star fill-current" />
                      <span className="text-2xl font-bold text-foreground">{averageRating}</span>
                      <span className="text-muted-foreground">({ratings.length} avis)</span>
                    </div>
                    <p className="text-3xl font-bold confidence-accent">
                      {canViewContact ? `${profile?.price_per_unit || 0}` : "Prix masqué"}
                    </p>
                  </div>
                </div>

                {/* Expertise Tags */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium confidence-accent mb-3 flex items-center">
                    <Brain className="w-4 h-4 mr-2" />
                    Expertise
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {profile?.areas_of_expertise?.map((skill, index) => (
                      <Badge key={index} className="expertise-tag">
                        {skill}
                      </Badge>
                    )) || (
                      <span className="text-muted-foreground">Aucune expertise renseignée</span>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mb-8 mentor-highlight p-4 rounded-lg">
                  <h3 className="text-sm font-medium confidence-accent mb-3">À propos</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {profile?.description || "Aucune description disponible"}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 py-6 border-t professional-divider">
                  <div className="stats-card">
                    <div className="professional-avatar w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Users className="w-6 h-6 confidence-accent" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">
                      {mentorData?.receivedRequests?.length || 0}
                    </p>
                    <p className="text-sm text-muted-foreground">Demandes reçues</p>
                  </div>
                  <div className="stats-card">
                    <div className="professional-avatar w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                      <CalendarIcon className="w-6 h-6 confidence-accent" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{mentorData?.visits?.length || 0}</p>
                    <p className="text-sm text-muted-foreground">Visites de profil</p>
                  </div>
                  <div className="stats-card">
                    <div className="professional-avatar w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Star className="w-6 h-6 rating-star" />
                    </div>
                    <p className="text-2xl font-bold text-foreground">{averageRating}</p>
                    <p className="text-sm text-muted-foreground">Note</p>
                  </div>
                </div>
              </CardContent>
            </div>

            {/* Achievements (not in DB, so commented out)
            <div className="professional-card rounded-xl overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3 text-foreground">
                  <Award className="w-6 h-6 text-yellow-600" />
                  Réalisations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center py-8 text-muted-foreground">
                    <Award className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Aucune réalisation renseignée</p>
                  </div>
                </div>
              </CardContent>
            </div>
            */}

            {/* Reviews */}
            <div className="professional-card rounded-xl overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="text-foreground">Quelques avis</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Rating Form for connected users (not self, not already rated or allow update) */}
                {user && user.id !== mentorData?.id && (
                  <div className="p-1 bg-muted/10 rounded-lg">
                    {hasAcceptedRequest ? (
                      <>
                        <h4 className="font-semibold mb-2">Donner une note à ce mentor</h4>
                      <form
                        onSubmit={async (e) => {
                          e.preventDefault();
                          if (!userRating) {
                            toast({ title: "Note requise", description: "Veuillez sélectionner une note.", variant: "destructive" });
                            return;
                          }
                          setSubmittingRating(true);
                          try {
                            await rateMentor({
                              mentor_id: mentorData.id,
                              visitor_id: user.id,
                              rating: userRating,
                              comment: userComment,
                              is_anonymous: isAnonymous,
                            });
                            toast({ title: "Merci pour votre avis !", description: "Votre note a bien été enregistrée.", className: "bg-green-500 text-white" });
                            // Refresh mentor data
                            const result = await getMentorById(mentorData.id);
                            setMentorData(result.mentor);
                          } catch (err: any) {
                            toast({ title: "Erreur", description: err.message || "Erreur lors de l'envoi de la note.", variant: "destructive" });
                          } finally {
                            setSubmittingRating(false);
                          }
                        }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          {[1,2,3,4,5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              className={`w-7 h-7 ${userRating && userRating >= star ? 'text-yellow-400' : 'text-gray-300'}`}
                              onClick={() => setUserRating(star)}
                              aria-label={`Donner ${star} étoile${star > 1 ? 's' : ''}`}
                              disabled={submittingRating}
                            >
                              <Star className="w-7 h-7" fill={userRating && userRating >= star ? '#facc15' : 'none'} />
                            </button>
                          ))}
                        </div>
                        <textarea
                          className="w-full border rounded p-2 mb-2"
                          placeholder="Laissez un commentaire (optionnel)"
                          value={userComment}
                          onChange={e => setUserComment(e.target.value)}
                          rows={2}
                          disabled={submittingRating}
                        />
                        <div className="flex items-center gap-2 mb-2">
                          <input
                            type="checkbox"
                            id="isAnonymous"
                            checked={isAnonymous}
                            onChange={e => setIsAnonymous(e.target.checked)}
                            disabled={submittingRating}
                            className="rounded"
                          />
                          <label htmlFor="isAnonymous" className="text-sm text-muted-foreground">
                            Publier de manière anonyme
                          </label>
                        </div>
                        <Button type="submit" className="w-full" disabled={submittingRating || !userRating}>
                          {userOwnRating ? "Mettre à jour mon avis" : "Envoyer mon avis"}
                        </Button>
                        {userOwnRating && (
                          <div className="text-xs text-muted-foreground mt-1">Vous avez déjà noté ce mentor. Vous pouvez mettre à jour votre note et commentaire.</div>
                        )}
                      </form>
                      </>
                    ) : (
                      null
                      // <div className="text-sm text-muted-foreground">Vous devez avoir une demande acceptée avec ce mentor pour laisser un avis.</div>
                    )}
                  </div>
                )}
                <div className="space-y-6">
                  {ratings.length > 0 ? (
                    <>
                      {ratings.slice(0, showCommentsCount).map((review) => (
                        <div key={review.id} className="review-card">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="professional-avatar w-8 h-8 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full flex items-center justify-center">
                                <span className="text-xs font-medium confidence-accent">
                                  {/* Initials or A */}
                                  {review.is_anonymous ? 'A' : (commenterNames[review.visitor_id]?.split(' ').map((n: string) => n[0]).join('') || 'A')}
                                </span>
                              </div>
                              <span className="font-medium text-foreground">
                                {review.is_anonymous ? "Utilisateur anonyme" : (commenterNames[review.visitor_id] || "Utilisateur inconnu")}
                              </span>
                              <div className="flex items-center gap-1">
                                {[...Array(3)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < review.rating ? 'rating-star fill-current' : 'text-muted-foreground/30'}`}
                                  />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">
                              {review.created_at ? new Date(review.created_at).toLocaleDateString("fr-FR") : "Date inconnue"}
                            </span>
                          </div>
                          {review.comment && (
                            <p className="text-muted-foreground leading-relaxed">
                              {review.comment}
                            </p>
                          )}
                        </div>
                      ))}
                      {showCommentsCount < ratings.length && (
                        <div className="flex justify-center mt-4">
                          <Button variant="outline" onClick={() => setShowCommentsCount(showCommentsCount + 3)}>
                            Voir plus
                          </Button>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-8 text-muted-foreground">
                      <Star className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                      <p>Aucun avis disponible</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Actions */}
            <div className="professional-card rounded-xl overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="text-foreground">Commencer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button 
                  className="w-full trust-button text-white font-medium py-3 rounded-lg"
                  disabled={!canViewContact}
                  onClick={() => setShowContacts((prev) => !prev)}
                >
                  <PhoneCall className="w-4 h-4 mr-2" />
                  {canViewContact ? (showContacts ? "Masquer les contacts" : "Voir les contacts") : "Contact masqué"}
                </Button>
                {showContacts && canViewContact && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200 text-blue-900">
                    <div><strong>Email :</strong> {mentorData?.email}</div>
                    <div><strong>Téléphone :</strong> {mentorData?.phone || 'Non renseigné'}</div>
                  </div>
                )}
                <Button 
                  className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border/60 py-3 rounded-lg transition-all duration-200"
                  disabled={!canViewContact || requestLoading}
                  onClick={() => setShowRequestForm((prev) => !prev)}
                >
                  <MailQuestion className="w-4 h-4 mr-2" />
                  {canViewContact ? (showRequestForm ? "Annuler la demande" : "Demander un mentorat") : "Abonnement requis"}
                </Button>
                {showRequestForm && canViewContact && (
                  <form
                    className="mt-4 space-y-4"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setRequestLoading(true);
                      try {
                        const data = await requestMentorship({
                          from_mentee_id: user.id,
                          to_mentor_id: mentorData?.id,
                          subject: requestSubject,
                          message: requestMessage,
                        });
                        if (data.success) {
                          setRequestSubject("");
                          setRequestMessage("");
                          setShowRequestForm(false);
                          toast({
                            title: "Demande envoyée",
                            description: "Votre demande de mentorat a bien été soumise.",
                            className: "bg-green-500 text-white",
                          });
                        } else {
                          toast({
                            title: "Erreur",
                            description: data.error || "Erreur lors de l'envoi de la demande.",
                            variant: "destructive",
                          });
                        }
                      } catch (err) {
                        toast({
                          title: "Erreur réseau",
                          description: "Erreur réseau ou serveur.",
                          variant: "destructive",
                        });
                      } finally {
                        setRequestLoading(false);
                      }
                    }}
                  >
                    <div>
                      <label className="block text-sm font-medium mb-1">Sujet</label>
                      <Input
                        value={requestSubject}
                        onChange={e => setRequestSubject(e.target.value)}
                        required
                        placeholder="Sujet de la demande"
                        disabled={requestLoading}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Message</label>
                      <Textarea
                        value={requestMessage}
                        onChange={e => setRequestMessage(e.target.value)}
                        required
                        placeholder="Expliquez votre besoin ou objectif..."
                        disabled={requestLoading}
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={requestLoading}>
                      {requestLoading ? "Envoi..." : "Envoyer la demande"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </div>

            {/* Availability */}
            <div className="professional-card rounded-xl overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Activity className="w-5 h-5 confidence-accent" />
                  Disponibilité
                </CardTitle>
              </CardHeader>
              <CardContent>
                {Array.isArray(profile?.availability) ? (
                  <ul className="mb-4 list-disc list-inside text-muted-foreground">
                    {profile.availability.map((slot, idx) => (
                      <li key={idx}>{slot}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground mb-4">{profile?.availability || "Disponibilité non renseignée"}</p>
                )}
                <Button
                  className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground border border-border/60 py-3 rounded-lg transition-all duration-200 mb-4"
                  type="button"
                  onClick={() => setShowCalendar((prev) => !prev)}
                >
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  Calendrier
                </Button>
                {showCalendar && (
                  <div className="flex flex-col items-center gap-4">
                    <MentorCalendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={date => {
                        setSelectedDate(date);
                      }}
                    />
                    {selectedDate && (
                      <div className="text-sm text-muted-foreground">Date sélectionnée : {format(selectedDate, "yyyy-MM-dd")}</div>
                    )}
                  </div>
                )}
              </CardContent>
            </div>

            {/* Languages */}
            <div className="professional-card rounded-xl overflow-hidden">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Languages className="w-5 h-5 confidence-accent" />
                  Langues
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {profile?.languages?.map((language, index) => (
                    <Badge key={index} className="professional-badge">
                      {language}
                    </Badge>
                  )) || (
                    <span className="text-muted-foreground">Aucune langue renseignée</span>
                  )}
                </div>
              </CardContent>
            </div>

            {/* Diplomas, Certifications, Mentee Levels, Experience */}
            {profile?.diplomas && profile.diplomas.length > 0 && (
              <div className="professional-card rounded-xl overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <GraduationCap className="w-5 h-5 confidence-accent" />
                    Diplômes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {profile.diplomas.map((diploma, idx) => (
                      <li key={idx}>{diploma}</li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            )}
            {profile?.certifications && profile.certifications.length > 0 && (
              <div className="professional-card rounded-xl overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Award className="w-5 h-5 confidence-accent" />
                    Certifications
                </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {profile.certifications.map((cert, idx) => (
                      <li key={idx}>{cert}</li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            )}
            {profile?.mentee_levels && profile.mentee_levels.length > 0 && (
              <div className="professional-card rounded-xl overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Sprout className="w-5 h-5 confidence-accent" />
                    Niveaux de mentorat acceptés
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside text-muted-foreground">
                    {profile.mentee_levels.map((level, idx) => (
                      <li key={idx}>{level}</li>
                    ))}
                  </ul>
                </CardContent>
              </div>
            )}
            {profile?.experiences && (
              <div className="professional-card rounded-xl overflow-hidden">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-foreground">
                    <Briefcase className="w-5 h-5 confidence-accent" />
                    Expériences
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {Array.isArray(profile.experiences) ? (
                    <ul className="list-disc list-inside text-muted-foreground">
                      {profile.experiences.map((exp, idx) => (
                        <li key={idx}>{exp}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-muted-foreground">{profile.experiences || 'Non renseigné'}</p>
                  )}
                </CardContent>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MentorProfile;
