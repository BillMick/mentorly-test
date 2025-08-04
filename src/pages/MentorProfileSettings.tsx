import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, X, Upload } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CreatableSelect from "react-select/creatable";
import { updateMentorProfile } from "@/services/profile/updateMentorProfile";
import { z } from "zod";
import { getUserFromLocalStorage } from "@/helpers/getUserFromLocalStorage";
import { addHours } from "date-fns";
import { toast } from "@/components/ui/use-toast";
import { mentorProfileSchema } from "@/services/validation/profileSchema";
import { createClient } from "@supabase/supabase-js";
import { getSubscriptionPlans } from "@/services/subscription/getSubscriptionPlans";
import { unsubscribe } from "@/services/subscription/unsubscribe";
import { subscribe } from "@/services/subscription/subscribe";

const MentorProfileSettings = () => {
  const navigate = useNavigate();
  const [mentor, setMentor] = useState<any | null>(getUserFromLocalStorage());
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    location: "",
    title: "",
    languages: [],
    experiences: [],
    diplomas: [],
    certifications: [],
    mentee_levels: [],
    description: "",
    availability: [],
    price_per_unit: ""
  });
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [newLanguage, setNewLanguage] = useState("");
  const [newDiploma, setNewDiploma] = useState("");
  const [newCertification, setNewCertification] = useState("");
  const [newAvailability, setNewAvailability] = useState("");
  const [newExperience, setNewExperience] = useState("");
  const [profilePhotoFile, setProfilePhotoFile] = useState<File | null>(null);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState<string>("");
  const menteeLevelOptions = ["École primaire", "Lycée", "Collège", "Université", "Post-Universitaire", "Professionnel"];
  const expertiseOptions = [
    { label: "Informatique", value: "Informatique" },
    { label: "Mathématiques", value: "Mathématiques" },
    { label: "Physique", value: "Physique" },
    { label: "Développement web", value: "Développement web" },
    { label: "Data Science", value: "Data Science" },
    { label: "IA / ML", value: "IA / ML" },
    { label: "Business", value: "Business" },
    { label: "Design", value: "Design" }
  ];
  const [plans, setPlans] = useState<any[]>([]);
  const [plansLoading, setPlansLoading] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [unsubscribing, setUnsubscribing] = useState(false);

  const selectedExpertiseOptions = selectedExpertise.map((area) => ({
    label: area,
    value: area
  }));

  // Handler
  const handleExpertiseChange = (selected: any) => {
    setSelectedExpertise(selected.map((option: any) => option.value));
  };

  useEffect(() => {
    try {
      const storedUser = getUserFromLocalStorage();
      setMentor(storedUser);

      const profile = storedUser.profile || {};
      
      setFormData({
        fullname: profile.fullname || "",
        email: mentor.email || "",
        phone: mentor.phone || "",
        location: profile.location || "",
        title: profile.title || "",
        languages: profile.languages || [],
        experiences: profile.experiences || [],
        diplomas: profile.diplomas || [],
        certifications: profile.certifications || [],
        mentee_levels: profile.mentee_levels || [],
        description: profile.description || "",
        availability: profile.availability || [],
        price_per_unit: profile.price_per_unit
      });

      setSelectedExpertise(profile.areas_of_expertise || []);
      setProfilePhotoUrl(profile.avatar || "");
    } catch (err) {
      console.error("Error parsing user from localStorage from mentor profile settings", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // Fetch plans for subscription section
    setPlansLoading(true);
    getSubscriptionPlans().then(res => {
      setPlans((res.plans || []).filter((p: any) => p.category === "MENTOR"));
      setPlansLoading(false);
    });
  }, []);

  const handleSubscribe = async () => {
    if (!selectedPlanId || !mentor) return;
    setSubscribing(true);
    try {
      const data = await subscribe(mentor.id, selectedPlanId);
      if (data.success) {
        toast({ title: 'Abonnement Premium réussi', description: 'Votre abonnement Premium a été activé.', className: 'bg-green-500 text-white' });
        // Refresh mentor data
        const user = getUserFromLocalStorage();
        setMentor(user);
      } else {
        toast({ title: 'Erreur', description: data.error || 'Erreur lors de la souscription.', variant: 'destructive' });
      }
    } catch (err) {
      toast({ title: 'Erreur réseau', description: 'Erreur réseau lors de la souscription.', variant: 'destructive' });
    }
    setSubscribing(false);
  };

  const handleUnsubscribe = async () => {
    if (!mentor) return;
    setUnsubscribing(true);
    try {
      await unsubscribe(mentor.id);
      toast({ title: 'Désabonnement Premium réussi', description: 'Votre abonnement Premium a été résilié.', className: 'bg-green-500 text-white' });
      // Refresh mentor data
      const user = getUserFromLocalStorage();
      setMentor(user);
    } catch (err: any) {
      toast({ title: 'Erreur', description: err.message || 'Erreur lors de la résiliation.', variant: 'destructive' });
    }
    setUnsubscribing(false);
  };


  if (loading) {
    return <div className="p-6 text-gray-600">Chargement du tableau de bord...</div>; // Or a spinner
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const addLanguage = () => {
    if (newLanguage.trim() && !formData.languages.includes(newLanguage.trim())) {
      setFormData(prev => ({
        ...prev,
        languages: [...prev.languages, newLanguage.trim()]
      }));
      setNewLanguage("");
    }
  };

  const removeLanguage = (language: string) => {
    setFormData(prev => ({
      ...prev,
      languages: prev.languages.filter(lang => lang !== language)
    }));
  };

  const addDiploma = () => {
    if (newDiploma.trim() && !formData.diplomas.includes(newDiploma.trim())) {
      setFormData(prev => ({
        ...prev,
        diplomas: [...prev.diplomas, newDiploma.trim()]
      }));
      setNewDiploma("");
    }
  };

  const removeDiploma = (diploma: string) => {
    setFormData(prev => ({
      ...prev,
      diplomas: prev.diplomas.filter(dip => dip !== diploma)
    }));
  };

  const addCertification = () => {
    if (newCertification.trim() && !formData.certifications.includes(newCertification.trim())) {
      setFormData(prev => ({
        ...prev,
        certifications: [...prev.certifications, newCertification.trim()]
      }));
      setNewCertification("");
    }
  };

  const removeCertification = (certification: string) => {
    setFormData(prev => ({
      ...prev,
      certifications: prev.certifications.filter(cer => cer !== certification)
    }));
  };

  const toggleMenteeLevel = (level: string) => {
    setFormData(prev => ({
      ...prev,
      mentee_levels: prev.mentee_levels.includes(level)
        ? prev.mentee_levels.filter(l => l !== level)
        : [...prev.mentee_levels, level]
    }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePhotoFile(e.target.files[0]);
    }
  };

  const uploadProfilePhoto = async () => {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    if (!profilePhotoFile || !mentor?.id) return null;
    if (profilePhotoUrl) {
      // Extract the path after the bucket name
      const url = new URL(profilePhotoUrl);
      const pathParts = url.pathname.split("/avatars/");
      if (pathParts.length === 2) {
        const filePath = pathParts[1];
        await supabase.storage.from("avatars").remove([filePath]);
      }
    }
    const fileExt = profilePhotoFile.name.split('.').pop();
    const fileName = `mentor_${mentor.id}_${Date.now()}.${fileExt}`;
    const { data, error } = await supabase.storage.from('avatars').upload(fileName, profilePhotoFile, {
      cacheControl: '3600',
      upsert: true,
    });
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
      return null;
    }
    const { data: publicUrlData } = supabase.storage.from('avatars').getPublicUrl(fileName);
    return publicUrlData?.publicUrl || null;
  };

  const handleSave = async () => {
    // Validation with Zod schema
    try {
      mentorProfileSchema.parse({
        fullname: formData.fullname,
        email: formData.email,
        phone: formData.phone,
      });
    } catch (err: any) {
      toast({
        title: 'Erreur',
        description: err.errors?.[0]?.message || 'Erreur de validation.',
        variant: 'destructive',
      });
      return;
    }
    if (!mentor?.id) return;
    let photoUrl = profilePhotoUrl;
    if (profilePhotoFile) {
      const uploadedUrl = await uploadProfilePhoto();
      if (uploadedUrl) {
        photoUrl = uploadedUrl;
        setProfilePhotoUrl(uploadedUrl);
      }
    }
    const body = {
      userId: mentor.id,
      fullname: formData.fullname,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      title: formData.title,
      languages: formData.languages,
      areas_of_expertise: selectedExpertise,
      experiences: formData.experiences,
      diplomas: formData.diplomas,
      certifications: formData.certifications,
      mentee_levels: formData.mentee_levels,
      description: formData.description,
      availability: formData.availability,
      price_per_unit: formData.price_per_unit,
      avatar: photoUrl,
    };

    try {
      const result = await updateMentorProfile(body);
      
      const expiresAt = addHours(new Date(), 12).getTime();
      localStorage.setItem("user", JSON.stringify({ user: result.user, expiresAt }));
      setMentor(result.user);

      toast({
        title: "Profil mis à jour",
        description: "Votre profil mentor a bien été mis à jour.",
        className: "bg-green-500 text-white",
      });
      setTimeout(() => {
        navigate('/mentor-profile-settings');
      }, 3000);
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
          description: error.message || "Erreur lors de la mise à jour du profil.",
          variant: "destructive",
        });
      }
    }
  };

  const addExperience = () => {
    if (newExperience.trim() && !formData.experiences.includes(newExperience.trim())) {
      setFormData(prev => ({
        ...prev,
        experiences: [...prev.experiences, newExperience.trim()]
      }));
      setNewExperience("");
    }
  };

  const removeExperience = (exp: string) => {
    setFormData(prev => ({
      ...prev,
      experiences: prev.experiences.filter(e => e !== exp)
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link to="/mentor-dashboard">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au tableau de bord
            </Button>
          </Link>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Paramètres du profil</h1>
            <p className="text-gray-600 mt-2">Actualisez votre profil de mentor</p>
          </div>

          {/* Personal Info */}
          <Card>
            <CardHeader>
              <CardTitle>Informations personnelles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullname">Nom et Prénom(s)</Label>
                  <Input
                    id="fullname"
                    value={formData.fullname ? formData.fullname : ""}
                    onChange={(e) => handleInputChange("fullname", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email ? formData.email : ""}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="title">Titre/Grade actuel</Label>
                <Input
                  id="title"
                  value={formData.title ? formData.title : ""}
                  onChange={(e) => handleInputChange("title", e.target.value)}
                  placeholder="Ex: Professeur, Ingénieur, Docteur, etc."
                />
              </div>
              <div>
                <Label htmlFor="phone">Téléphone</Label>
                <Input
                  id="phone"
                  type="text"
                  placeholder="Ex: 0612345678 ou +33612345678"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="pl-12 h-14 bg-muted/10 border-border/30 focus:border-accent rounded-xl text-foreground placeholder:text-muted-foreground transition-all duration-300"
                />
              </div>
              <div>
                <Label htmlFor="location">Localisation (ville ou région)</Label>
                <Input
                  id="location"
                  value={formData.location ? formData.location : ""}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                  placeholder="Indiquez votre ville ou région"
                />
              </div>

              <div>
                <Label>Photo de profil</Label>
                <div className="flex items-center gap-4 mt-2">
                  {profilePhotoUrl ? (
                    <img src={profilePhotoUrl} alt="Photo de profil" className="w-20 h-20 rounded-lg object-cover" />
                  ) : (
                    <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                      <Upload className="w-8 h-8 text-gray-400" />
                    </div>
                  )}
                  <input type="file" accept="image/*" onChange={handlePhotoChange} />
                </div>
              </div>

              <div>
                <Label>Langues parlées</Label>
                <div className="flex flex-wrap gap-2 mt-2 mb-2">
                  {formData.languages.map((language) => (
                    <Badge key={language} variant="secondary" className="flex items-center gap-1">
                      {language}
                      <X 
                        className="w-3 h-3 cursor-pointer" 
                        onClick={() => removeLanguage(language)}
                      />
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Ajouter une langue"
                    value={newLanguage}
                    onChange={(e) => setNewLanguage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addLanguage()}
                  />
                  <Button type="button" onClick={addLanguage}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Areas of Expertise */}
          <Card>
            <CardHeader>
              <CardTitle>Expériences Professionnelles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Domaines d'expertise</Label>
                <div className="flex flex-wrap gap-2 mt-4">
                  {/* {expertiseOptions.map((expertise) => (
                    <Badge
                      key={expertise}
                      variant={selectedExpertise.includes(expertise) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => toggleExpertise(expertise)}
                    >
                      {expertise}
                    </Badge>
                  ))} */}
                  <CreatableSelect
                    isMulti
                    placeholder="Ajoutez vos domaines d'expertise."
                    value={selectedExpertiseOptions}
                    onChange={handleExpertiseChange}
                    options={expertiseOptions}
                    className="react-select-container"
                    classNamePrefix="react-select"
                  />
                </div>
              </div>

              <div>
                <Label>Expériences</Label>
                <div className="space-y-2 mt-2 mb-2">
                  {formData.experiences.map((exp) => (
                    <div key={exp} className="flex items-center justify-between p-2 border rounded">
                      <span>{exp}</span>
                      <X 
                        className="w-4 h-4 cursor-pointer text-red-500" 
                        onClick={() => removeExperience(exp)}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Ajouter une expérience"
                    value={newExperience}
                    onChange={(e) => setNewExperience(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addExperience()}
                  />
                  <Button type="button" onClick={addExperience}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <Label>Diplômes</Label>
                <div className="space-y-2 mt-2 mb-2">
                  {formData.diplomas.map((diploma) => (
                    <div key={diploma} className="flex items-center justify-between p-2 border rounded">
                      <span>{diploma}</span>
                      <X 
                        className="w-4 h-4 cursor-pointer text-red-500" 
                        onClick={() => removeDiploma(diploma)}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Ajouter un diplôme"
                    value={newDiploma}
                    onChange={(e) => setNewDiploma(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addDiploma()}
                  />
                  <Button type="button" onClick={addDiploma}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <Label>Certifications</Label>
                <div className="space-y-2 mt-2 mb-2">
                  {formData.certifications.map((certification) => (
                    <div key={certification} className="flex items-center justify-between p-2 border rounded">
                      <span>{certification}</span>
                      <X 
                        className="w-4 h-4 cursor-pointer text-red-500" 
                        onClick={() => removeCertification(certification)}
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Ajouter une certification"
                    value={newCertification}
                    onChange={(e) => setNewCertification(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addCertification()}
                  />
                  <Button type="button" onClick={addCertification}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <div>
                <Label>Niveau des mentorés acceptés</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {menteeLevelOptions.map((level) => (
                    <Badge
                      key={level}
                      variant={formData.mentee_levels.includes(level) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => toggleMenteeLevel(level)}
                    >
                      {level}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* About */}
          <Card>
            <CardHeader>
              <CardTitle>À propos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="description">Description personnelle et motivations</Label>
                <Textarea
                  id="description"
                  value={formData.description ? formData.description : ""}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Parlez de vous et de ce qui vous motive à être mentor..."
                  rows={4}
                />
              </div>

              <div>
                <Label>Disponibilités</Label>
                <div className="space-y-2 mt-2 mb-2">
                  {formData.availability.map((slot) => (
                    <div key={slot} className="flex items-center justify-between p-2 border rounded">
                      <span>{slot}</span>
                      <X 
                        className="w-4 h-4 cursor-pointer text-red-500" 
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            availability: prev.availability.filter((a) => a !== slot),
                          }))
                        }
                      />
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Ajouter une disponibilité"
                    value={newAvailability}
                    onChange={(e) => setNewAvailability(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        if (
                          newAvailability.trim() &&
                          !formData.availability.includes(newAvailability.trim())
                        ) {
                          setFormData((prev) => ({
                            ...prev,
                            availability: [...prev.availability, newAvailability.trim()],
                          }));
                          setNewAvailability("");
                        }
                      }
                    }}
                  />
                  <Button
                    type="button"
                    onClick={() => {
                      if (
                        newAvailability.trim() &&
                        !formData.availability.includes(newAvailability.trim())
                      ) {
                        setFormData((prev) => ({
                          ...prev,
                          availability: [...prev.availability, newAvailability.trim()],
                        }));
                        setNewAvailability("");
                      }
                    }}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

            </CardContent>
          </Card>

          {/* Pricing */}
          <Card>
            <CardHeader>
              <CardTitle>Tarification</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="pricePerUnit">Tarif indicatif (par heure ou session, etc.)</Label>
                <div className="flex items-center gap-2 mt-2">
                  {/* <span className="text-xl">€</span> */}
                  <Input
                    id="pricePerUnit"
                    value={formData.price_per_unit ? formData.price_per_unit : ""}
                    onChange={(e) => handleInputChange("price_per_unit", e.target.value)}
                    placeholder="Indiquez votre tarif indicatif"
                  />
                  {/* <span className="text-gray-600">per hour</span> */}
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center mb-6">
            <Link to="/mentor-dashboard">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour au tableau de bord
              </Button>
            </Link>
          
            {/* Save Button */}
            <Button onClick={handleSave} className="px-8">
              Enregistrer le profil
            </Button>

          </div>

          <hr className="my-8" />

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MentorProfileSettings;
