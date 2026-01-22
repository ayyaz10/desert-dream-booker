import { SafariPackage } from "@/components/safari/PackageCard";

export const safariPackages: SafariPackage[] = [
  {
    id: "morning",
    name: "Morning Safari",
    price: 89,
    duration: "4 Hours",
    description: "Start your day with an exhilarating desert adventure as the sun rises over the golden dunes.",
    features: [
      "Dune bashing experience",
      "Camel ride",
      "Sandboarding",
      "Refreshments included",
      "Hotel pickup & drop-off"
    ],
    image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?w=800&q=80"
  },
  {
    id: "evening",
    name: "Evening Safari",
    price: 129,
    duration: "6 Hours",
    description: "Experience the magic of sunset in the desert with dinner under the stars.",
    features: [
      "Dune bashing adventure",
      "Sunset photography",
      "BBQ dinner buffet",
      "Live entertainment",
      "Henna painting",
      "Shisha lounge"
    ],
    image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800&q=80",
    popular: true
  },
  {
    id: "overnight",
    name: "Overnight Camp",
    price: 249,
    duration: "18 Hours",
    description: "Sleep under the stars in a luxury desert camp with all amenities.",
    features: [
      "All Evening Safari activities",
      "Luxury tent accommodation",
      "Breakfast included",
      "Stargazing experience",
      "Morning nature walk",
      "Private bathroom facilities"
    ],
    image: "https://images.unsplash.com/photo-1542401886-65d6c61db217?w=800&q=80"
  },
  {
    id: "vip",
    name: "VIP Experience",
    price: 399,
    duration: "8 Hours",
    description: "The ultimate luxury desert experience with private services and exclusive amenities.",
    features: [
      "Private vehicle & guide",
      "Falcon show experience",
      "Premium dinner menu",
      "Exclusive seating area",
      "Champagne & refreshments",
      "Professional photo session",
      "Luxury transfers"
    ],
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800&q=80"
  }
];
