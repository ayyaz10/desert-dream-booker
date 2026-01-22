import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "An absolutely incredible experience! The sunset views were breathtaking, and our guide was knowledgeable and fun. The BBQ dinner under the stars was the highlight of our trip.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Mohammed Al-Rashid",
    location: "London, UK",
    rating: 5,
    text: "Best desert safari I've ever been on. The dune bashing was thrilling, and the overnight camping experience was magical. Highly recommend the VIP package!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Emma Chen",
    location: "Sydney, Australia",
    rating: 5,
    text: "Perfect for families! Our kids loved the camel ride and sandboarding. The team made sure everyone was comfortable and having fun. Will definitely come back!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
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
            What Our Travelers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real stories from adventurers who've experienced our desert magic.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg relative">
              <CardContent className="p-6 pt-10">
                <div className="absolute -top-4 left-6">
                  <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center">
                    <Quote className="w-5 h-5 text-white" />
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
