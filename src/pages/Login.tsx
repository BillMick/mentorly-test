import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Mail, Lock, Eye, EyeOff, AlertCircle } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "@/components/ui/use-toast";
import { loginSchema } from "@/services/validation/loginSchema";
import { loginUser } from "@/services/auth/auth";
import { z } from "zod";
import { addHours } from "date-fns";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [verificationPending, setVerificationPending] = useState(false);
  const [unverifiedEmail, setUnverifiedEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setVerificationPending(false);
    setUnverifiedEmail("");
    
    // Handle login logic here
    try {      
      const validated = loginSchema.parse({ email, password });
  
      const result = await loginUser(validated.email, validated.password);
      // If not verified, show message and do not proceed
      if (result.user && result.user.is_verified === false) {
        setVerificationPending(true);
        setUnverifiedEmail(result.user.email);
        setIsLoading(false);
        return;
      }

      // Store user and token info with 12h expiration
      const expiresAt = addHours(new Date(), 12).getTime();
      localStorage.setItem("user", JSON.stringify({ user: result.user, expiresAt }));
      localStorage.setItem("token", result.token);
      
      // Redirect user based on role if needed
      window.location.href = result.user.role === "MENTOR" ? "/mentor-dashboard" : "/mentee-dashboard"
    } catch (err) {
      if (err instanceof z.ZodError) {
        toast({
          title: 'Erreur de validation',
          description: err.errors.map((e) => e.message).join(' '),
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Erreur',
          description: err.message || 'Erreur lors de la connexion.',
          variant: 'destructive',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Bon retour</h1>
            <p className="text-gray-600">Connectez-vous à votre compte Mentorly</p>
          </div>

          <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="space-y-1 text-center">
              <CardTitle className="text-2xl font-bold">Connexion</CardTitle>
              <CardDescription>
                Entrez vos identifiants pour accéder à votre compte
              </CardDescription>
            </CardHeader>
            <CardContent>
              {verificationPending ? (
                <div className="flex flex-col items-center justify-center text-center py-8">
                  <AlertCircle className="w-10 h-10 text-yellow-500 mb-2" />
                  <h2 className="text-lg font-semibold mb-2">Vérification de l'email requise</h2>
                  <p className="mb-4 text-gray-700">
                    Votre adresse email (<span className="font-medium">{unverifiedEmail}</span>) n'est pas encore vérifiée.<br />
                    Veuillez cliquer sur le lien de vérification envoyé à votre adresse email pour activer votre compte.
                  </p>
                  <Button disabled className="mb-2 w-full">
                    Renvoyer l'email de vérification (bientôt disponible)
                  </Button>
                  <Button variant="outline" className="w-full" onClick={() => setVerificationPending(false)}>
                    Retour à la connexion
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Adresse e-mail</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Entrez votre e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 h-12 border-2 focus:border-blue-500 rounded-lg"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Mot de passe</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Entrez votre mot de passe"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 h-12 border-2 focus:border-blue-500 rounded-lg"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        id="remember"
                        type="checkbox"
                        className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                      />
                      <Label htmlFor="remember" className="text-sm text-gray-600">
                        Se souvenir de moi
                      </Label>
                    </div>
                    <Link to="/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
                      Mot de passe oublié ?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    disabled={isLoading}
                  >
                    {isLoading ? "Connexion..." : "Se connecter"}
                  </Button>
                </form>
              )}

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Vous n'avez pas de compte ?{" "}
                  <Link to="/register" className="text-blue-600 hover:text-blue-500 font-medium">
                    Inscrivez-vous ici
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Login;
