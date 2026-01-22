import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Users } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface BookingFormProps {
  selectedPackage?: string;
}

const BookingForm = ({ selectedPackage }: BookingFormProps) => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    guests: "1",
    package: selectedPackage || "",
    specialRequests: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.phone || !date || !formData.package) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you shortly to confirm your desert safari adventure.",
    });

    console.log("Booking data:", { ...formData, date });
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Book Your Adventure</CardTitle>
        <CardDescription>Fill in your details and we'll handle the rest</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                placeholder="+1 234 567 8900"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label>Number of Guests *</Label>
              <Select
                value={formData.guests}
                onValueChange={(value) => setFormData({ ...formData, guests: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select guests" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Safari Date *</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label>Select Package *</Label>
              <Select
                value={formData.package}
                onValueChange={(value) => setFormData({ ...formData, package: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose a package" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="morning">Morning Safari - $89</SelectItem>
                  <SelectItem value="evening">Evening Safari - $129</SelectItem>
                  <SelectItem value="overnight">Overnight Camp - $249</SelectItem>
                  <SelectItem value="vip">VIP Experience - $399</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="specialRequests">Special Requests</Label>
            <Input
              id="specialRequests"
              placeholder="Any dietary requirements or special requests..."
              value={formData.specialRequests}
              onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
            />
          </div>

          <Button type="submit" size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold">
            Submit Booking Request
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default BookingForm;
