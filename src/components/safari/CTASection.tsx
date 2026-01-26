import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

const WHATSAPP_NUMBER = "1234567890"; // Replace with actual number
const WHATSAPP_MESSAGE = "Hi! I'm interested in booking a Desert Safari. Can you help me?";

const CTASection = () => {
  const openWhatsApp = () => {
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="booking" className="py-20 px-4 relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1682687982501-1e58ab814714?w=1920&q=80')`,
        }}
      />
      
      <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready for Your Desert Adventure?
        </h2>
        <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Book now and get 15% off on all packages. Limited time offer for early birds!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={openWhatsApp}
            size="lg" 
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-6 text-lg"
          >
            <MessageCircle className="mr-2 w-5 h-5" />
            Book via WhatsApp
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
            onClick={() => window.open(`tel:+${WHATSAPP_NUMBER}`, '_self')}
          >
            <Phone className="mr-2 w-5 h-5" />
            Call Us Now
          </Button>
        </div>
        
        <p className="mt-8 text-white/60 text-sm">
          ⭐ 4.9/5 rating from 10,000+ happy travelers
        </p>
      </div>
    </section>
  );
};

export default CTASection;
