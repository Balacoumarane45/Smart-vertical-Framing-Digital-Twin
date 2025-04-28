
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Leaf } from "lucide-react";
import { useAuth } from "./AuthProvider";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/auth");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="font-bold text-xl text-gray-800">VertiFarm</span>
          <span className="text-green-600">Twin</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#dashboard" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Dashboard</a>
          <a href="#digital-twin" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Digital Twin</a>
          <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Features</a>
          <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium">Contact</a>
          {user ? (
            <Button onClick={handleSignOut} variant="outline">Sign Out</Button>
          ) : (
            <Button onClick={() => navigate("/auth")} className="bg-green-600 hover:bg-green-700">Sign In</Button>
          )}
        </nav>
        
        {/* Mobile Navigation Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md slide-up">
          <nav className="flex flex-col space-y-4">
            <a href="#dashboard" className="text-gray-700 hover:text-green-600 transition-colors font-medium" onClick={toggleMenu}>Dashboard</a>
            <a href="#digital-twin" className="text-gray-700 hover:text-green-600 transition-colors font-medium" onClick={toggleMenu}>Digital Twin</a>
            <a href="#features" className="text-gray-700 hover:text-green-600 transition-colors font-medium" onClick={toggleMenu}>Features</a>
            <a href="#contact" className="text-gray-700 hover:text-green-600 transition-colors font-medium" onClick={toggleMenu}>Contact</a>
            {user ? (
              <Button onClick={handleSignOut} variant="outline" className="w-full">Sign Out</Button>
            ) : (
              <Button onClick={() => navigate("/auth")} className="bg-green-600 hover:bg-green-700 w-full">Sign In</Button>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
