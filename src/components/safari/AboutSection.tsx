import { Award, Users, MapPin, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "50,000+", label: "Happy Guests" },
  { icon: MapPin, value: "Dubai", label: "Premium Location" },
  { icon: Award, value: "12+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "WhatsApp Support" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              About Visit White Desert
            </span>
            <h2 className="text-4xl font-bold mt-2 mb-6">
              Dubai's Premier Desert Safari Experience
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Since 2012, Visit White Desert has been crafting extraordinary desert experiences 
              in the heart of Dubai. Our expert guides and premium services have made us the 
              top choice for travelers seeking authentic Arabian adventures.
            </p>
            <p className="text-muted-foreground mb-8">
              From thrilling dune bashing in luxury Land Cruisers to enchanting belly dance 
              performances and traditional BBQ dinners under the stars – we offer the complete 
              Dubai desert experience. Whether you're seeking adrenaline-pumping adventures or 
              peaceful sunset moments, we have the perfect package for you.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-amber-100 text-amber-600 mb-3">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=400&h=300&fit=crop"
                alt="Dubai desert dunes"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1542401886-65d6c61db217?w=400&h=400&fit=crop"
                alt="Camel ride in Dubai"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=400&h=400&fit=crop"
                alt="Dubai desert camp"
                className="rounded-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=400&h=300&fit=crop"
                alt="Dubai sunset view"
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
