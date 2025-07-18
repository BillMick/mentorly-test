import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Users, Mail, Lock, User, Eye, EyeOff, UserCheck, GraduationCap, Zap, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { toast } from "@/components/ui/use-toast";
import { registerUser } from "@/services/auth/register";
import { registerSchema } from "@/services/validation/registerSchema";
// import { sendConfirmationEmail } from "@/services/auth/sendConfirmationEmail";
import { z } from "zod";

const Register = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const roleFromUrl = searchParams.get('role');
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: roleFromUrl === "mentor" ? "mentor" : "mentee"
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Scroll to top when component mounts or when URL changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update role when URL parameter changes
  useEffect(() => {
    if (roleFromUrl === "mentor") {
      setFormData(prev => ({ ...prev, role: "mentor" }));
    }
  }, [roleFromUrl]);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    setIsLoading(true);
  
    try {
      // form validation
      const validatedData = registerSchema.parse(formData);
      const result = await registerUser({
        fullName: validatedData.fullName,
        email: validatedData.email,
        password: validatedData.password,
        role: validatedData.role,
      });

      // Store user info
      localStorage.setItem("user", JSON.stringify(result.user));
      // sendConfirmationEmail({
      //   id: result.user.id,
      //   email: result.user.email,
      //   fullName: result.user.fullname,
      // });
  
  
      // window.location.href = result.user.role === "MENTOR" ? "/mentor-dashboard" : "/mentee-dashboard";
      navigate(result.user.role === "MENTOR"
        ? "/mentor-dashboard"
        : "/mentee-dashboard");
    } catch (error: any) {
      if (error instanceof z.ZodError) {
        const messages = error.errors.map((e) => e.message).join(' ');
        toast({
          title: 'Erreur de validation',
          description: messages,
          variant: 'destructive',
        });
      } else {
        toast({
          title: 'Erreur',
          description: error.message || 'Erreur lors de l\'inscription.',
          variant: 'destructive',
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      <Header />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-primary/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-24 h-24 bg-secondary/5 rounded-full blur-xl animate-pulse delay-300"></div>
        <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-accent/3 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>
      
      <div className="flex items-center justify-center min-h-[calc(100vh-200px)] px-4 py-12 relative z-10">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="relative mx-auto mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl flex items-center justify-center avatar-glow mx-auto">
                <Zap className="w-10 h-10 text-white" />
              </div>
              <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl animate-ping mx-auto"></div>
              <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-accent animate-pulse" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-3">
              Rejoignez Mentorly
            </h1>
            <p className="text-muted-foreground text-lg">Créez votre compte et commencez votre parcours</p>
            <div className="connection-line w-24 mx-auto mt-4"></div>
          </div>

          <div className="cyber-card rounded-2xl overflow-hidden">
            <div className="data-stream"></div>
            <CardHeader className="space-y-1 text-center pt-8">
              <CardTitle className="text-2xl font-bold text-foreground">Créer un Compte</CardTitle>
              <CardDescription className="text-muted-foreground">
                Choisissez votre rôle et remplissez vos informations
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Role Selection */}
                <div className="space-y-4">
                  <Label className="text-base font-medium text-foreground">Je veux :</Label>
                  <RadioGroup
                    value={formData.role}
                    onValueChange={(value) => handleInputChange('role', value)}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="cyber-card border-2 border-primary/30 rounded-xl p-4 hover:border-primary/50 transition-all duration-300 group">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="mentee" id="mentee" className="border-primary text-primary" />
                        <div className="flex items-center space-x-2">
                          <GraduationCap className="w-5 h-5 text-primary group-hover:animate-bounce" />
                          <Label htmlFor="mentee" className="cursor-pointer text-foreground font-medium">Trouver un Mentor</Label>
                        </div>
                      </div>
                    </div>
                    <div className="cyber-card border-2 border-secondary/30 rounded-xl p-4 hover:border-secondary/50 transition-all duration-300 group">
                      <div className="flex items-center space-x-3">
                        <RadioGroupItem value="mentor" id="mentor" className="border-secondary text-secondary" />
                        <div className="flex items-center space-x-2">
                          <UserCheck className="w-5 h-5 text-secondary group-hover:animate-bounce" />
                          <Label htmlFor="mentor" className="cursor-pointer text-foreground font-medium">Devenir Mentor</Label>
                        </div>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-foreground font-medium">Nom Complet</Label>
                  <div className="relative group">
                    <User className="absolute left-4 top-4 h-5 w-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Entrez votre nom complet"
                      value={formData.fullName}
                      onChange={(e) => handleInputChange('fullName', e.target.value)}
                      className="pl-12 h-14 bg-muted/10 border-border/30 focus:border-accent rounded-xl text-foreground placeholder:text-muted-foreground transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">Adresse E-mail</Label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-4 h-5 w-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="Entrez votre e-mail"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="pl-12 h-14 bg-muted/10 border-border/30 focus:border-accent rounded-xl text-foreground placeholder:text-muted-foreground transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-foreground font-medium">Mot de Passe</Label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-4 h-5 w-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Créez un mot de passe"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className="pl-12 pr-12 h-14 bg-muted/10 border-border/30 focus:border-accent rounded-xl text-foreground placeholder:text-muted-foreground transition-all duration-300"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-4 text-muted-foreground hover:text-accent transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-foreground font-medium">Confirmer le Mot de Passe</Label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-4 h-5 w-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirmez votre mot de passe"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className="pl-12 pr-12 h-14 bg-muted/10 border-border/30 focus:border-accent rounded-xl text-foreground placeholder:text-muted-foreground transition-all duration-300"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-4 text-muted-foreground hover:text-accent transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <input
                    id="terms"
                    type="checkbox"
                    className="mt-1 rounded border-border bg-muted/10 text-accent shadow-sm focus:border-accent focus:ring focus:ring-accent/20 focus:ring-opacity-50 transition-all duration-300"
                    required
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground leading-relaxed">
                    J'accepte les{" "}
                    <Link to="/terms" className="text-accent hover:text-accent/80 underline transition-colors">
                      Conditions d'Utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link to="/privacy" className="text-accent hover:text-accent/80 underline transition-colors">
                      Politique de Confidentialité
                    </Link>
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full h-14 cyber-button bg-gradient-to-r from-primary via-accent to-secondary hover:from-primary/80 hover:via-accent/80 hover:to-secondary/80 text-white font-medium rounded-xl shadow-lg transition-all duration-300 relative overflow-hidden"
                  disabled={isLoading}
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"></div>
                        Création du compte...
                      </>
                    ) : (
                      <>
                        <Zap className="w-5 h-5 mr-2" />
                        Créer un Compte
                      </>
                    )}
                  </span>
                </Button>
              </form>

              <div className="mt-8 text-center">
                <div className="connection-line w-16 mx-auto mb-4"></div>
                <p className="text-sm text-muted-foreground">
                  Vous avez déjà un compte ?{" "}
                  <Link to="/login" className="text-accent hover:text-accent/80 font-medium underline transition-colors">
                    Connectez-vous ici
                  </Link>
                </p>
              </div>
            </CardContent>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Register;
