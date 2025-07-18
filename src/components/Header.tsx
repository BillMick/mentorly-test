import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Users, Search, User, LogOut, Settings, Shield, CreditCard } from "lucide-react";
import { logout as logoutHelper } from "@/helpers/logout";
import { getUserFromLocalStorage } from "@/helpers/getUserFromLocalStorage";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const location = useLocation();
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true); // NEW
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = getUserFromLocalStorage();

    if (storedUser) {
      try {
        setUser(storedUser);
      } catch (err) {
        console.error("Error parsing user from localStorage from header file", err);
        localStorage.removeItem("user"); // Clean up bad data
      }
    }
    setLoading(false); // Done loading in all cases
  }, []);

  if (loading) return null;

  // Determine authentication from user state
  const isAuthenticated = !!user;
  const isMentor = user?.role === 'MENTOR';
  const isHomepage = location.pathname === '/';
  const avatarUrl = user?.profile?.avatar || '';
  const fullName = user?.profile?.fullname || user?.fullName || user?.email || 'Utilisateur';
  const isVerified = user?.is_verified;

  const handleHowItWorksClick = (e: React.MouseEvent) => {
    if (isHomepage) {
      e.preventDefault();
      setTimeout(() => {
        const section = document.getElementById('how-it-works');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('how-it-works');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
    setIsMenuOpen(false);
  };

  const handleAboutClick = (e: React.MouseEvent) => {
    if (isHomepage) {
      e.preventDefault();
      setTimeout(() => {
        const section = document.getElementById('about');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      e.preventDefault();
      navigate('/');
      setTimeout(() => {
        const section = document.getElementById('about');
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      }, 500);
    }
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logoutHelper();
    setIsUserMenuOpen(false);
    setIsMenuOpen(false);
    navigate("/login");
  };

  return (
    <header className="relative sticky top-0 z-50">
      {/* Colorful gradient background - always visible */}
      <div className="absolute inset-0">
        {/* Main colorful gradient */}
        <div className="absolute inset-0" style={{
          background: `linear-gradient(135deg, 
                #635bff 0%, 
                #00d4ff 25%, 
                #7c3aed 50%, 
                #06b6d4 75%, 
                #8b5cf6 100%
              )`,
          animation: 'refined-flow 12s ease-in-out infinite'
        }}></div>
        
        {/* Subtle overlay for depth */}
        <div className="absolute inset-0 opacity-60" style={{
          background: `linear-gradient(-45deg, 
                rgba(99, 91, 255, 0.8) 0%, 
                rgba(0, 212, 255, 0.6) 25%, 
                rgba(124, 58, 237, 0.7) 50%, 
                rgba(6, 182, 212, 0.5) 75%, 
                rgba(139, 92, 246, 0.8) 100%
              )`,
          animation: 'refined-counter-flow 15s ease-in-out infinite reverse'
        }}></div>
        
        {/* Subtle mesh overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-full" style={{
            background: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 2px,
                  rgba(255, 255, 255, 0.03) 2px,
                  rgba(255, 255, 255, 0.03) 4px
                )`
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-8 h-8 bg-white/20 border border-white/30 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-white">
              Mentorly
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/search" className="group relative px-3 py-2 rounded-md transition-all duration-200 text-white hover:text-gray-200 hover:bg-white/10">
              <div className="flex items-center space-x-2">
                <Search className="w-4 h-4" />
                <span className="font-bold">Trouver des Mentors</span>
              </div>
            </Link>
            {isHomepage ? (
              <button 
                onClick={handleHowItWorksClick}
                className="transition-all duration-200 font-bold text-white hover:text-gray-200"
              >
                Comment ça marche
              </button>
            ) : (
              <a href="#how-it-works" onClick={handleHowItWorksClick} className="transition-all duration-200 font-bold text-white hover:text-gray-200">
                Comment ça marche
              </a>
            )}
            <a href="#about" onClick={handleAboutClick} className="transition-all duration-200 font-bold text-white hover:text-gray-200">
              À propos
            </a>
            {isAuthenticated && (
              <Link
                to={isMentor ? "/mentor-dashboard" : "/mentee-dashboard"}
                className="transition-all duration-200 font-bold text-white hover:text-gray-200"
              >
                Dashboard
              </Link>
            )}
          </nav>

          {/* Desktop Auth/User Menu */}
          <div className="hidden md:flex items-center space-x-3">
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
                      <User className="w-3 h-3 text-white" />
                    </div>
                  )}
                  <span className="text-sm font-medium">{fullName}</span>
                  {isVerified && (
                    <span className="ml-1 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">Vérifié</span>
                  )}
                </Button>
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-black/90 border border-white/10 rounded-lg py-1 z-50 shadow-xl">
                    <div className="px-3 py-2 text-white text-sm font-semibold border-b border-white/10 flex items-center gap-2">
                      {avatarUrl ? (
                        <img src={avatarUrl} alt={fullName} className="w-7 h-7 rounded-full object-cover border border-white/30" />
                      ) : (
                        <div className="w-7 h-7 bg-white/20 border border-white/30 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-white" />
                        </div>
                      )}
                      <span>Bienvenue, {fullName}</span>
                      {isVerified && (
                        <span className="ml-1 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">Vérifié</span>
                      )}
                    </div>
                    <Link 
                      to={isMentor ? "/mentor-profile-settings" : "/mentee-profile-settings"} 
                      className="block px-3 py-2 text-white text-sm hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
                    >
                      <Settings className="w-4 h-4" />
                      Paramètres du Profil
                    </Link>
                    <div className="border-t border-white/10 my-1" />
                    <Link
                      to="/abonnement"
                      className="block px-3 py-2 text-white text-sm hover:bg-white/10 transition-all duration-200 flex items-center gap-2"
                    >
                      <CreditCard className="w-4 h-4" />
                      Abonnement
                    </Link>
                    <div className="border-t border-white/10 my-1" />
                    <button
                      className="flex items-center w-full px-3 py-2 text-sm text-white hover:bg-red-500/20 hover:text-red-300 transition-all duration-200"
                      onClick={handleLogout}
                    >
                      <LogOut className="w-4 h-4 mr-2 text-red-400" />
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
                <Link to="/register?role=mentor">
                  <Button className="bg-white/20 border border-white/30 text-white font-medium px-4 py-2 rounded-lg hover:bg-white/25 transition-all duration-200">
                    Devenir Mentor
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/15 transition-all duration-200"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                <Search className="w-4 h-4 mr-3 text-white/70" />
                <span className="font-bold">Trouver des Mentors</span>
              </Link>
              {isHomepage ? (
                <button 
                  onClick={handleHowItWorksClick}
                  className="text-white/80 hover:text-white transition-all duration-200 px-4 py-2 hover:bg-white/10 rounded-lg font-bold text-left"
                >
                  Comment ça marche
                </button>
              ) : (
                <a href="#how-it-works" onClick={handleHowItWorksClick} className="text-white/80 hover:text-white transition-all duration-200 px-4 py-2 hover:bg-white/10 rounded-lg font-bold">
                  Comment ça marche
                </a>
              )}
              <a href="#about" onClick={handleAboutClick} className="text-white/80 hover:text-white transition-all duration-200 px-4 py-2 hover:bg-white/10 rounded-lg font-bold">
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
                          <User className="w-3 h-3 text-white" />
                        </div>
                      )}
                      <span>Bienvenue, {fullName}</span>
                      {isVerified && (
                        <span className="ml-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">Vérifié</span>
                      )}
                    </div>
                    <Link 
                      to={isMentor ? "/mentor-profile-settings" : "/mentee-profile-settings"} 
                      onClick={() => setIsMenuOpen(false)} 
                      className="flex items-center px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200"
                    >
                      <Settings className="w-4 h-4 mr-3 text-white/70" />
                      <span className="text-white">Paramètres du Profil</span>
                    </Link>
                    <Link
                      to="/abonnement"
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center px-4 py-3 rounded-lg hover:bg-white/10 transition-all duration-200"
                    >
                      <Shield className="w-4 h-4 mr-3 text-white/70" />
                      <span className="text-white">Abonnement</span>
                    </Link>
                    <button 
                      onClick={handleLogout} 
                      className="flex items-center px-4 py-3 rounded-lg hover:bg-red-500/20 w-full"
                    >
                      <LogOut className="w-4 h-4 mr-3 text-red-400" />
                      <span className="text-red-300 font-medium">Déconnexion</span>
                    </button>
                  </>
                ) : (
                  <>
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-white/80 hover:text-white border border-white/20 font-medium">
                        Connexion
                      </Button>
                    </Link>
                    <Link to="/register?role=mentor" onClick={() => setIsMenuOpen(false)}>
                      <Button className="w-full bg-white/20 border border-white/30 text-white font-medium hover:bg-white/25">
                        Devenir Mentor
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
