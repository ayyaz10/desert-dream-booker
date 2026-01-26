import Navbar from "@/components/safari/Navbar";
import HeroSection from "@/components/safari/HeroSection";
import AboutSection from "@/components/safari/AboutSection";
import FeaturesSection from "@/components/safari/FeaturesSection";
import PackageCard from "@/components/safari/PackageCard";
import GallerySection from "@/components/safari/GallerySection";
import TestimonialsSection from "@/components/safari/TestimonialsSection";
import FAQSection from "@/components/safari/FAQSection";
import CTASection from "@/components/safari/CTASection";

import { safariPackages } from "@/data/safariPackages";

const Index = () => {

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <HeroSection />
      
      <AboutSection />
      
      <FeaturesSection />

      {/* Packages Section */}
      <section id="packages" className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              Our Packages
            </span>
            <h2 className="text-4xl font-bold mt-2 mb-4">Choose Your Adventure</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From sunrise thrills to starlit nights – find the perfect desert experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safariPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
              />
            ))}
          </div>
        </div>
      </section>

      <GallerySection />
      
      <TestimonialsSection />
      
      <FAQSection />
      
      <CTASection />


      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">🏜️ Desert Safari Adventures</h3>
              <p className="text-background/70 mb-4 max-w-md">
                Creating unforgettable desert experiences since 2010. Licensed and insured for your peace of mind.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/70">
                <li><a href="#about" className="hover:text-background transition-colors">About Us</a></li>
                <li><a href="#packages" className="hover:text-background transition-colors">Packages</a></li>
                <li><a href="#gallery" className="hover:text-background transition-colors">Gallery</a></li>
                <li><a href="#faq" className="hover:text-background transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-background/70">
                <li>📞 +1 234 567 8900</li>
                <li>✉️ info@desertsafari.com</li>
                <li>📍 Dubai, UAE</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60 text-sm">
            <p>© 2024 Desert Safari Adventures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
