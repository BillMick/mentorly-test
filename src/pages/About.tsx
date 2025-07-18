
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Heart, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "PDG et Co-Fondatrice",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      bio: "Ancienne dirigeante tech avec plus de 15 ans d'expérience dans la création de plateformes éducatives."
    },
    {
      name: "Michael Chen",
      role: "CTO et Co-Fondateur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      bio: "Ingénieur logiciel passionné par la création de technologies qui connectent les gens et facilitent l'apprentissage."
    },
    {
      name: "Emma Williams",
      role: "Responsable Communauté",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      bio: "Spécialiste en éducation focalisée sur la création de communautés d'apprentissage inclusives et de relations de mentorat."
    }
  ];

  const stats = [
    { number: "10 000+", label: "Utilisateurs Actifs" },
    { number: "2 500+", label: "Mentors Vérifiés" },
    { number: "50 000+", label: "Sessions Terminées" },
    { number: "95%", label: "Taux de Satisfaction" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            À Propos de Mentorly
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous sommes en mission pour démocratiser le mentorat et rendre les conseils de qualité accessibles à tous, 
            partout. Notre plateforme connecte les apprenants passionnés avec des professionnels expérimentés qui veulent partager leurs connaissances.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6 bg-white shadow-lg">
            <CardContent className="pt-6">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Notre Mission</h3>
              <p className="text-gray-600">
                Combler le fossé entre ceux qui cherchent la connaissance et ceux qui la possèdent, 
                créant des relations de mentorat significatives qui accélèrent la croissance personnelle et professionnelle.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-white shadow-lg">
            <CardContent className="pt-6">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Notre Vision</h3>
              <p className="text-gray-600">
                Un monde où chacun a accès à un mentorat de qualité, indépendamment de son origine, 
                de sa localisation ou de ses circonstances, favorisant une communauté mondiale d'apprentissage continu.
              </p>
            </CardContent>
          </Card>
          
          <Card className="text-center p-6 bg-white shadow-lg">
            <CardContent className="pt-6">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">Nos Valeurs</h3>
              <p className="text-gray-600">
                Nous croyons en l'inclusion, la qualité, la transparence et le pouvoir transformateur 
                de la connexion humaine dans le processus d'apprentissage.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Notre Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-xl p-8 shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Notre Histoire</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              Mentorly est né d'une observation simple : bien qu'il y ait d'innombrables personnes désireuses d'apprendre 
              et de progresser dans leur carrière, et tout autant de professionnels expérimentés prêts à aider, 
              trouver le bon match mentor-mentoré était souvent laissé au hasard.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Nos fondateurs, Sarah et Michael, ont vécu ce défi de première main. Sarah, ayant gravi 
              les échelons dans la tech, voulait redonner en mentoring de jeunes professionnels mais 
              peinait à trouver la bonne plateforme. Michael, en début de carrière, trouvait difficile 
              de se connecter avec des mentors qui comprenaient ses objectifs et défis spécifiques.
            </p>
            <p className="text-lg text-gray-600">
              Ensemble, ils ont imaginé une plateforme qui rendrait le mentorat plus accessible, structuré 
              et efficace. Aujourd'hui, Mentorly sert des milliers d'utilisateurs dans le monde, facilitant 
              des connexions significatives qui stimulent une vraie croissance personnelle et professionnelle.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Rencontrez Notre Équipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center p-6 bg-white shadow-lg">
                <CardContent className="pt-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Rejoignez Notre Communauté</h2>
          <p className="text-xl text-gray-600 mb-8">
            Que vous cherchiez à apprendre ou à enseigner, nous serions ravis de vous avoir dans notre communauté grandissante.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3">
                Commencer Aujourd'hui
              </Button>
            </Link>
            <Link to="/search">
              <Button size="lg" variant="outline" className="px-8 py-3">
                Explorer les Mentors
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
