import HeroSection from "@/components/safari/HeroSection";
import PackageCard from "@/components/safari/PackageCard";
import BookingForm from "@/components/safari/BookingForm";
import CartDrawer from "@/components/safari/CartDrawer";
import { safariPackages } from "@/data/safariPackages";
import { useCart } from "@/hooks/useCart";

const Index = () => {
  const { cart, addToCart, removeFromCart, clearCart, isInCart } = useCart();

  return (
    <div className="min-h-screen bg-background">
      <CartDrawer cart={cart} onRemove={removeFromCart} onClear={clearCart} />
      
      <HeroSection />

      {/* Packages Section */}
      <section id="packages" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Safari Packages</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose from our carefully curated desert experiences, each designed to give you unforgettable memories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {safariPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onAddToCart={addToCart}
                isInCart={isInCart(pkg.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-20 px-4 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Book Your Safari</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready for adventure? Fill out the form below and we'll arrange everything for you.
            </p>
          </div>
          
          <BookingForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Desert Safari Adventures</h3>
          <p className="text-background/70 mb-6">Creating unforgettable desert experiences since 2010</p>
          <div className="flex justify-center gap-8 text-sm text-background/60">
            <span>📞 +1 234 567 8900</span>
            <span>✉️ info@desertsafari.com</span>
            <span>📍 Dubai, UAE</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
