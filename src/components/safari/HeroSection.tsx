import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToPackages = () => {
    document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&q=80')`,
        }}
      />
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Desert Safari
          <span className="block text-amber-400">Adventure Awaits</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
          Experience the magic of golden dunes, thrilling rides, and unforgettable sunsets in the heart of the desert.
        </p>
        <Button 
          onClick={scrollToPackages}
          size="lg" 
          className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 text-lg"
        >
          Explore Packages
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
