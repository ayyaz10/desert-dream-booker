import { Award, Users, MapPin, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "50,000+", label: "Happy Travelers" },
  { icon: MapPin, value: "15+", label: "Desert Locations" },
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Clock, value: "24/7", label: "Support Available" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-4xl font-bold mt-2 mb-6">
              Your Gateway to Unforgettable Desert Adventures
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Since 2010, we've been crafting extraordinary desert experiences that blend 
              adventure, culture, and luxury. Our expert guides and premium services ensure 
              every journey becomes a cherished memory.
            </p>
            <p className="text-muted-foreground mb-8">
              From thrilling dune bashing to serene sunset camps, we offer a range of 
              experiences tailored to every type of traveler. Whether you're seeking 
              adrenaline-pumping activities or peaceful desert retreats, we have the 
              perfect adventure waiting for you.
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
                alt="Desert landscape"
                className="rounded-lg w-full h-48 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1542401886-65d6c61db217?w=400&h=400&fit=crop"
                alt="Camel ride"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=400&h=400&fit=crop"
                alt="Desert camp"
                className="rounded-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop"
                alt="Sunset view"
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
