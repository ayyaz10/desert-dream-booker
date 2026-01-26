import { SafariPackage } from "@/components/safari/PackageCard";

export const safariPackages: SafariPackage[] = [
  {
    id: "morning",
    name: "Morning Desert Safari",
    price: 150,
    duration: "4 Hours",
    description: "Start your day with an exhilarating Dubai desert adventure as the sun rises over the golden dunes.",
    features: [
      "Dune bashing in Land Cruiser",
      "Camel ride experience",
      "Sandboarding on dunes",
      "Arabic coffee & dates",
      "Hotel pickup & drop-off"
    ],
    image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&q=80"
  },
  {
    id: "evening",
    name: "Evening Desert Safari",
    price: 200,
    duration: "6 Hours",
    description: "Experience the magic of Dubai's sunset in the desert with dinner and live entertainment.",
    features: [
      "Thrilling dune bashing",
      "Stunning sunset views",
      "BBQ dinner buffet",
      "Belly dance & Tanoura show",
      "Henna painting",
      "Shisha lounge"
    ],
    image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800&q=80",
    popular: true
  },
  {
    id: "overnight",
    name: "Overnight Desert Camp",
    price: 450,
    duration: "18 Hours",
    description: "Sleep under the Dubai stars in a luxury desert camp with all premium amenities.",
    features: [
      "All Evening Safari activities",
      "Luxury tent accommodation",
      "Breakfast included",
      "Stargazing experience",
      "Morning desert walk",
      "Private bathroom facilities"
    ],
    image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80"
  },
  {
    id: "vip",
    name: "VIP Private Safari",
    price: 800,
    duration: "8 Hours",
    description: "The ultimate luxury Dubai desert experience with private services and exclusive amenities.",
    features: [
      "Private Land Cruiser & guide",
      "Falcon photography session",
      "Premium dinner menu",
      "Exclusive VIP seating",
      "Champagne & refreshments",
      "Professional photo session",
      "Luxury hotel transfers"
    ],
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80"
  }
];
