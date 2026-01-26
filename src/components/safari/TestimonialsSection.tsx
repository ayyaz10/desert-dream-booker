import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "Visit White Desert gave us the best Dubai experience! The sunset views were breathtaking, and our guide was so knowledgeable. The BBQ dinner under the stars was absolutely magical.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Mohammed Al-Rashid",
    location: "London, UK",
    rating: 5,
    text: "Best desert safari in Dubai by far! The dune bashing was thrilling, and the belly dance show was mesmerizing. Highly recommend the VIP package – worth every dirham!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Emma Chen",
    location: "Sydney, Australia",
    rating: 5,
    text: "Perfect for families! Our kids loved the camel ride and sandboarding. The team made sure everyone was comfortable. Will definitely book again on our next Dubai trip!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
  {
    name: "Raj Patel",
    location: "Mumbai, India",
    rating: 5,
    text: "Incredible experience from start to finish! The hotel pickup was on time, the desert camp was beautiful, and the henna painting was a lovely touch. Thank you Visit White Desert!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
  },
  {
    name: "Lisa Mueller",
    location: "Berlin, Germany",
    rating: 5,
    text: "The overnight camping was a dream come true! Sleeping under the Dubai stars, waking up to the most beautiful sunrise over the dunes. An unforgettable experience!",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
  },
  {
    name: "Ahmed Hassan",
    location: "Cairo, Egypt",
    rating: 5,
    text: "As someone from a desert country, I was skeptical, but Visit White Desert exceeded all expectations. The Dubai desert has its own unique beauty and they showcase it perfectly!",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold mt-2 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from travelers who've experienced Dubai's desert magic with us.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="border-0 shadow-lg relative h-full">
                  <CardContent className="p-6 pt-10">
                    <div className="absolute -top-4 left-6">
                      <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                        <Quote className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 italic line-clamp-4">"{testimonial.text}"</p>
                    
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mt-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious className="static translate-y-0" />
            <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
