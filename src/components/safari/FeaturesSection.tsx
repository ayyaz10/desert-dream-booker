import { Shield, Sparkles, Heart, Compass, Camera, Utensils } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Shield,
    title: "Safety First",
    description: "Professional drivers and guides with extensive desert experience ensure your safety throughout the journey.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description: "Luxury vehicles, gourmet dining, and first-class amenities for an unforgettable adventure.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Customizable packages tailored to your preferences, from adventure seekers to peaceful retreats.",
  },
  {
    icon: Compass,
    title: "Expert Guides",
    description: "Local experts who know every dune and hidden gem, sharing authentic cultural experiences.",
  },
  {
    icon: Camera,
    title: "Photo Opportunities",
    description: "Stunning locations and golden hour timing for picture-perfect desert memories.",
  },
  {
    icon: Utensils,
    title: "Authentic Cuisine",
    description: "Traditional Arabic BBQ and refreshments served under the stars in authentic Bedouin style.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            The Ultimate Desert Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We go beyond ordinary safaris to deliver extraordinary moments that last a lifetime.
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
