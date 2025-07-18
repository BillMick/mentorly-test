import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Loader2, CheckCircle, AlertCircle, Mail } from "lucide-react";

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error' | 'resend'>("loading");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isResending, setIsResending] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setStatus("error");
      setMessage("Lien de vérification invalide ou manquant.");
      return;
    }
    // Call backend to verify
    fetch(`${import.meta.env.VITE_SUPABASE_FUNCTION_URL}/verify-email?token=${token}`)
      .then(async (res) => {
        const data = await res.json();
        if (res.ok) {
          setStatus("success");
          setMessage("Votre adresse email a été vérifiée avec succès. Vous pouvez maintenant vous connecter.");
        } else {
          setStatus("error");
          setMessage(data.error || "Erreur lors de la vérification de l'email.");
          // Try to decode email from token for resend
          try {
            const payload = JSON.parse(atob(token.split('.')[1]));
            if (payload.email) setEmail(payload.email);
          } catch {}
        }
      })
      .catch(() => {
        setStatus("error");
        setMessage("Erreur lors de la vérification de l'email.");
      });
  }, [searchParams]);

  const handleResend = async () => {
    setIsResending(true);
    setMessage("");
    try {
      const res = await fetch(`${import.meta.env.VITE_SUPABASE_FUNCTION_URL}/send-verification-email`, {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("resend");
        setMessage("Un nouvel email de vérification a été envoyé à " + email + ".");
      } else {
        setMessage(data.error || "Erreur lors de l'envoi de l'email de vérification.");
      }
    } catch {
      setMessage("Erreur lors de l'envoi de l'email de vérification.");
    } finally {
      setIsResending(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Vérification de l'email</h1>
          </div>
          <div className="shadow-xl border-0 bg-white/80 backdrop-blur-sm rounded-lg p-8 text-center">
            {status === "loading" && (
              <>
                <Loader2 className="w-10 h-10 animate-spin mx-auto mb-4 text-blue-600" />
                <p className="text-gray-700">Vérification de votre email en cours...</p>
              </>
            )}
            {status === "success" && (
              <>
                <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-4" />
                <p className="text-green-700 font-semibold mb-4">{message}</p>
                <Button className="w-full" onClick={() => navigate('/login')}>Se connecter</Button>
              </>
            )}
            {status === "error" && (
              <>
                <AlertCircle className="w-10 h-10 text-red-500 mx-auto mb-4" />
                <p className="text-red-700 font-semibold mb-4">{message}</p>
                {email && (
                  <Button className="w-full mb-2" onClick={handleResend} disabled={isResending}>
                    {isResending ? "Envoi..." : "Renvoyer l'email de vérification"}
                  </Button>
                )}
                <Button variant="outline" className="w-full" onClick={() => navigate('/login')}>Retour à la connexion</Button>
              </>
            )}
            {status === "resend" && (
              <>
                <CheckCircle className="w-10 h-10 text-green-500 mx-auto mb-4" />
                <p className="text-green-700 font-semibold mb-4">{message}</p>
                <Button className="w-full" onClick={() => navigate('/login')}>Retour à la connexion</Button>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VerifyEmail; 