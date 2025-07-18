import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUserFromLocalStorage } from "@/helpers/getUserFromLocalStorage";
import { getSubscriptionPlans } from "@/services/subscription/getSubscriptionPlans";
import { unsubscribe } from "@/services/subscription/unsubscribe";
import { toast } from "@/components/ui/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getMenteeById } from "@/services/profile/getMenteeById";
import { getMentorById } from "@/services/profile/getMentorById";

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
      if (user.role === "MENTOR") {
        setPlans((res.plans || []).filter((p: any) => p.name === "Premium"));
      } else {
        setPlans((res.plans || []).filter((p: any) => p.name === "Basic"));
      }
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
      const res = await fetch(`${import.meta.env.VITE_SUPABASE_FUNCTION_URL}/subscribe`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
        },
        body: JSON.stringify({ userId: user.id, planId: selectedPlanId })
      });
      const data = await res.json();
      if (res.ok && data.success) {
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
                        style={{ cursor: 'pointer' }}
                      >
                        <div>
                          <div className="cyber-button hover:bg-primary/10 ml-1 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">{plan.name.toUpperCase()}</div>
                          <div className="text-sm text-gray-500">Durée : {plan.duration_days} jours</div>
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
      <Footer />
    </div>
  );
};

export default Abonnement; 