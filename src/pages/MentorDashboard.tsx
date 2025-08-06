import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users, Calendar, MessageSquare, Star, Settings, Eye, CheckCircle, XCircle, Clock, UserCheck, Percent, X, CreditCard } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getUserFromLocalStorage } from "@/helpers/getUserFromLocalStorage";
import { getMentorById } from "@/services/profile/getMentorById";
import { getMenteeById } from "@/services/profile/getMenteeById";
import { updateRequestStatus } from "@/services/request/updateRequestStatus";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { toast } from "@/components/ui/use-toast";
import { addHours } from "date-fns";
import { getSubscriptionPlans } from "@/services/subscription/getSubscriptionPlans";
import { createPayment } from "@/services/payment/createPayment";
import { verifyPayment } from "@/services/payment/verifyPayment";

const MentorDashboard = () => {  
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [mentor, setMentor] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState<number | null>(null);
  const [menteeNames, setMenteeNames] = useState<Record<string, string>>({});
  const [menteesLoading, setMenteesLoading] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState<any | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [plans, setPlans] = useState<any[]>([]);
  const [plansLoading, setPlansLoading] = useState(false);
  const [paying, setPaying] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [showSubscribeModal, setShowSubscribeModal] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPlan, setModalPlan] = useState<any>(null);

  const fetchMentorData = async () => {
    const user = getUserFromLocalStorage();    

    if (!user) {
      navigate("/login");
      return;
    }

    try {
      const response = await getMentorById(user.id);
      if (!response) throw new Error("Failed to fetch mentor data");

      const freshMentorData = await response;
      setMentor(freshMentorData.mentor);
      
      const expiresAt = addHours(new Date(), 12).getTime();
      localStorage.setItem("user", JSON.stringify({ user: freshMentorData.mentor, expiresAt }));
    } catch (error) {
      console.error("Erreur lors du chargement du mentor :", error);
      navigate("/login");
    } finally {
      setLoading(false);
    }
  };

  // Helper to refresh user data after subscribe
  const refreshUser = async () => {
    if (!mentor) return;
    const user = getUserFromLocalStorage();
    if (!user) return;
    
    const refreshed = await getMentorById(user.id);
    if (refreshed?.mentor) {
      // Update localStorage and state
      const expiresAt = new Date().getTime() + 12 * 60 * 60 * 1000;
      localStorage.setItem("user", JSON.stringify({ user: refreshed.mentor, expiresAt }));
      setMentor(refreshed.mentor);
    }
  };

  // Handle payment verification on page load
  useEffect(() => {
    const paymentStatus = searchParams.get('payment');
    const sessionId = searchParams.get('session_id');
    
    if (paymentStatus === 'success' && sessionId) {
      setVerifying(true);
      verifyPayment(sessionId)
        .then(() => {
          toast({ 
            title: 'Paiement réussi', 
            description: 'Votre abonnement a été activé avec succès.', 
            className: 'bg-green-500 text-white' 
          });
          refreshUser();
          // Clean URL
          navigate('/mentor-dashboard', { replace: true });
        })
        .catch((err) => {
          toast({ 
            title: 'Erreur de vérification', 
            description: err.message || 'Erreur lors de la vérification du paiement.', 
            variant: 'destructive' 
          });
        })
        .finally(() => setVerifying(false));
    } else if (paymentStatus === 'cancelled') {
      toast({ 
        title: 'Paiement annulé', 
        description: 'Votre paiement a été annulé.', 
        variant: 'destructive' 
      });
      // Clean URL
      navigate('/mentor-dashboard', { replace: true });
    }
  }, [searchParams]);

  useEffect(() => {
    fetchMentorData();
  }, []);

  useEffect(() => {
    const fetchMenteeNames = async () => {
      if (!mentor || !mentor.receivedRequests) return;
      setMenteesLoading(true);
      const uniqueMenteeIds = Array.from(new Set(mentor.receivedRequests.map((req: any) => req.from_mentee_id)));
      const names: Record<string, string> = {};
      await Promise.all(uniqueMenteeIds.map(async (id: string) => {
        try {
          const data = await getMenteeById(id);
          names[id] = data.mentee?.profile?.fullname || data.mentee?.email || 'Inconnu';
        } catch {
          names[id] = 'Inconnu';
        }
      }));
      setMenteeNames(names);
      setMenteesLoading(false);
    };
    fetchMenteeNames();
  }, [mentor]);

  useEffect(() => {
    if (!mentor) return;
    
    setPlansLoading(true);
    getSubscriptionPlans().then(res => {
      // Check if user has active subscription
      const hasActiveSubscription = Array.isArray(mentor?.subscriptions) && mentor.subscriptions.length > 0 && 
        mentor.subscriptions.some((sub: any) => sub.is_active && new Date(sub.end_date) >= new Date());
      
      // Filter plans by category, is_active status, and price > 0
      let filteredPlans = (res.plans || []).filter((p: any) => 
        p.category === "MENTOR" && p.price_eur > 0
      );
      
      // If user has no active subscription, only show active plans
      if (!hasActiveSubscription) {
        filteredPlans = filteredPlans.filter((p: any) => p.is_active === true);
      }
      
      setPlans(filteredPlans);
      setPlansLoading(false);
    });
  }, [mentor]);

  const handleRequestAction = async (requestId: number, action: 'accept' | 'reject') => {
    if (!mentor) return;
    
    const status = action === 'accept' ? 'ACCEPTED' : 'REFUSED';
    setActionLoading(requestId);
    
    try {
      await updateRequestStatus({ requestId, status });
      
      toast({
        title: action === 'accept' ? 'Demande acceptée' : 'Demande refusée',
        description: action === 'accept' 
          ? 'La demande de mentorat a été acceptée avec succès.' 
          : 'La demande de mentorat a été refusée.',
      });
      
      // Refresh mentor data to get updated request status and responded_at
      await fetchMentorData();
      
      // Close dialog if open
      if (dialogOpen) {
        setDialogOpen(false);
        setSelectedRequest(null);
      }
      
    } catch (error: any) {
      console.error('Error updating request status:', error);
      
      let errorMessage = 'Une erreur est survenue lors de la mise à jour du statut.';
      
      if (error.message?.includes('already been responded to')) {
        errorMessage = 'Cette demande a déjà reçu une réponse.';
      } else if (error.message?.includes('Cannot accept') || error.message?.includes('Cannot refuse')) {
        errorMessage = 'Cette demande ne peut plus être modifiée.';
      }
      
      toast({
        title: 'Erreur',
        description: errorMessage,
        variant: 'destructive',
      });
    } finally {
      setActionLoading(null);
    }
  };

  const handlePayment = async () => {
    if (!selectedPlanId || !mentor) return;
    setPaying(true);
    try {
      const data = await createPayment(selectedPlanId, mentor.id, mentor.email);
      // Open Stripe checkout in a new tab
      window.open(data.url, '_blank');
      setSelectedPlanId(null);
    } catch (err: any) {
      toast({ 
        title: 'Erreur de paiement', 
        description: err.message || 'Erreur lors de la création du paiement.', 
        variant: 'destructive' 
      });
    }
    setPaying(false);
  };

  if (loading) {
    return <div className="p-6 text-gray-600">Chargement du tableau de bord...</div>; // Or a spinner
  }

  if (!mentor) {
    return null; // Safety guard — shouldn't be reached if redirect works
  }

  // if (!mentor) {
  //   return <div>Chargement du tableau de bord...</div>; 
  // }
  

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "PENDING":
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800"><Clock className="w-3 h-3 mr-1" />EN ATTENTE</Badge>;
      case "ACCEPTED":
        return <Badge variant="default" className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />ACCEPTÉE</Badge>;
      case "REFUSED":
        return <Badge variant="destructive" className="bg-red-100 text-red-800"><XCircle className="w-3 h-3 mr-1" />REFUSÉE</Badge>;
      case "CANCELLED":
        return <Badge className="bg-gray-400/20 text-gray-500 border-gray-400/30 hologram-effect"><X className="w-3 h-3 mr-1" />ANNULÉE</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Content de vous (re)voir, {mentor.profile?.fullname} !</h1>
          <p className="text-gray-600 mt-2">Quelques statistiques rapides.</p>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Visites du Profil</p>
                  <p className="text-2xl font-bold text-gray-900">{mentor.visits?.length || 0}</p>
                </div>
                <Eye className="w-8 h-8 text-blue-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Demandes Reçues</p>
                  <p className="text-2xl font-bold text-gray-900">{mentor.receivedRequests.length}</p>
                </div>
                <MessageSquare className="w-8 h-8 text-purple-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Demandes Acceptées</p>
                  <p className="text-2xl font-bold text-gray-900">{mentor.receivedRequests.filter(req => req.status === "ACCEPTED").length}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Demandes Refusées</p>
                  <p className="text-2xl font-bold text-gray-900">{mentor.receivedRequests.filter(req => req.status === "REFUSED").length}</p>
                </div>
                <XCircle className="w-8 h-8 text-red-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Demandes en Attente</p>
                  <p className="text-2xl font-bold text-gray-900">{mentor.receivedRequests.filter(req => req.status === "PENDING").length}</p>
                </div>
                <Clock className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Évaluation</p>
                  <div className="flex items-center gap-1">
                    <p className="text-2xl font-bold text-gray-900">{mentor.ratings.length > 0
                      ? (mentor.ratings.reduce((sum, r) => sum + r.rating, 0) / mentor.ratings.length).toFixed(1)
                      : "--"}</p>
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  </div>
                </div>
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Étudiants mentorés</p>
                  <p className="text-2xl font-bold text-gray-900">{new Set(mentor.receivedRequests.filter(req => req.status === "ACCEPTED").map(req => req.from_mentee_id)).size}</p>
                </div>
                <UserCheck className="w-8 h-8 text-indigo-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Taux d'acceptation</p>
                  <p className="text-2xl font-bold text-gray-900">{mentor.receivedRequests.length > 0 
                    ? Math.round((mentor.receivedRequests.filter(req => req.status === "ACCEPTED").length / mentor.receivedRequests.length) * 100) 
                    : 0}
                  </p>
                </div>
                <Percent className="w-8 h-8 text-green-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Requests Management Table */}
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Demandes de Mentorat</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>N°</TableHead>
                      <TableHead>Mentoré</TableHead>
                      <TableHead>Domaine</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead>Date de Réception</TableHead>
                      <TableHead>Date de Réponse</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mentor.receivedRequests.length > 0 
                    ? mentor.receivedRequests.map((request: any, index: number) => {
                        const menteeId: string = String(request.from_mentee_id);
                        return (
                          <TableRow key={request.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell className="font-medium">
                              {menteesLoading
                                ? "Chargement..."
                                : (menteeNames[menteeId] && typeof menteeNames[menteeId] === 'string')
                                  ? menteeNames[menteeId]
                                  : "Inconnu"}
                            </TableCell>
                            <TableCell>{request.subject}</TableCell>
                            <TableCell>{getStatusBadge(request.status)}</TableCell>
                            <TableCell>{new Date(request.created_at).toLocaleDateString('fr-FR')}</TableCell>
                            <TableCell>
                              {request.responded_at 
                                ? (
                                  <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600">
                                      {new Date(request.responded_at).toLocaleDateString('fr-FR')}
                                    </span>
                                    {/* <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                                      Répondu
                                    </Badge> */}
                                  </div>
                                )
                                : (
                                  <span className="text-sm text-gray-400">-</span>
                                )
                              }
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => {
                                    setSelectedRequest({ ...request, menteeName: menteeNames[menteeId], menteeId });
                                    setDialogOpen(true);
                                  }}
                                >
                                  <Eye className="w-4 h-4" />
                                </Button>
                                {request.status === 'PENDING' && !request.responded_at && (
                                  <>
                                    <Button
                                      size="sm"
                                      variant="default"
                                      className="bg-green-600 hover:bg-green-700"
                                      onClick={() => handleRequestAction(request.id, 'accept')}
                                      disabled={actionLoading === request.id}
                                    >
                                      {actionLoading === request.id ? (
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                      ) : (
                                        <CheckCircle className="w-4 h-4" />
                                      )}
                                    </Button>
                                    <Button
                                      size="sm"
                                      variant="destructive"
                                      onClick={() => handleRequestAction(request.id, 'reject')}
                                      disabled={actionLoading === request.id}
                                    >
                                      {actionLoading === request.id ? (
                                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                      ) : (
                                        <X className="w-4 h-4" />
                                      )}
                                    </Button>
                                  </>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        );
                      })
                  : (
                      <TableRow>
                        <TableCell colSpan={6} className="text-center text-gray-500">
                          Aucune requête reçue.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Profile Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Paramètres du Profil</CardTitle>
              </CardHeader>
              <CardContent>
                <Link to="/mentor-profile-settings">
                  <Button className="w-full justify-start">
                    <Settings className="w-4 h-4 mr-2" />
                    Mettre à jour mon Profil
                  </Button>
                </Link>
              </CardContent>
            </Card>
            {/* Subscription Card for Premium Plan */}
            {(() => {
              const now = new Date();
              let valid = false;
              let latest = null;
              if (Array.isArray(mentor.subscriptions) && mentor.subscriptions.length > 0) {
                const sorted = [...mentor.subscriptions].sort((a, b) => new Date(b.end_date).getTime() - new Date(a.end_date).getTime());
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
                        Abonnement Premium
                      </h3>
                      <div className="mb-2 text-sm text-gray-600">Vous n'avez pas d'abonnement Premium actif. Choisissez un plan pour souscrire :</div>
                      {plansLoading ? (
                        <div>Chargement des plans...</div>
                      ) : plans.length === 0 ? (
                        <div>Aucun plan Premium disponible pour le moment.</div>
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
                      <Button onClick={handlePayment} disabled={!selectedPlanId || paying || plansLoading || verifying} className="w-full mt-4">
                         {paying ? 'Redirection...' : verifying ? 'Vérification...' : 'Procéder au paiement'}
                       </Button>
                    </div>
                  </div>
                );
              }
              return null;
            })()}
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
              Retrouvez ici toutes les informations sur la demande de mentorat.
            </DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <div className="space-y-3">
              <div><strong>Mentoré :</strong> {selectedRequest.menteeName || 'Inconnu'}</div>
              <div><strong>Sujet :</strong> {selectedRequest.subject}</div>
              <div><strong>Statut :</strong> {getStatusBadge(selectedRequest.status)}</div>
              <div><strong>Date de réception :</strong> {new Date(selectedRequest.created_at).toLocaleDateString('fr-FR')}</div>
              <div><strong>Date de réponse :</strong> {selectedRequest.responded_at ? (
                <div className="space-y-1">
                  <span className="text-green-600 font-medium">
                    {new Date(selectedRequest.responded_at).toLocaleDateString('fr-FR')} à {new Date(selectedRequest.responded_at).toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                  </span>
                  <div className="text-xs text-gray-500">
                    Réponse en {Math.round((new Date(selectedRequest.responded_at).getTime() - new Date(selectedRequest.created_at).getTime()) / (1000 * 60 * 60 * 24))} jour(s)
                  </div>
                </div>
              ) : '-'}</div>
              {selectedRequest.message && (
                <div><strong>Message :</strong> <div className="bg-muted/40 rounded p-2 mt-1 text-sm">{selectedRequest.message}</div></div>
              )}
            </div>
          )}
          <DialogFooter>
            {selectedRequest && (
              <div className="flex flex-col sm:flex-row gap-2 w-full justify-between mt-4">
                <Link to={selectedRequest ? `/mentee-profile/${selectedRequest.menteeId}` : '#'} className="w-full sm:w-auto">
                  <Button variant="secondary" className="w-full">Voir le profil du mentoré</Button>
                </Link>
                {selectedRequest.status === 'PENDING' && !selectedRequest.responded_at && (
                  <>
                    <Button
                      variant="default"
                      className="w-full sm:w-auto bg-green-600 hover:bg-green-700"
                      onClick={() => handleRequestAction(selectedRequest.id, 'accept')}
                      disabled={actionLoading === selectedRequest.id}
                    >
                      {actionLoading === selectedRequest.id ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      ) : null}
                      Accepter
                    </Button>
                    <Button
                      variant="destructive"
                      className="w-full sm:w-auto"
                      onClick={() => handleRequestAction(selectedRequest.id, 'reject')}
                      disabled={actionLoading === selectedRequest.id}
                    >
                      {actionLoading === selectedRequest.id ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      ) : null}
                      Refuser
                    </Button>
                  </>
                )}
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
                  if (Array.isArray(mentor.subscriptions) && mentor.subscriptions.length > 0) {
                    const sorted = [...mentor.subscriptions].sort((a, b) => new Date(b.end_date).getTime() - new Date(a.end_date).getTime());
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

export default MentorDashboard;
