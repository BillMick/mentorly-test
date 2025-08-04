import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { BookOpen, Calendar, MessageSquare, Target, Star, Search, Settings, Send, Clock, CheckCircle, XCircle, Activity, TrendingUp, Zap, CreditCard, Eye, X } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useNavigate } from "react-router-dom";
import { getUserFromLocalStorage } from "@/helpers/getUserFromLocalStorage";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { getMenteeById } from "@/services/profile/getMenteeById";
import { addHours } from "date-fns";
import { getSubscriptionPlans } from "@/services/subscription/getSubscriptionPlans";
import { getMentorById } from "@/services/profile/getMentorById";
import { updateRequestStatus } from "@/services/request/updateRequestStatus";
import { subscribe } from "@/services/subscription/subscribe";

const MenteeDashboard = () => {
  const [mentee, setMentee] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [mentorNames, setMentorNames] = useState<Record<string, string>>({});
  const [mentorsLoading, setMentorsLoading] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<any | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [plans, setPlans] = useState<any[]>([]);
  const [plansLoading, setPlansLoading] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPlan, setModalPlan] = useState<any>(null);

  useEffect(() => {
    const fetchMentee = async () => {
    const user = getUserFromLocalStorage();
    if (!user) {
      navigate("/login");
      return;
    }
      const menteeRes = await getMenteeById(user.id);
      setMentee(menteeRes.mentee);
      const expiresAt = addHours(new Date(), 12).getTime();
      localStorage.setItem("user", JSON.stringify({ user: menteeRes.mentee, expiresAt }));
      setLoading(false);
    };
    fetchMentee();
  }, []);

  useEffect(() => {
    const fetchMentorNames = async () => {
      if (!mentee || !mentee.sentRequests) return;
      setMentorsLoading(true);
      const uniqueMentorIds = Array.from(new Set(mentee.sentRequests.map((req: any) => req.to_mentor_id)));
      const names: Record<string, string> = {};
      await Promise.all(uniqueMentorIds.map(async (id: string) => {
        try {
          const data = await getMentorById(id);
          names[id] = data.mentor?.profile?.fullname || data.mentor?.email || 'Inconnu';
        } catch {
          names[id] = 'Inconnu';
        }
      }));
      setMentorNames(names);
      setMentorsLoading(false);
    };
    fetchMentorNames();
  }, [mentee]);

  useEffect(() => {
    if (!mentee) return;
    // Check for valid subscription
    let valid = false;
    if (Array.isArray(mentee.subscriptions) && mentee.subscriptions.length > 0) {
      const now = new Date();
      const sorted = [...mentee.subscriptions].sort((a, b) => new Date(b.end_date).getTime() - new Date(a.end_date).getTime());
      const latest = sorted[0];
      if (latest && latest.is_active && new Date(latest.end_date) >= now) {
        valid = true;
      }
    }
    if (!valid) {
      setShowSubscribeModal(true);
      setPlansLoading(true);
      const fetchPlans = async () => {
        const plans = await getSubscriptionPlans();
        setPlans((plans.plans || []).filter((p: any) => p.category === "MENTEE"));
      }
      fetchPlans();
      setPlansLoading(false); 
    }
  }, [mentee]);

  if (loading) {
    return <div className="p-6 text-gray-600">Chargement du tableau de bord...</div>; // Or a spinner
  }

  if (!mentee) {
    return null; // Safety guard — shouldn't be reached if redirect works
  }


  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PENDING":
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30 hologram-effect">
          <Clock className="w-3 h-3 mr-1" />
          EN ATTENTE
        </Badge>;
      case "ACCEPTED":
        return <Badge className="bg-green-500/20 text-green-400 border-green-500/30 hologram-effect">
          <CheckCircle className="w-3 h-3 mr-1" />
          ACCEPTÉE
        </Badge>;
      case "REFUSED":
        return <Badge className="bg-red-500/20 text-red-400 border-red-500/30 hologram-effect">
          <XCircle className="w-3 h-3 mr-1" />
          REFUSÉE
        </Badge>;
      case "CANCELLED":
        return <Badge className="bg-gray-400/20 text-gray-500 border-gray-400/30 hologram-effect">
          <X className="w-3 h-3 mr-1" />
          ANNULÉE
        </Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const handleRequestAction = async (requestId: number, action: string) => {
    if (action === 'cancel') {
      try {
        const res = await updateRequestStatus({ requestId: requestId, status: 'CANCELLED' });
        if (res.success) {
          toast({
            title: 'Demande annulée',
            description: 'Votre demande de mentorat a bien été annulée.',
          });
          // Refresh mentee data
          const user = getUserFromLocalStorage();
          setMentee(user);
        } else {
          const data = await res.json();
          if (data?.error?.includes('already cancelled')) {
            toast({
              title: 'Déjà annulée',
              description: 'Cette demande était déjà annulée.',
            });
          } else {
            toast({
              title: 'Erreur',
              description: "Erreur lors de l'annulation de la demande.",
              variant: 'destructive',
            });
          }
        }
      } catch (err) {
        toast({
          title: 'Erreur réseau',
          description: "Erreur réseau lors de l'annulation.",
          variant: 'destructive',
        });
      }
      return;
    }
    // ... existing code for other actions ...
  };

  const handleSubscribe = async () => {
    if (!selectedPlanId || !mentee) return;
    setSubscribing(true);
    try {
      const data = await subscribe(mentee.id, selectedPlanId);
      if (data.success) {
        toast({ title: 'Abonnement réussi', description: 'Votre abonnement a été activé.', className: 'bg-green-500 text-white' });
        setShowSubscribeModal(false);
        // Refresh mentee data
        const user = getUserFromLocalStorage();
        const menteeRes = await getMenteeById(user.id);
        setMentee(menteeRes.mentee);
      } else {
        toast({ title: 'Erreur', description: data.error || 'Erreur lors de la souscription.', variant: 'destructive' });
      }
    } catch (err) {
      toast({ title: 'Erreur réseau', description: 'Erreur réseau lors de la souscription.', variant: 'destructive' });
    }
    setSubscribing(false);
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-secondary rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-pulse delay-300"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-ping delay-700"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Welcome Header */}
        <div className="mb-8 relative">
          <div className="connection-line absolute top-0 left-0 w-20 h-px"></div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-2">
            Bon retour, {mentee.profile?.fullname}!
          </h1>
          <p className="text-muted-foreground text-lg flex items-center">
            <Activity className="w-4 h-4 mr-2 text-accent" />
            Continuez votre parcours d'apprentissage avec vos mentors.
          </p>
        </div>

        {/* Updated Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Demandes Envoyées</p>
                  <p className="text-2xl font-bold text-gray-900">{mentee.sentRequests.length}</p>
                </div>
                <Send className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Demandes Acceptées</p>
                  <p className="text-2xl font-bold text-gray-900">{mentee.sentRequests.filter(req => req.status === "ACCEPTED").length}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Demandes en Attente</p>
                  <p className="text-2xl font-bold text-gray-900">{mentee.sentRequests.filter(req => req.status === "PENDING").length}</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Demandes Refusées</p>
                  <p className="text-2xl font-bold text-gray-900">{mentee.sentRequests.filter(req => req.status === "REFUSED").length}</p>
                </div>
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Sent Requests Management Table */}
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Demandes Envoyées</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>N°</TableHead>
                      <TableHead>Nom du Mentor</TableHead>
                      <TableHead>Sujet</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Date d'Envoi</TableHead>
                      <TableHead>Date de Réponse</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mentee.sentRequests.length > 0
                    ? mentee.sentRequests.map((request, index) => (
                      <TableRow key={request.id}>
                        <TableCell>{index + 1}</TableCell>
                        <TableCell className="font-medium">
                          {mentorsLoading
                            ? "Chargement..."
                            : (mentorNames[String(request.to_mentor_id)] && typeof mentorNames[String(request.to_mentor_id)] === 'string')
                              ? mentorNames[String(request.to_mentor_id)]
                              : "Inconnu"}
                        </TableCell>
                        <TableCell>{request.subject}</TableCell>
                        <TableCell>{getStatusBadge(request.status)}</TableCell>
                        <TableCell>{new Date(request.created_at).toLocaleDateString("fr-FR")}</TableCell>
                        <TableCell>{request.responded_at ? new Date(request.responded_at).toLocaleDateString("fr-FR") : "-" }
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-row gap-2 items-center justify-center">
                            <Button
                              size="sm"
                              className="cyber-button text-xs"
                              onClick={() => {
                                setSelectedRequest({ ...request, mentorName: mentorNames[String(request.to_mentor_id)] });
                                setDialogOpen(true);
                              }}
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                            {request.status === 'PENDING' && (
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleRequestAction(request.id, 'cancel')}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                    :(
                      <TableRow>
                        <TableCell colSpan={7} className="text-center text-gray-400 py-8">
                          Aucune demande envoyée pour le moment.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
            

            {/* Find More Mentors */}
            <div className="cyber-card rounded-xl overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold text-foreground mb-3 flex items-center">
                  <Search className="w-5 h-5 mr-2 text-accent" />
                  Explorer les Mentors
                </h2>
                <p className="text-muted-foreground mb-6">
                  Vous cherchez des mentors dans de nouveaux domaines ou avez besoin de conseils supplémentaires ?
                </p>
                <Link to="/search">
                  <Button className="w-full cyber-button bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-medium py-3 rounded-lg">
                    <Search className="w-4 h-4 mr-2" />
                    Trouver Votre Mentor
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Settings */}
            <div className="cyber-card rounded-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  {/* <Settings className="w-5 h-5 mr-2 text-accent" /> */}
                  Paramètres du Profil
                </h3>
                <Link to="/mentee-profile-settings">
                  <Button className="w-full cyber-button justify-start bg-muted/10 hover:bg-primary/10 border-primary/30">
                    <Settings className="w-4 h-4 mr-2" />
                    Mettre à jour mon Profil
                  </Button>
                </Link>
              </div>
            </div>

            {/* Abonnement card: only show if no valid plan */}
            {(() => {
              const now = new Date();
              let valid = false;
              let latest = null;
              if (Array.isArray(mentee.subscriptions) && mentee.subscriptions.length > 0) {
                const sorted = [...mentee.subscriptions].sort((a, b) => new Date(b.end_date).getTime() - new Date(a.end_date).getTime());
                latest = sorted[0];
                if (latest && latest.is_active && new Date(latest.end_date) >= now) {
                  valid = true;
                }
              }
              if (!valid) {
                return (
                  <div className="cyber-card rounded-xl overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                        <CreditCard className="w-5 h-5 mr-2 text-accent" />
                        Abonnement
                      </h3>
                      <div className="mb-2 text-sm text-gray-600">Vous n'avez pas d'abonnement actif. Choisissez un plan pour souscrire :</div>
                      {plansLoading ? (
                        <div>Chargement des plans...</div>
                      ) : plans.length === 0 ? (
                        <div>Aucun plan disponible pour le moment.</div>
                      ) : (
                        <div className="space-y-4">
                          {plans.map(plan => (
                            <div key={plan.id} className={`border p-3 rounded-lg flex items-center justify-between ${selectedPlanId === plan.id ? 'border-primary bg-primary/10' : 'border-gray-200'}`}
                              onClick={() => setSelectedPlanId(plan.id)}
                              onDoubleClick={() => {
                                setModalPlan(plan);
                                setModalOpen(true);
                              }}
                              style={{ cursor: 'pointer' }}
                            >
                              <div>
                                <div className="cyber-button hover:bg-primary/10 ml-1 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">{plan.name.toUpperCase()}</div>
                                <div className="text-sm text-gray-500">Durée : {plan.duration_days} jours</div>
                                {plan.benefits && plan.benefits.length > 0 && (
                                  <div className="text-xs text-gray-400 mt-1">
                                    {plan.benefits.slice(0, 2).join(", ")}
                                    {plan.benefits.length > 2 && "..."}
                                  </div>
                                )}
                              </div>
                              <div className="font-bold text-lg whitespace-nowrap">{plan.price_eur} €</div>
                            </div>
                          ))}
                        </div>
                      )}
                      <Button onClick={handleSubscribe} disabled={!selectedPlanId || subscribing || plansLoading} className="w-full mt-4">
                        {subscribing ? 'Souscription...' : 'Valider et souscrire'}
                      </Button>
                    </div>
                  </div>
                );
              }
              return null;
            })()}

            {/* Learning Stats */}
            {/* <div className="cyber-card rounded-xl overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                  <Activity className="w-5 h-5 mr-2 text-accent" />
                  Analytiques d'Apprentissage
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Heures Hebdomadaires</span>
                    <span className="text-sm font-medium text-foreground">12,5h</span>
                  </div>
                  <div className="w-full bg-muted/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Progrès</span>
                    <span className="text-sm font-medium text-accent">75%</span>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <Footer />

      {/* Modal for request details */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Détails de la demande</DialogTitle>
            <DialogDescription>
              Retrouvez ici toutes les informations sur votre demande de mentorat.
            </DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <div className="space-y-3">
              <div><strong>Mentor :</strong> {selectedRequest.mentorName || 'Inconnu'}</div>
              <div><strong>Domaine :</strong> {selectedRequest.subject}</div>
              <div><strong>Statut :</strong> {getStatusBadge(selectedRequest.status)}</div>
              <div><strong>Date d'envoi :</strong> {new Date(selectedRequest.created_at).toLocaleDateString("fr-FR")}</div>
              <div><strong>Date de réponse :</strong> {selectedRequest.responded_at ? new Date(selectedRequest.responded_at).toLocaleDateString("fr-FR") : '-'}</div>
              {selectedRequest.message && (
                <div><strong>Message :</strong> <div className="bg-muted/40 rounded p-2 mt-1 text-sm">{selectedRequest.message}</div></div>
              )}
            </div>
          )}
          <DialogFooter>
            {selectedRequest && (
              <div className="flex flex-col sm:flex-row gap-2 w-full justify-between mt-4">
                <Link to={selectedRequest && selectedRequest.to_mentor_id ? `/mentor-profile/${String(selectedRequest.to_mentor_id)}` : '#'} className="w-full sm:w-auto" tabIndex={selectedRequest && selectedRequest.to_mentor_id ? 0 : -1}>
                  <Button variant="secondary" className="w-full" disabled={!selectedRequest || !selectedRequest.to_mentor_id}>
                    Voir le profil du mentor
                  </Button>
                </Link>
                <Button
                  variant="destructive"
                  className="w-full sm:w-auto"
                  onClick={() => {
                    handleRequestAction(selectedRequest.id, 'cancel');
                    setDialogOpen(false);
                  }}
                  disabled={selectedRequest.status !== 'PENDING'}
                >
                  Annuler la demande
                </Button>
                <DialogClose asChild>
                  <Button variant="outline" className="w-full sm:w-auto">Fermer</Button>
                </DialogClose>
              </div>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="max-w-lg border-0 shadow-2xl bg-gradient-to-br from-background via-background to-muted/30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-lg"></div>
          <div className="relative">
            <DialogHeader className="text-center pb-6">
              <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Détails du Plan
              </DialogTitle>
            </DialogHeader>
            {modalPlan && (
              <div className="space-y-6">
                {/* Plan Header */}
                <div className="text-center p-6 rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10 border border-primary/20">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <span className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground text-sm rounded-full font-bold shadow-lg">
                      {modalPlan.name.toUpperCase()}
                    </span>
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                    {modalPlan.price_eur} €
                  </div>
                  <div className="text-muted-foreground">
                    {modalPlan.duration_days} jours d'accès
                  </div>
                </div>

                {/* Plan Status */}
                <div className="flex items-center justify-center gap-2 p-3 rounded-lg bg-muted/50">
                  <div className={`w-2 h-2 rounded-full ${modalPlan.is_active ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <span className="text-sm font-medium">
                    Plan {modalPlan.is_active ? 'Actif' : 'Inactif'}
                  </span>
                </div>
                
                {/* Benefits */}
                {modalPlan.benefits && modalPlan.benefits.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
                        <span className="text-primary-foreground text-xs">✓</span>
                      </span>
                      Avantages Inclus
                    </h4>
                    <div className="grid gap-3">
                      {modalPlan.benefits.map((benefit: string, index: number) => (
                        <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary mt-2 flex-shrink-0"></div>
                          <span className="text-sm leading-relaxed">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Current Subscription Status */}
                {(() => {
                  const now = new Date();
                  let valid = false;
                  let latest = null;
                  if (Array.isArray(mentee.subscriptions) && mentee.subscriptions.length > 0) {
                    const sorted = [...mentee.subscriptions].sort((a, b) => new Date(b.end_date).getTime() - new Date(a.end_date).getTime());
                    latest = sorted[0];
                    if (latest && latest.is_active && new Date(latest.end_date) >= now && latest.plan_id === modalPlan.id) {
                      valid = true;
                    }
                  }
                  return valid && latest ? (
                    <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-500/20">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                        <div className="text-green-700 font-semibold">
                          Plan Actuellement Actif
                        </div>
                      </div>
                      <div className="text-sm text-green-600 ml-11">
                        Votre abonnement expire le {new Date(latest.end_date).toLocaleDateString("fr-FR")}
                      </div>
                    </div>
                  ) : null;
                })()}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MenteeDashboard;
