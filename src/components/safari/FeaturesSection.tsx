import { Shield, Sparkles, Heart, Compass, Camera, Utensils } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Professional Dubai-licensed drivers with extensive desert experience ensure your safety throughout the journey.",
  },
  {
    icon: Sparkles,
    title: "Luxury Experience",
    description: "Premium Land Cruisers, gourmet Arabic dining, and VIP amenities for an unforgettable Dubai adventure.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Customizable packages tailored to your preferences, from adventure seekers to romantic desert getaways.",
  },
  {
    icon: Compass,
    title: "Expert Local Guides",
    description: "Emirati guides who know every dune and hidden gem, sharing authentic Dubai culture and traditions.",
  },
  {
    icon: Camera,
    title: "Insta-Worthy Moments",
    description: "Stunning Dubai desert locations and golden hour timing for picture-perfect memories.",
  },
  {
    icon: Utensils,
    title: "Authentic Arabic Cuisine",
    description: "Traditional BBQ dinner with shisha, Arabic coffee, and dates served in authentic Bedouin style camps.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Why Choose Visit White Desert
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            The Ultimate Dubai Desert Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We go beyond ordinary safaris to deliver extraordinary moments in Dubai's magnificent desert.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-lg bg-amber-100 text-amber-600 mb-4">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
