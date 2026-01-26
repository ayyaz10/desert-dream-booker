import { Button } from "@/components/ui/button";
import { MessageCircle, Play } from "lucide-react";
import heroVideo from "@/assets/dubai-desert-hero.mp4";

const WHATSAPP_NUMBER = "971501234567"; // Dubai WhatsApp number
const WHATSAPP_MESSAGE = "Hi! I'm interested in booking a Dubai Desert Safari with Visit White Desert. Can you help me?";

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
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-amber-500/20 blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-amber-600/20 blur-xl animate-pulse delay-1000" />
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <span className="inline-block px-4 py-2 bg-amber-500/20 text-amber-300 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
          🌟 Dubai's #1 Rated Desert Safari Experience
        </span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight leading-tight">
          Experience the
          <span className="block text-amber-400">Dubai Desert Magic</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          Embark on an extraordinary journey through Dubai's majestic golden dunes. 
          Thrilling dune bashing, mesmerizing belly dance, authentic BBQ dinner, and unforgettable sunsets await.
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
            <span className="text-amber-400">✓</span> 4.9/5 TripAdvisor Rating
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400">✓</span> Free Hotel Pickup
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
