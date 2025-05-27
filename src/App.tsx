
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServerStatus from "./pages/ServerStatus";
import AboutPage from "./pages/AboutPage";
import HelpPage from "./pages/HelpPage";
import WikiIndex from "./pages/wiki/WikiIndex";
import ITProcedures from "./pages/wiki/ITProcedures";
import MeetingRooms from "./pages/wiki/MeetingRooms";
import EmergencyProcedures from "./pages/wiki/EmergencyProcedures";
import Login from "./pages/Login";
import AdminPanel from "./pages/AdminPanel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/status" element={<ServerStatus />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/wiki" element={<WikiIndex />} />
            <Route path="/wiki/it-procedures" element={<ITProcedures />} />
            <Route path="/wiki/meeting-rooms" element={<MeetingRooms />} />
            <Route path="/wiki/emergency-procedures" element={<EmergencyProcedures />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
