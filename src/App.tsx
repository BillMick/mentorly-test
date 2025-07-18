import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Search from "./pages/Search";
import MentorDashboard from "./pages/MentorDashboard";
import MenteeDashboard from "./pages/MenteeDashboard";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import MentorProfile from "./pages/MentorProfile";
import MentorProfileSettings from "./pages/MentorProfileSettings";
import MenteeProfileSettings from "./pages/MenteeProfileSettings";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "@/components/ProtectedRoute";
import MenteeProfile from "./pages/MenteeProfile";
import Abonnement from "./pages/Abonnement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/abonnement" element={<Abonnement />} />
          <Route path="/mentor-dashboard" element={<MentorDashboard />} />
          {/* <Route path="/mentor-dashboard" element={<ProtectedRoute><MentorDashboard /></ProtectedRoute>} /> */}
          <Route path="/mentee-dashboard" element={<ProtectedRoute><MenteeDashboard /></ProtectedRoute>} />
          <Route path="/mentor-profile/:id" element={<MentorProfile />} />
          <Route path="/mentee-profile/:id" element={<MenteeProfile />} />
          <Route path="/mentor-profile-settings" element={<ProtectedRoute><MentorProfileSettings /></ProtectedRoute>} />
          <Route path="/mentee-profile-settings" element={<ProtectedRoute><MenteeProfileSettings /></ProtectedRoute>} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/about" element={<About />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
