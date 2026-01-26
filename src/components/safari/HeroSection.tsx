import { Button } from "@/components/ui/button";
import { MessageCircle, Play } from "lucide-react";

const WHATSAPP_NUMBER = "1234567890"; // Replace with actual number
const WHATSAPP_MESSAGE = "Hi! I'm interested in booking a Desert Safari. Can you help me?";

const HeroSection = () => {
  const scrollToPackages = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&q=80')`,
        }}
      />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-amber-500/20 blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-amber-600/20 blur-xl animate-pulse delay-1000" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
          🌟 Rated #1 Desert Experience in Dubai
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
          Discover the
          <span className="block text-amber-400">Magic of the Desert</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          Embark on an extraordinary journey through golden dunes, experience thrilling adventures, 
          and witness breathtaking sunsets in the heart of Arabia.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={openWhatsApp}
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 text-lg group"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Book via WhatsApp
          </Button>
          <Button 
            onClick={scrollToPackages}
            size="lg" 
            variant="outline"
            className="border-white/50 text-white hover:bg-white/10 px-8 py-6 text-lg"
          >
            <Play className="mr-2 w-5 h-5" />
            View Packages
          </Button>
        </div>
        
        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-white/60 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-amber-400">✓</span> 50,000+ Happy Travelers
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400">✓</span> 4.9/5 Average Rating
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400">✓</span> Free Cancellation
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
