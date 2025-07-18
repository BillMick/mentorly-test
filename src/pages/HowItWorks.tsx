
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Calendar, MessageSquare, CheckCircle, Users, Search } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import InteractiveProcessFlow from "@/components/InteractiveProcessFlow";

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Comment Mentorly Fonctionne
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre plateforme facilite la recherche du mentor parfait ou le partage de votre expertise avec des apprenants motivés. 
            Explorez notre processus interact ci-dessous.
          </p>
        </AnimatedSection>

        {/* Interactive Process Flow */}
        <AnimatedSection className="mb-20">
          <InteractiveProcessFlow />
        </AnimatedSection>

        {/* Features Section */}
        <AnimatedSection className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Fonctionnalités de la Plateforme</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <AnimatedSection delay={200} animation="slide-right">
                <div className="flex items-start gap-4">
                  <Star className="w-6 h-6 text-yellow-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Système d'Évaluation et d'Avis</h4>
                    <p className="text-gray-600">Système de feedback transparent pour vous aider à choisir les meilleurs mentors.</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={400} animation="slide-right">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-blue-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Planification Flexible</h4>
                    <p className="text-gray-600">Réservez des sessions qui correspondent à votre emploi du temps avec une gestion de calendrier intégrée.</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={600} animation="slide-right">
                <div className="flex items-start gap-4">
                  <MessageSquare className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Messagerie Sécurisée</h4>
                    <p className="text-gray-600">Système de messagerie intégré pour une communication continue avec vos mentors.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
            <div className="space-y-6">
              <AnimatedSection delay={300} animation="slide-left">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-purple-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Profils Vérifiés</h4>
                    <p className="text-gray-600">Tous les mentors passent par un processus de vérification pour garantir la qualité.</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={500} animation="slide-left">
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-indigo-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Support Communautaire</h4>
                    <p className="text-gray-600">Rejoignez une communauté d'apprenants et de mentors qui s'entraident.</p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={700} animation="slide-left">
                <div className="flex items-start gap-4">
                  <Search className="w-6 h-6 text-orange-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-2">Matching Intelligence</h4>
                    <p className="text-gray-600">Notre algorithme suggère les meilleurs mentors basés sur vos objectifs et préférences.</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-12 text-white" animation="scale-in">
          <h2 className="text-3xl font-bold mb-4">Prêt à Commencer ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Rejoignez des milliers d'apprenants et de mentors qui évoluent déjà ensemble
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
                Trouver un Mentor
              </Button>
            </Link>
            <Link to="/register">
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
                Devenir Mentor
              </Button>
            </Link>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </div>
  );
};

export default HowItWorks;
