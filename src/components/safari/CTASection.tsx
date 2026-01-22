import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

const CTASection = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 px-4 relative overflow-hidden">
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
            onClick={scrollToBooking}
            size="lg" 
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 text-lg"
          >
            Book Your Safari
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
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
