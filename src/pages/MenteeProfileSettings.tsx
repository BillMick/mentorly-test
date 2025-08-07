import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Plus, X, Upload } from "lucide-react";
import CreatableSelect from "react-select/creatable";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { z } from "zod";
import { updateMenteeProfile } from "@/services/profile/updateMenteeProfile";
import { getUserFromLocalStorage } from "@/helpers/getUserFromLocalStorage";
import { addHours } from "date-fns";
import { toast } from "@/components/ui/use-toast";
import { menteeProfileSchema } from "@/services/validation/profileSchema";
import { createClient } from "@supabase/supabase-js";
import { unsubscribe } from "@/services/subscription/unsubscribe";
import { getSubscriptionPlans } from "@/services/subscription/getSubscriptionPlans";
import { subscribe } from "@/services/subscription/subscribe";

const MenteeProfileSettings = () => {
  const navigate = useNavigate();
  const [mentee, setMentee] = useState<any | null>(getUserFromLocalStorage());
  const [newLanguage, setNewLanguage] = useState("");
  const [newSubject, setNewSubject] = useState("");
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    location: "",
    title: "",
    languages: [],
    education_level: "",
    description: "",
    objectives: "",
    subjects_of_interest: [],
    urgency: "FLEXIBLE",
    preferences: "",
    budget: "",
  });
  const [profilePhotoFile, setProfilePhotoFile] = useState<File | null>(null);
  const [profilePhotoUrl, setProfilePhotoUrl] = useState<string>("");
  const [plans, setPlans] = useState<any[]>([]);
  const [plansLoading, setPlansLoading] = useState(false);
  const [subscribing, setSubscribing] = useState(false);
  const [selectedPlanId, setSelectedPlanId] = useState<string | null>(null);
  const [unsubscribing, setUnsubscribing] = useState(false);

  const educationLevels = ["École primaire", "Lycée", "Collège", "Université", "Post-Universitaire", "Professionnel"];
  const subjectOptions = [
    { label: "Informatique", value: "Informatique" },
    { label: "Mathématiques", value: "Mathématiques" },
    { label: "Physique", value: "Physique" },
    { label: "Développement web", value: "Développement web" },
    { label: "Data Science", value: "Data Science" },
    { label: "IA / ML", value: "IA / ML" },
    { label: "Business", value: "Business" },
    { label: "Design", value: "Design" }
  ];

  const selectedSubjectsOptions = selectedSubjects.map((area) => ({
    label: area,
    value: area
  }));
  // Handler
  const handleSubjectsChange = (selected: any) => {
    setSelectedSubjects(selected.map((option: any) => option.value));
  };

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

  const addSubject = () => {
    if (newSubject.trim() && !formData.subjects_of_interest.includes(newSubject.trim())) {
      setFormData(prev => ({
        ...prev,
        subjects: [...prev.subjects_of_interest, newSubject.trim()]
      }));
      setNewSubject("");
    }
  };

  const removeSubject = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects_of_interest.filter(subj => subj !== subject)
    }));
  };

  const toggleSubject = (subject: string) => {
    setFormData(prev => ({
      ...prev,
      subjects: prev.subjects_of_interest.includes(subject)
        ? prev.subjects_of_interest.filter(subj => subj !== subject)
        : [...prev.subjects_of_interest, subject]
    }));
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePhotoFile(e.target.files[0]);
    }
  };

  const uploadProfilePhoto = async () => {
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ""
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ""
    const supabase = createClient(supabaseUrl, supabaseAnonKey)
    if (!profilePhotoFile || !mentee?.id) return null;
    if (profilePhotoUrl) {
      // Extract the path after the bucket name
      const url = new URL(profilePhotoUrl);
      // Example: .../storage/v1/object/public/avatars/mentee_123_456.jpg
      const pathParts = url.pathname.split("/avatars/");
      if (pathParts.length === 2) {
        const filePath = pathParts[1];
        await supabase.storage.from("avatars").remove([filePath]);
      }
    }
    const fileExt = profilePhotoFile.name.split('.').pop();
    const fileName = `mentee_${mentee.id}_${Date.now()}.${fileExt}`;
    const { data, error } = await supabase.storage.from('avatars').upload(fileName, profilePhotoFile, {
      cacheControl: '3600',
      upsert: true,
    });
    if (error) {
      toast({ title: 'Erreur', description: error.message, variant: 'destructive' });
      return null;
    }
    // Get public URL
    const { data: publicUrlData } = supabase.storage.from('avatars').getPublicUrl(fileName);
    return publicUrlData?.publicUrl || null;
  };

  useEffect(() => {
    const storedUser = getUserFromLocalStorage();
    if (!storedUser) {
      navigate("/login");
      return;
    }

    try {
      setMentee(storedUser);

      const profile = storedUser.profile || {}; // assuming 1 profile per user
      setFormData({
        fullname: profile.fullname || "",
        email: storedUser.email || "",
        phone: storedUser.phone || "",
        location: profile.location || "",
        title: profile.title || "",
        languages: profile.languages || [],
        education_level: profile.education_level || "",
        description: profile.description || "",
        objectives: profile.objectives || "",
        subjects_of_interest: profile.subjects_of_interest || [],
        urgency: profile.urgency || "FLEXIBLE",
        preferences: profile.preferences || "",
        budget: profile.budget || "",
      });
      setSelectedSubjects(profile.subjects_of_interest || [])
      setProfilePhotoUrl(profile.avatar || "");
      // Fetch plans for subscription section
      setPlansLoading(true);
      getSubscriptionPlans().then(res => {
        setPlans((res.plans || []).filter((p: any) => p.category === "MENTEE"));
        setPlansLoading(false);
      });
    } catch (err) {
      console.error("Error parsing mentee data", err);
      localStorage.removeItem("user");
      navigate("/login");
    }
  }, []);

  const handleSave = async () => {
    // Validation with Zod schema
    try {
      menteeProfileSchema.parse({
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
    if (!mentee?.id) return;
    let photoUrl = profilePhotoUrl;
    if (profilePhotoFile) {
      const uploadedUrl = await uploadProfilePhoto();
      if (uploadedUrl) {
        photoUrl = uploadedUrl;
        setProfilePhotoUrl(uploadedUrl);
      }
    }
    const body = {
      userId: mentee.id,
      fullname: formData.fullname,
      email: formData.email,
      phone: formData.phone,
      location: formData.location,
      title: formData.title,
      languages: formData.languages,
      education_level: formData.education_level,
      description: formData.description,
      objectives: formData.objectives,
      subjects_of_interest: selectedSubjects,
      urgency: formData.urgency,
      preferences: formData.preferences,
      budget: formData.budget,
      avatar: photoUrl,
    };
    try {
      const result = await updateMenteeProfile(body);
      const expiresAt = addHours(new Date(), 2).getTime();
      localStorage.setItem("user", JSON.stringify({ user: result.user, expiresAt }));
      setMentee(result.user);
      toast({
        title: "Profil mis à jour",
        description: "Votre profil mentoré a bien été mis à jour.",
        className: "bg-green-500 text-white",
      });
      setTimeout(() => {
        navigate('/mentee-profile-settings');
      }, 3000);
    } catch (error) {
      toast({
        title: "Erreur",
        description: error.message || "Erreur lors de la mise à jour du profil.",
        variant: "destructive",
      });
    }
  };

  const handleSubscribe = async () => {
    if (!selectedPlanId || !mentee) return;
    setSubscribing(true);
    try {
      const data = await subscribe(mentee.id, selectedPlanId);
      if (data.success) {
        toast({ title: 'Abonnement réussi', description: 'Votre abonnement a été activé.', className: 'bg-green-500 text-white' });
        // Refresh mentee data
        const user = getUserFromLocalStorage();
        setMentee(user);
      } else {
        toast({ title: 'Erreur', description: data.error || 'Erreur lors de la souscription.', variant: 'destructive' });
      }
    } catch (err) {
      toast({ title: 'Erreur réseau', description: 'Erreur réseau lors de la souscription.', variant: 'destructive' });
    }
    setSubscribing(false);
  };

  const handleUnsubscribe = async () => {
    if (!mentee) return;
    setUnsubscribing(true);
    try {
      await unsubscribe(mentee.id);
      toast({ title: 'Désabonnement réussi', description: 'Votre abonnement a été résilié.', className: 'bg-green-500 text-white' });
      // Refresh mentee data
      const user = getUserFromLocalStorage();
      setMentee(user);
    } catch (err: any) {
      toast({ title: 'Erreur', description: err.message || 'Erreur lors de la résiliation.', variant: 'destructive' });
    }
    setUnsubscribing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <Link to="/mentee-dashboard">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour au tableau de bord
            </Button>
          </Link>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Paramètres du profil</h1>
            <p className="text-gray-600 mt-2">Actualisez votre profil et vos besoins</p>
          </div>

          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle>Informations Personnelles</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullname">Nom et Prénom(s)</Label>
                  <Input
                    id="fullname"
                    value={formData.fullname}
                    onChange={(e) => handleInputChange("fullname", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
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
              </div>

              <div>
                <Label htmlFor="location">Localisation (ville ou région)</Label>
                <Input
                  id="location"
                  value={formData.location}
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

              <div>
                <Label htmlFor="educationLevel">Level of Education</Label>
                <select
                  id="educationLevel"
                  value={formData.education_level}
                  onChange={(e) => handleInputChange("education_level", e.target.value)}
                  className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {educationLevels.map((level) => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <Label htmlFor="title">Titre / Grade</Label>
                <Input
                  id="title"
                  type="text"
                  placeholder="Ex: Étudiant(e) en 2ème année, Lycéen(ne), etc."
                  value={formData.title}
                  onChange={e => handleInputChange("title", e.target.value)}
                />
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
                <Label htmlFor="description">Description personnelle</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                  placeholder="Parlez de vous, votre background, votre besoin..."
                  rows={4}
                />
              </div>
            </CardContent>
          </Card>

          {/* Budget */}
          <Card>
            <CardHeader>
              <CardTitle>Budget</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="budget">Budget (par heure ou session, etc.)</Label>
                <div className="flex items-center gap-2 mt-2">
                  <Input
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                    placeholder="Indiquez votre budget indicatif"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Objectives and Possibilities */}
          <Card>
            <CardHeader>
              <CardTitle>Objectifs et Modalités</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="objectives">Objectifs</Label>
                <Textarea
                  id="objectives"
                  value={formData.objectives}
                  onChange={(e) => handleInputChange("objectives", e.target.value)}
                  placeholder="Quel·s objectif·s spécifique·s souhaitez-vous atteindre ?"
                  rows={3}
                />
              </div>

              <div>
                <Label>Sujets d'intéressement</Label>
                <div className="flex flex-wrap gap-2 mt-4">
                  <CreatableSelect
                    isMulti
                    placeholder="Ajoutez les sujets qui vous intéressent."
                    value={selectedSubjectsOptions}
                    onChange={handleSubjectsChange}
                    options={subjectOptions}
                    className="react-select-container"
                    classNamePrefix="react-select"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="urgency">Urgence</Label>
                <Input
                  id="urgency"
                  value={formData.urgency}
                  onChange={(e) => handleInputChange("urgency", e.target.value)}
                  placeholder="ex: asap, flexible, urgent..."
                />
              </div>

              <div>
                <Label htmlFor="preferences">Préférences</Label>
                <Textarea
                  id="preferences"
                  value={formData.preferences}
                  onChange={(e) => handleInputChange("preferences", e.target.value)}
                  placeholder="Indiquez vos préférences de profil de mentor ou de travail, etc."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between items-center mb-6">
            <Link to="/mentee-dashboard">
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

export default MenteeProfileSettings;
