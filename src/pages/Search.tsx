import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search as SearchIcon, MapPin, Star, Clock, DollarSign, Filter, X, Languages } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchMentors } from "@/services/profile/fetchMentors"
import { z } from "zod";
import { hasValidSubscription } from "@/helpers/hasValidSubscription";
import { getUserFromLocalStorage } from "@/helpers/getUserFromLocalStorage";
import { toast } from "@/components/ui/use-toast";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMentors, setFilteredMentors] = useState([]);
  const [filters, setFilters] = useState({
    expertise: "",
    // priceRange: "",
    rating: "",
    availability: "",
    location: ""
  });

  const [allMentors, setAllMentors] = useState([]); // async () => { const res = await fetchMentors(); return res.mentors; }
  const [loading, setLoading] = useState(true);
  const user = getUserFromLocalStorage();
  const isAuthenticated = !!user;
  const hasSubscription = hasValidSubscription(user);
  const canViewContact = isAuthenticated && hasSubscription;

  useEffect(() => {
    const readMentors = async () => {
      setLoading(true);
      try {
        const result = await fetchMentors();
        setAllMentors(result.mentors);
      } catch (error) {
        if (error instanceof z.ZodError) {
          toast({
            title: 'Erreur',
            description: error.errors.map((e) => e.message).join("\n"),
            variant: 'destructive',
          });
        } else {
          toast({
            title: 'Erreur',
            description: error.message || "Erreur lors de la récupération des données.",
            variant: 'destructive',
          });
        }
      } finally {
        setLoading(false); // Done loading in all cases
      }
    }

    readMentors();
  }, []);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    if (query) {
      setSearchQuery(query);
    }
  }, []);

  useEffect(() => {
    let filtered = allMentors;

    // Search query filter
    if (searchQuery) {
      filtered = filtered.filter(mentor =>
        mentor.profile.fullname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        mentor.profile.areas_of_expertise.some(exp => exp.toLowerCase().includes(searchQuery.toLowerCase())) ||
        mentor.profile.location.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Apply filters
    if (filters.expertise) {
      filtered = filtered.filter(mentor =>
        mentor.profile.areas_of_expertise.some(exp => exp.toLowerCase().includes(filters.expertise.toLowerCase()))
      );
    }

    // if (filters.priceRange) {
    //   const [min, max] = filters.priceRange.split('-').map(Number);
    //   filtered = filtered.filter(mentor => mentor.profile.price_per_unit >= min && mentor.profile.price_per_unit <= max);
    // }

    if (filters.rating) {
      filtered = filtered.filter(mentor => {
        if (!mentor.ratings || mentor.ratings.length === 0) return false;
        const avg = mentor.ratings.reduce((sum, r) => sum + r.rating, 0) / mentor.ratings.length;
        return avg >= parseFloat(filters.rating);
      });
    }

    // if (filters.availability) {
    //   filtered = filtered.filter(mentor => mentor.profile.availability === filters.availability);
    // }

    if (filters.location) {
      filtered = filtered.filter(mentor =>
        mentor.profile.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }

    setFilteredMentors(filtered);
  }, [searchQuery, filters, allMentors]);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const clearAllFilters = () => {
    setSearchQuery("");
    setFilters({
      expertise: "",
      // priceRange: "",
      rating: "",
      availability: "",
      location: ""
    });
  };

  const hasActiveFilters = searchQuery || Object.values(filters).some(filter => filter !== "");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      {loading 
        ? <div className="text-center py-12">
            <p className="text-gray-600">Chargement des mentors...</p>
          </div>
        : <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Search Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trouvez votre Mentor Parfait
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                Connectez-vous avec des professionnels expérimentés prêts à guider votre parcours
              </p>
              
              {/* Search Bar */}
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1 relative">
                  <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Rechercher par nom, expertise ou localisation..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-lg border-2 focus:border-blue-500 rounded-lg"
                  />
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 h-12 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                  <SearchIcon className="w-5 h-5 mr-2" />
                  Rechercher
                </Button>
              </div>

              {/* Filters */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                <Select onValueChange={(value) => handleFilterChange('expertise', value)} value={filters.expertise}>
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="Expertise" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="informatique">Informatique</SelectItem>
                    <SelectItem value="entreprise">Entreprise</SelectItem>
                    <SelectItem value="mathématiques">Mathématiques</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="data science">Data Science</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={(value) => handleFilterChange('rating', value)} value={filters.rating}>
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="Note" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="4.5">4.5+ Étoiles</SelectItem>
                    <SelectItem value="4.0">4.0+ Étoiles</SelectItem>
                    <SelectItem value="3.5">3.5+ Étoiles</SelectItem>
                  </SelectContent>
                </Select>

                <Select onValueChange={(value) => handleFilterChange('availability', value)} value={filters.availability}>
                  <SelectTrigger className="h-10">
                    <SelectValue placeholder="Disponibilité" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Disponible">Disponible</SelectItem>
                    <SelectItem value="Occupée">Occupé(e)</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  placeholder="Localisation"
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  className="h-10"
                />
              </div>

              {/* Clear Filters Button */}
              {hasActiveFilters && (
                <div className="flex justify-end">
                  <Button
                    onClick={clearAllFilters}
                    variant="outline"
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Effacer tous les Filtres
                  </Button>
                </div>
              )}
            </div>

            {/* Results */}
            <div className="mb-6">
              <p className="text-gray-600">
                Affichage de <span className="font-semibold">{filteredMentors.length}</span> mentors
                {searchQuery && (
                  <span> pour "<span className="font-semibold">{searchQuery}</span>"</span>
                )}
              </p>
            </div>

            {/* Mentor Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMentors.map((mentor) => (
                <Card key={mentor.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <img 
                          src={mentor.profile.avatar} 
                          alt={mentor.profile.fullname}
                          className="w-16 h-16 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                            {mentor.profile.fullname}
                          </h3>
                          <p className="text-gray-600 text-sm">{mentor.title}</p>
                          <div className="flex items-center text-gray-500 text-sm mt-1">
                            <MapPin className="w-3 h-3 mr-1" />
                            <span>{mentor.profile.location}</span>
                          </div>
                        </div>
                      </div>
                      <Badge 
                        variant={mentor.profile.availability === 'Disponible' ? 'default' : 'secondary'}
                        className={mentor.profile.availability === 'Disponible' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}
                      >
                        {mentor.availability}
                      </Badge>
                    </div>

                    {/* Rating and Price */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="font-semibold">{mentor.ratings.length > 0 ? (mentor.ratings.reduce((sum, r) => sum + r.rating, 0) / mentor.ratings.length).toFixed(1) : 0}</span>
                        <span className="text-gray-500 text-sm ml-1">({mentor.ratings.length} avis)</span>
                      </div>
                      <div className="flex items-center text-blue-600 font-semibold">
                        {canViewContact ? (
                          <>
                            {/* <DollarSign className="w-4 h-4" /> */}
                            <span>{mentor.profile.price_per_unit}</span>
                          </>
                        ) : (
                          <span className="text-gray-400">Prix masqué</span>
                        )}
                      </div>
                    </div>

                    {/* Expertise Tags */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {mentor.profile.areas_of_expertise.map((skill, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                        {mentor.profile.areas_of_expertise.length > 3 && (
                          <Badge variant="outline" className="text-xs text-gray-500">
                            +{mentor.profile.areas_of_expertise.length - 3} plus
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Languages and Experience */}
                    <div className="mb-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{mentor.profile.title}</span>
                        <span className="text-gray-500 text-sm ml-1">({mentor.profile.experiences.length} expériences pro)</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <Languages className="w-3 h-3 mr-1" />
                        {/* <span className="font-medium">Langues :</span> */}
                        <span className="ml-1">{mentor.profile.languages.join(", ")}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {mentor.profile.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Link to={`/mentor-profile/${mentor.id}`} className="flex-1">
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                          Voir le Profil
                        </Button>
                      </Link>
                      {canViewContact ? (
                        <Button variant="outline" className="px-4">
                          Contacter
                        </Button>
                      ) : (
                        <Button variant="outline" className="px-4" disabled>
                          {!isAuthenticated ? "Connexion pour Contacter" : "Abonnement requis"}
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredMentors.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <SearchIcon className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun mentor trouvé</h3>
                <p className="text-gray-600 mb-4">
                  Essayez d'ajuster vos critères de recherche ou parcourez tous les mentors
                </p>
                <Button 
                  onClick={clearAllFilters}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  Effacer les Filtres
                </Button>
              </div>
            )}
          </div>
      }
      

      <Footer />
    </div>
  );
};

export default Search;
