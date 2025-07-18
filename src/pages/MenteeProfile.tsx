import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Calendar, Users, ArrowLeft, CheckCircle, Shield, Loader2, AlertCircle, BookOpen, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMenteeById } from "@/services/profile/getMenteeById";
import { getUserFromLocalStorage } from "@/helpers/getUserFromLocalStorage";
import { hasValidSubscription } from "@/helpers/hasValidSubscription";
import { proposeMentorship } from "@/services/profile/proposeMentorship";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const MenteeProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [menteeData, setMenteeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user = getUserFromLocalStorage();
  const isAuthenticated = !!user;
  // If mentor with valid subscription, can view contact and propose
  const isMentor = user && user.role === 'MENTOR';
  const mentorHasValidSub = isMentor && hasValidSubscription(user);
  const [showProposalForm, setShowProposalForm] = useState(false);
  const [proposalSubject, setProposalSubject] = useState("");
  const [proposalMessage, setProposalMessage] = useState("");
  const [proposalLoading, setProposalLoading] = useState(false);
  // You can add logic for canViewContact if needed

  useEffect(() => {
    const fetchMenteeData = async () => {
      if (!id) {
        setError("ID du mentoré manquant");
        setLoading(false);
        return;
      }
      setLoading(true);
      setError(null);
      try {
        const result = await getMenteeById(id);
        if (result.mentee) {
          setMenteeData(result.mentee);
        } else {
          setError("Mentoré non trouvé");
        }
      } catch (error) {
        setError(error.message || "Erreur lors de la récupération du mentoré.");
      } finally {
        setLoading(false);
      }
    };
    fetchMenteeData();
  }, [id]);

  if (loading || !menteeData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-blue-600" />
              <p className="text-gray-600">Chargement du profil du mentoré...</p>
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
                Retour à la recherche
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const profile = menteeData.profile || {};

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
                        {profile.fullname || "Nom non disponible"}
                      </h1>
                      <div className="trust-indicator w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                      </div>
                    </div>
                    <p className="text-xl text-muted-foreground mb-4">{profile.title || "Titre non disponible"}
                    <br />{profile.education_level || "Niveau d'éducation non disponible"}</p>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 confidence-accent" />
                        {profile.location || "Localisation non disponible"}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 confidence-accent" />
                        Membre depuis {menteeData.created_at ? new Date(menteeData.created_at).toLocaleDateString("fr-FR") : "Date inconnue"}
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span className="text-green-600 font-medium">Vérifié</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Languages */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium confidence-accent mb-3 flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Langues parlées
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {profile.languages && profile.languages.length > 0 ? profile.languages.map((lang, idx) => (
                      <Badge key={idx} className="expertise-tag">
                        {lang}
                      </Badge>
                    )) : (
                      <span className="text-muted-foreground">Aucune langue renseignée</span>
                    )}
                  </div>
                </div>
                {/* Description */}
                <div className="mb-8 mentor-highlight p-4 rounded-lg">
                  <h3 className="text-sm font-medium confidence-accent mb-3">À propos</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {profile.description || "Aucune description disponible"}
                  </p>
                </div>
                {/* Objectives */}
                <div className="mb-8 mentor-highlight p-4 rounded-lg">
                  <h3 className="text-sm font-medium confidence-accent mb-3">Objectifs</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {profile.objectives || "Aucun objectif renseigné"}
                  </p>
                </div>
                {/* Subjects of Interest */}
                <div className="mb-8 mentor-highlight p-4 rounded-lg">
                  <h3 className="text-sm font-medium confidence-accent mb-3">Sujets d'intérêt</h3>
                  <div className="flex flex-wrap gap-3">
                    {profile.subjects_of_interest && profile.subjects_of_interest.length > 0 ? profile.subjects_of_interest.map((subject, idx) => (
                      <Badge key={idx} className="expertise-tag">
                        {subject}
                      </Badge>
                    )) : (
                      <span className="text-muted-foreground">Aucun sujet renseigné</span>
                    )}
                  </div>
                </div>
                {/* Urgency & Preferences */}
                <div className="mb-8 mentor-highlight p-4 rounded-lg">
                  <h3 className="text-sm font-medium confidence-accent mb-3">Urgence & Préférences</h3>
                  <div className="mb-2"><strong>Urgence :</strong> {profile.urgency || "Non renseignée"}</div>
                  <div><strong>Préférences :</strong> {profile.preferences || "Non renseignées"}</div>
                </div>
                {/* Budget */}
                <div className="mb-8 mentor-highlight p-4 rounded-lg">
                  <h3 className="text-sm font-medium confidence-accent mb-3">Budget</h3>
                  <div>{profile.budget || "Non renseigné"}</div>
                </div>
                {/* Contact Info (if allowed) */}
                {mentorHasValidSub && (
                  <div className="mb-8 mentor-highlight p-4 rounded-lg">
                    <h3 className="text-sm font-medium confidence-accent mb-3">Contact</h3>
                    <div><strong>Email :</strong> {menteeData.email}</div>
                    <div><strong>Téléphone :</strong> {menteeData.phone || 'Non renseigné'}</div>
                  </div>
                )}
                {mentorHasValidSub && (
                  <div className="mb-8 mentor-highlight p-4 rounded-lg">
                    <Button onClick={() => setShowProposalForm((prev) => !prev)} className="mb-2">
                      {showProposalForm ? "Annuler" : "Proposer un mentorat"}
                    </Button>
                    {showProposalForm && (
                      <form
                        onSubmit={async (e) => {
                          e.preventDefault();
                          setProposalLoading(true);
                          try {
                            await proposeMentorship({
                              fromMentorId: user.id,
                              toMenteeId: menteeData.id,
                              subject: proposalSubject,
                              message: proposalMessage,
                            });
                            setProposalSubject("");
                            setProposalMessage("");
                            setShowProposalForm(false);
                            toast({ title: "Proposition envoyée", description: "Votre proposition de mentorat a bien été envoyée.", className: "bg-green-500 text-white" });
                          } catch (err) {
                            toast({ title: "Erreur", description: err.message || "Erreur lors de l'envoi de la proposition.", variant: "destructive" });
                          } finally {
                            setProposalLoading(false);
                          }
                        }}
                      >
                        <div className="mb-2">
                          <label className="block text-sm font-medium mb-1">Sujet</label>
                          <Input
                            value={proposalSubject}
                            onChange={e => setProposalSubject(e.target.value)}
                            required
                            placeholder="Sujet de la proposition"
                            disabled={proposalLoading}
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block text-sm font-medium mb-1">Message</label>
                          <Textarea
                            value={proposalMessage}
                            onChange={e => setProposalMessage(e.target.value)}
                            required
                            placeholder="Expliquez votre proposition ou objectif..."
                            disabled={proposalLoading}
                          />
                        </div>
                        <Button type="submit" className="w-full" disabled={proposalLoading}>
                          {proposalLoading ? "Envoi..." : "Envoyer la proposition"}
                        </Button>
                      </form>
                    )}
                  </div>
                )}
              </CardContent>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MenteeProfile; 