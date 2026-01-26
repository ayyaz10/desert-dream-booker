import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MessageCircle } from "lucide-react";

export interface SafariPackage {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
  features: string[];
  image: string;
  popular?: boolean;
}

interface PackageCardProps {
  pkg: SafariPackage;
}

const WHATSAPP_NUMBER = "1234567890"; // Replace with actual number

const PackageCard = ({ pkg }: PackageCardProps) => {
  const openWhatsApp = () => {
    const message = `Hi! I'm interested in the ${pkg.name} package ($${pkg.price}). Can you help me book?`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Card className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${pkg.popular ? 'border-amber-500 border-2' : ''}`}>
      {pkg.popular && (
        <div className="absolute top-4 right-4 bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-semibold z-10">
          Most Popular
        </div>
      )}
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${pkg.image})` }}
      />
      <CardHeader>
        <CardTitle className="text-2xl">{pkg.name}</CardTitle>
        <CardDescription className="text-lg">{pkg.duration}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">{pkg.description}</p>
        <ul className="space-y-2">
          {pkg.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <Check className="h-4 w-4 text-amber-500" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="text-3xl font-bold text-amber-600">${pkg.price}</div>
        <Button
          onClick={openWhatsApp}
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          <MessageCircle className="h-4 w-4 mr-2" />
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackageCard;
