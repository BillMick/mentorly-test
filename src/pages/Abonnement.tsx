import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { getUserFromLocalStorage } from "@/helpers/getUserFromLocalStorage";
import { getSubscriptionPlans } from "@/services/subscription/getSubscriptionPlans";
import { unsubscribe } from "@/services/subscription/unsubscribe";
import { toast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMenteeById } from "@/services/profile/getMenteeById";
import { getMentorById } from "@/services/profile/getMentorById";
import { subscribe } from "@/services/subscription/subscribe";

const Abonnement = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any | null>(getUserFromLocalStorage());
  const [plans, setPlans] = useState<any[]>([]);
  const [plansLoading, setPlansLoading] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [unsubscribing, setUnsubscribing] = useState(false);
  const [latest, setLatest] = useState<any>(null);
  const [valid, setValid] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalPlan, setModalPlan] = useState<any>(null);

  // Helper to refresh user data after subscribe/unsubscribe
  const refreshUser = async () => {
    if (!user) return;
    let refreshed = null;
    if (user.role === "MENTOR") {
      const res = await getMentorById(user.id);
      refreshed = res.mentor;
    } else {
      const res = await getMenteeById(user.id);
      refreshed = res.mentee;
    }
    if (refreshed) {
      // Update localStorage and state
      const expiresAt = new Date().getTime() + 12 * 60 * 60 * 1000;
      localStorage.setItem("user", JSON.stringify({ user: refreshed, expiresAt }));
      setUser(refreshed);
      // Update subscription card
      if (Array.isArray(refreshed.subscriptions) && refreshed.subscriptions.length > 0) {
        const sorted = [...refreshed.subscriptions].sort((a, b) => new Date(b.end_date).getTime() - new Date(a.end_date).getTime());
        const latestSub = sorted[0];
        setLatest(latestSub);
        setValid(latestSub && latestSub.is_active && new Date(latestSub.end_date) >= new Date());
      } else {
        setLatest(null);
        setValid(false);
      }
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    setPlansLoading(true);
    getSubscriptionPlans().then(res => {
      // Check if user has active subscription
      const hasActiveSubscription = Array.isArray(user?.subscriptions) && user.subscriptions.length > 0 && 
        user.subscriptions.some((sub: any) => sub.is_active && new Date(sub.end_date) >= new Date());
      
      // Filter plans by category and is_active status
      let filteredPlans = (res.plans || []).filter((p: any) => p.category === user.role);
      
      // If user has no active subscription, only show active plans
      if (!hasActiveSubscription) {
        filteredPlans = filteredPlans.filter((p: any) => p.is_active === true);
      }
      
      setPlans(filteredPlans);
      setPlansLoading(false);
    });
    // Set initial subscription state
    if (Array.isArray(user?.subscriptions) && user.subscriptions.length > 0) {
      const sorted = [...user.subscriptions].sort((a, b) => new Date(b.end_date).getTime() - new Date(a.end_date).getTime());
      const latestSub = sorted[0];
      setLatest(latestSub);
      setValid(latestSub && latestSub.is_active && new Date(latestSub.end_date) >= new Date());
    } else {
      setLatest(null);
      setValid(false);
    }
  }, [user, navigate]);

  const handleSubscribe = async () => {
    if (!selectedPlanId || !user) return;
    setSubscribing(true);
    try {
      const data = await subscribe(user.id, selectedPlanId);
      if (data.success) {
        toast({ title: 'Abonnement réussi', description: 'Votre abonnement a été activé.', className: 'bg-green-500 text-white' });
        await refreshUser();
        setSelectedPlanId(null);
      } else {
        toast({ title: 'Erreur', description: data.error || 'Erreur lors de la souscription.', variant: 'destructive' });
      }
    } catch (err) {
      toast({ title: 'Erreur réseau', description: 'Erreur réseau lors de la souscription.', variant: 'destructive' });
    }
    setSubscribing(false);
  };

  const handleUnsubscribe = async () => {
    if (!user) return;
    setUnsubscribing(true);
    try {
      await unsubscribe(user.id);
      toast({ title: 'Désabonnement réussi', description: 'Votre abonnement a été résilié.', className: 'bg-green-500 text-white' });
      await refreshUser();
    } catch (err: any) {
      toast({ title: 'Erreur', description: err.message || 'Erreur lors de la résiliation.', variant: 'destructive' });
    }
    setUnsubscribing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Button variant="outline" onClick={() => navigate(user?.role === 'MENTOR' ? '/mentor-dashboard' : '/mentee-dashboard')} className="mb-6">
          Retour au tableau de bord
        </Button>
        <Card>
          <CardHeader>
            <CardTitle>Gestion de l'abonnement</CardTitle>
          </CardHeader>
          <CardContent>
            {valid && latest ? (
              <div className="p-4 rounded-lg bg-blue-50 border border-blue-200 mb-2">
                <div><strong>Plan :</strong> <span className="cyber-button hover:bg-primary/10 ml-1 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">{latest.plan?.name?.toUpperCase()}</span></div>
                <div>
                  <strong>Statut :</strong>{" "}
                  <span className="text-green-600 font-semibold">Actif</span>
                  {" — Jusqu'au "}
                  <strong>{new Date(latest.end_date).toLocaleDateString("fr-FR")}</strong>
                </div>
                <Button onClick={handleUnsubscribe} disabled={unsubscribing} className="mt-4" variant="destructive">
                  {unsubscribing ? 'Désabonnement...' : 'Se désabonner'}
                </Button>
              </div>
            ) : (
              <div>
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
                        <div className="font-bold text-lg">{plan.price_eur} €</div>
                      </div>
                    ))}
                  </div>
                )}
                <Button onClick={handleSubscribe} disabled={!selectedPlanId || subscribing || plansLoading} className="w-full mt-4">
                  {subscribing ? 'Souscription...' : 'Valider et souscrire'}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

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
                {valid && latest && latest.plan_id === modalPlan.id && (
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
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default Abonnement; 