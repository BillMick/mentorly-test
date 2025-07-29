import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Users, CheckCircle, Target, Star, ArrowRight, Heart, TrendingUp, Award, Clock } from "lucide-react";
import Header from "@/components/Header";
import { useLocation } from "react-router-dom";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import GeneralSynoptic from "@/components/synoptics/GeneralSynoptic";
import InteractiveProcessFlow from "@/components/InteractiveProcessFlow";
import VerifyEmail from "./VerifyEmail";
import { logout as logoutHelper } from "@/helpers/logout";
import { getUserFromLocalStorage } from "@/helpers/getUserFromLocalStorage";
import { fetchMentors } from "@/services/profile/fetchMentors";
import { z } from "zod";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // Check if user is on dashboard pages (simulated logged in state)
  const isLoggedIn = location.pathname.includes('dashboard') || location.pathname.includes('profile');
  const isMentor = location.pathname.includes('mentor');

  // User state for adaptive nav
  const [user, setUser] = useState<any | null>(null);
  const [mentors, setMentors] = useState([]);
  const [mentorsLoading, setMentorsLoading] = useState(true);

  useEffect(() => {
    setUser(getUserFromLocalStorage());
  }, []);

  useEffect(() => {
    const loadMentors = async () => {
      setMentorsLoading(true);
      try {
        const result = await fetchMentors();
        setMentors(result.mentors);
      } catch (error) {
        if (error instanceof z.ZodError) {
          toast({
            title: "Erreur de validation",
            description: error.errors.map((e) => e.message).join("\n"),
            variant: "destructive",
          });
        } else {
          toast({
            title: "Erreur",
            description: error.message || "Erreur lors de la récupération des mentors.",
            variant: "destructive",
          });
        }
      } finally {
        setMentorsLoading(false);
      }
    };
    loadMentors();
  }, []);

  const isAuthenticated = !!user;
  const isMentorUser = user?.role === 'MENTOR';
  const avatarUrl = user?.profile?.avatar || '';
  const fullName = user?.profile?.fullname || user?.fullName || user?.email || 'Utilisateur';
  const isVerified = user?.is_verified;

  const handleSearch = () => {
    // Navigate to search page with query
    navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleLogout = () => {
    logoutHelper();
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
    navigate("/login");
  };

  // Add handler for smooth scroll to 'how-it-works'
  const handleHowItWorksClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setTimeout(() => {
      const section = document.getElementById('how-it-works');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  // Add handler for smooth scroll to 'about'
  const handleAboutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setTimeout(() => {
      const section = document.getElementById('about');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Refined Stripe-inspired Hero Section with integrated navigation */}
      <section className="relative min-h-screen flex flex-col px-4 overflow-hidden">
        {/* Oblique colored background with updated dimensions - left 48%, right 20% */}
        <div className="absolute inset-0" style={{clipPath: 'polygon(0 0, 0 48%, 100% 20%, 100% 0)'}}>
          {/* Main refined gradient with smoother transitions */}
          <div 
            className="absolute inset-0 opacity-90"
            style={{
              background: `linear-gradient(135deg, 
                #635bff 0%, 
                #4f46e5 15%,
                #00d4ff 30%, 
                #06b6d4 45%,
                #7c3aed 60%, 
                #8b5cf6 75%,
                #06b6d4 90%, 
                #00d4ff 100%
              )`,
              animation: 'refined-flow 16s ease-in-out infinite'
            }}
          ></div>
          
          {/* Progressive secondary layer with counter movement */}
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              background: `linear-gradient(-45deg, 
                rgba(99, 91, 255, 0.9) 0%, 
                rgba(79, 70, 229, 0.7) 12%,
                rgba(0, 212, 255, 0.8) 25%, 
                rgba(6, 182, 212, 0.6) 37%,
                rgba(124, 58, 237, 0.8) 50%, 
                rgba(139, 92, 246, 0.7) 62%,
                rgba(6, 182, 212, 0.5) 75%, 
                rgba(99, 91, 255, 0.8) 87%,
                rgba(0, 212, 255, 0.6) 100%
              )`,
              animation: 'refined-counter-flow 20s ease-in-out infinite reverse'
            }}
          ></div>
          
          {/* Enhanced mesh pattern overlay */}
          <div className="absolute inset-0 opacity-8">
            <div 
              className="absolute w-full h-full"
              style={{
                background: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 15px,
                  rgba(255, 255, 255, 0.08) 15px,
                  rgba(255, 255, 255, 0.08) 16px
                ), repeating-linear-gradient(
                  -45deg,
                  transparent,
                  transparent 25px,
                  rgba(255, 255, 255, 0.04) 25px,
                  rgba(255, 255, 255, 0.04) 26px
                )`
              }}
            ></div>
          </div>
          
          {/* Geometric moving figures */}
          <div className="absolute inset-0">
            {/* Large geometric shapes */}
            <div 
              className="absolute top-1/6 left-1/5 w-32 h-32 opacity-10"
              style={{
                background: 'linear-gradient(45deg, rgba(255,255,255,0.15), rgba(255,255,255,0.05))',
                borderRadius: '30%',
                animation: 'oblique-slide 25s linear infinite',
                transform: 'rotate(45deg)'
              }}
            ></div>
            
            <div 
              className="absolute top-1/3 right-1/4 w-24 h-24 opacity-8"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.03))',
                borderRadius: '50%',
                animation: 'oblique-slide-reverse 30s linear infinite',
                animationDelay: '5s'
              }}
            ></div>
            
            <div 
              className="absolute bottom-1/4 left-1/3 w-20 h-20 opacity-12"
              style={{
                background: 'linear-gradient(90deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))',
                borderRadius: '40%',
                animation: 'oblique-slide 18s linear infinite',
                animationDelay: '2s'
              }}
            ></div>
          </div>
        </div>

        {/* Navigation Menu */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            {/* <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-white/20 border border-white/30 rounded-lg flex items-center justify-center">
              </div>
              <span className="text-lg font-semibold text-white">
                Mentorly
              </span>
            </Link> */}

            {/* Desktop Navigation */}
            {/* <nav className="hidden md:flex items-center space-x-8">
              <Link to="/search" className="group relative px-3 py-2 rounded-md transition-all duration-200 text-white/90 hover:text-white hover:bg-white/10">
                <div className="flex items-center space-x-2">
                  <Search className="w-4 h-4" />
                  <span className="font-bold">Trouver des Mentors</span>
                </div>
              </Link>
              <a href="#how-it-works" onClick={handleHowItWorksClick} className="text-white/90 hover:text-white transition-all duration-200 font-bold">
                Comment ça marche
              </a>
              <a href="#about" onClick={handleAboutClick} className="text-white/90 hover:text-white transition-all duration-200 font-bold">
                À propos
              </a>
              {isAuthenticated && (
                <Link
                  to={isMentorUser ? "/mentor-dashboard" : "/mentee-dashboard"}
                  className="text-white/90 hover:text-white transition-all duration-200 font-bold"
                >
                  Dashboard
                </Link>
              )}
            </nav> */}

            {/* Desktop Auth/User Menu */}
            {/* <div className="hidden md:flex items-center space-x-3">
              {isAuthenticated ? (
                <div className="relative">
                  <Button 
                    variant="ghost" 
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)} 
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-all duration-200"
                  >
                    {avatarUrl ? (
                      <img src={avatarUrl} alt={fullName} className="w-6 h-6 rounded-full object-cover border border-white/30" />
                    ) : (
                      <div className="w-6 h-6 bg-white/20 border border-white/30 rounded-full flex items-center justify-center">
                      </div>
                    )}
                    <span className="text-sm font-medium">{fullName}</span>
                    {isVerified && (
                      <span className="ml-1 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">Vérifié</span>
                    )}
                  </Button>
                  {isUserMenuOpen && (
                    <div id="homepage-user-menu-dropdown" className="absolute right-0 mt-2 w-56 bg-black/90 border border-white/10 rounded-lg py-1 z-[1000] shadow-xl">
                      <div className="px-3 py-2 text-white text-sm font-semibold border-b border-white/10 flex items-center gap-2">
                        {avatarUrl ? (
                          <img src={avatarUrl} alt={fullName} className="w-7 h-7 rounded-full object-cover border border-white/30" />
                        ) : (
                          <div className="w-7 h-7 bg-white/20 border border-white/30 rounded-full flex items-center justify-center">
                          </div>
                        )}
                        <span>Bienvenue, {fullName}</span>
                        {isVerified && (
                          <span className="ml-1 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">Vérifié</span>
                        )}
                      </div>
                      <button
                        className="flex items-center w-full px-3 py-2 text-sm text-white hover:bg-white/10 transition-all duration-200"
                        onClick={() => {
                          setIsUserMenuOpen(false);
                          navigate(isMentorUser ? "/mentor-profile-settings" : "/mentee-profile-settings");
                        }}
                      >
                        Paramètres du Profil
                      </button>
                      <button
                        className="flex items-center w-full px-3 py-2 text-sm text-white hover:bg-red-500/20 hover:text-red-300 transition-all duration-200"
                        onClick={handleLogout}
                      >
                        Déconnexion
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="ghost" className="text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all duration-200 font-medium">
                      Connexion
                    </Button>
                  </Link>
                  <Link to="/register">
                    <Button className="bg-white/20 border border-white/30 text-white font-medium px-4 py-2 rounded-lg hover:bg-white/25 transition-all duration-200">
                      Créer mon profil
                    </Button>
                  </Link>
                </>
              )}
            </div> */}

            {/* Mobile menu button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="md:hidden p-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-all duration-200"
            >
              {/* <Menu className="w-5 h-5" /> */}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-white/20 py-4 bg-black/90 mt-2 rounded-lg shadow-xl">
              <div className="flex flex-col space-y-2">
                <Link 
                  to="/search" 
                  className="flex items-center px-4 py-3 rounded-lg transition-all duration-200 text-white hover:bg-white/10" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  {/* <Search className="w-4 h-4 mr-3 text-white/70" /> */}
                  <span className="font-bold">Trouver des Mentors</span>
                </Link>
                <a 
                  href="#how-it-works" 
                  onClick={handleHowItWorksClick}
                  className="text-white/80 hover:text-white transition-all duration-200 px-4 py-2 hover:bg-white/10 rounded-lg font-bold"
                >
                  Comment ça marche
                </a>
                <a 
                  href="#about" 
                  onClick={handleAboutClick}
                  className="text-white/80 hover:text-white transition-all duration-200 px-4 py-2 hover:bg-white/10 rounded-lg font-bold"
                >
                  À propos
                </a>
                
                <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                  {isAuthenticated ? (
                    <>
                      <div className="px-4 py-2 text-sm font-medium text-white flex items-center gap-2">
                        {avatarUrl ? (
                          <img src={avatarUrl} alt={fullName} className="w-5 h-5 rounded-full object-cover border border-white/30 mr-2" />
                        ) : (
                          <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center mr-2">
                            {/* <User className="w-3 h-3 text-white" /> */}
                          </div>
                        )}
                        <span>Bienvenue, {fullName}</span>
                        {isVerified && (
                          <span className="ml-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">Vérifié</span>
                        )}
                      </div>
                      <Link 
                        to={isMentorUser ? "/mentor-profile-settings" : "/mentee-profile-settings"} 
                        onClick={() => setIsMenuOpen(false)} 
                        className="flex items-center px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200"
                      >
                        {/* <Settings className="w-4 h-4 mr-3 text-white/70" /> */}
                        <span className="text-white">Paramètres du Profil</span>
                      </Link>
                      <Link 
                        to="/login" 
                        onClick={() => setIsMenuOpen(false)} 
                        className="flex items-center px-4 py-3 rounded-lg hover:bg-red-500/20"
                      >
                        {/* <LogOut className="w-4 h-4 mr-3 text-red-400" /> */}
                        <span className="text-red-300 font-medium">Déconnexion</span>
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                        <Button variant="ghost" className="w-full justify-start text-white/80 hover:text-white border border-white/20 font-medium">
                          Connexion
                        </Button>
                      </Link>
                      <Link to="/register" onClick={() => setIsMenuOpen(false)}>
                        <Button className="w-full bg-white/20 border border-white/30 text-white font-medium hover:bg-white/25">
                          Commencer
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10 flex-1 flex items-center">
          {/* Left Content */}
          <div className="text-black">
            {/* <AnimatedSection delay={200} animation="slide-right">
              <div className="bg-white/90 backdrop-blur-sm text-gray-900 border border-white/30 text-sm px-4 py-2 rounded-full inline-flex items-center mb-8">
                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                Approuvé par les leaders de l'industrie
              </div>
            </AnimatedSection> */}
            
            <AnimatedSection delay={400} animation="slide-right">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                <span className="block text-black">
                Chaque talent mérite un mentor. Trouvez le vôtre dès aujourd'hui.
                </span>
                {/* <span className="block text-black/80">
                  de mentorat pensée
                </span>
                <span className="block text-black">
                  pour la croissance
                </span> */}
              </h1>
            </AnimatedSection>
            
            <AnimatedSection delay={600} animation="slide-right">
              <p className="text-xl text-black/70 mb-12 max-w-2xl leading-relaxed">
              Rejoignez une communauté de professionnels qui avancent grâce au mentorat. 
              Recevez des conseils personnalisés, partagez votre expérience, et développez 
              vos compétences avec ceux qui vous comprennent.
              </p>
            </AnimatedSection>
            
            <AnimatedSection delay={800} animation="slide-right">
              <div className="flex justify-start mb-12">
                <Link to="/register">
                  <Button 
                    size="lg" 
                    className="h-14 bg-gray-900 text-white hover:bg-gray-800 px-12 text-lg rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
                  >
                    Créer mon profil
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Content - Dashboard Preview */}
          <AnimatedSection delay={1000} animation="scale-in" className="hidden lg:block">
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-white/95 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700 border-emerald-200">
                    Tableau de Bord En Direct
                  </Badge>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Analytiques Mentor</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-blue-600">150+</div>
                        <div className="text-sm text-blue-600/70">Sessions Actives</div>
                      </div>
                      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 rounded-xl">
                        <div className="text-2xl font-bold text-emerald-600">98%</div>
                        <div className="text-sm text-emerald-600/70">Taux de Réussite</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-600">Croissance Mensuelle</span>
                      <span className="text-sm font-bold text-emerald-600">+39,8%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-xl transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">4,9★</div>
                    <div className="text-xs text-gray-600">Évaluation</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl border border-white/20 rounded-xl p-4 shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">10K+</div>
                    <div className="text-xs text-gray-600">Mentors</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust indicators with enhanced animations */}
      {/* <AnimatedSection animation="fade-up">
        <section className="py-20 px-4 bg-white relative">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection delay={200} animation="slide-left">
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">10 000+ mentors </h3>
                  <p className="text-gray-600">Des mentors engagés, sélectionnés pour leur expertise</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={400} animation="fade-up">
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">50 000+ réussites</h3>
                  <p className="text-gray-600">Des milliers de parcours transformés grâce au mentorat</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={600} animation="slide-right">
                <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Support 24/7</h3>
                  <p className="text-gray-600">Une équipe disponible quand vous en avez besoin</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection> */}

      <AnimatedSection animation="fade-up">
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <AnimatedSection delay={200} animation="fade-up">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Conçu pour vous accompagner dans votre parcours
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={400} animation="fade-up">
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Nous résolvons les défis qui empêchent les talents d'atteindre leur plein potentiel.
                </p>
              </AnimatedSection>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection delay={200} animation="slide-left">
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100/50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Le défi</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700">Difficile de trouver un mentor qui comprend vraiment vos enjeux.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700">Manque de programmes de mentorat structurés et axés sur les résultats.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700">Peu de solutions proposent un vrai lien humain, basé sur l'expérience.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={400} animation="slide-right">
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100/50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Notre solution</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">Une plateforme simple pour rencontrer des mentors disponibles et qualifiés.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">Des profils de mentors vérifiés et des avis réels.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">Un abonnement mensuel pour débloquer la mise en relation, sans frais cachés.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* How it works Section */}
      <AnimatedSection animation="fade-up">
        <section id="how-it-works" className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <AnimatedSection delay={200} animation="fade-up">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Comment ça marche
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={400} animation="fade-up">
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Explorez notre processus de mentorat complet avec des visualisations interactives
                </p>
              </AnimatedSection>
            </div>
            
            <AnimatedSection delay={600} animation="scale-in">
              <InteractiveProcessFlow />
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection animation="fade-up">
        <section id="about" className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                À propos de Mentorly
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nous sommes en mission pour démocratiser le mentorat et rendre les conseils de qualité accessibles à tous, partout. Notre plateforme connecte les apprenants passionnés avec des professionnels expérimentés qui veulent partager leurs connaissances.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center p-6 bg-white shadow-lg rounded-xl">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                {/* <div className="flex justify-center mb-4"><svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-7-7 7-7-9 2-2 9z" /></svg></div> */}
                <h3 className="text-xl font-semibold mb-4">Notre Mission</h3>
                <p className="text-gray-600">Combler le fossé entre ceux qui cherchent la connaissance et ceux qui la possèdent, créant des relations de mentorat significatives qui accélèrent la croissance personnelle et professionnelle.</p>
              </div>
              <div className="text-center p-6 bg-white shadow-lg rounded-xl">
                <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                {/* <div className="flex justify-center mb-4"><svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v7m0 0l-3 3m3-3l3 3" /></svg></div> */}
                <h3 className="text-xl font-semibold mb-4">Notre Vision</h3>
                <p className="text-gray-600">Un monde où chacun a accès à un mentorat de qualité, indépendamment de son origine, de sa localisation ou de ses circonstances, favorisant une communauté mondiale d'apprentissage continu.</p>
              </div>
              <div className="text-center p-6 bg-white shadow-lg rounded-xl">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                {/* <div className="flex justify-center mb-4"><svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 21C12 21 4 13.5 4 8.5C4 5.46243 6.46243 3 9.5 3C11.1566 3 12.5 4.34315 12.5 6C12.5 4.34315 13.8434 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 13.5 12 21 12 21Z" /></svg></div> */}
                <h3 className="text-xl font-semibold mb-4">Nos Valeurs</h3>
                <p className="text-gray-600">Nous croyons en l'inclusion, la qualité, la transparence et le pouvoir transformateur de la connexion humaine dans le processus d'apprentissage.</p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* <AnimatedSection animation="fade-up">
        <section className="py-24 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <AnimatedSection delay={200} animation="fade-up">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Conçu pour les professionnels ambitieux
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={400} animation="fade-up">
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Nous résolvons les défis qui empêchent les talents d'atteindre leur plein potentiel.
                </p>
              </AnimatedSection>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection delay={200} animation="slide-left">
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 border border-red-100/50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Le défi</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700">Difficile de trouver un mentor qui comprend vraiment vos enjeux.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700">Manque de programmes de mentorat structurés et axés sur les résultats.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-700">Peu de solutions proposent un vrai lien humain, basé sur l'expérience.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection delay={400} animation="slide-right">
                <div className="space-y-8">
                  <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100/50 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Notre solution</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">Une plateforme simple pour rencontrer des mentors disponibles et qualifiés.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">Des profils de mentors vérifiés et des avis réels.</p>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" />
                        <p className="text-gray-700">Un abonnement mensuel pour débloquer la mise en relation, sans frais cachés.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </AnimatedSection> */}

      <AnimatedSection animation="fade-up">
        <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <AnimatedSection delay={200} animation="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Prêt à accélérer votre carrière ?
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={400} animation="fade-up">
              <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
                Rejoignez des milliers de professionnels qui évoluent déjà grâce au mentorat d'experts.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={600} animation="scale-in">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/register">
                  <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-50 px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 text-lg font-semibold border-0">
                    Commencer
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link to="/register">
                  <Button variant="outline" size="lg" className="border-2 border-white/30 text-black hover:bg-white/10 px-8 py-4 rounded-lg transition-all duration-200 text-lg font-semibold">
                    Devenir mentor
                  </Button>
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
};

export default Index;
