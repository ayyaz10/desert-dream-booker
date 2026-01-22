import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ShoppingCart, Trash2, X } from "lucide-react";
import { SafariPackage } from "./PackageCard";

interface CartDrawerProps {
  cart: SafariPackage[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

const CartDrawer = ({ cart, onRemove, onClear }: CartDrawerProps) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="fixed top-4 right-4 z-50 gap-2">
          <ShoppingCart className="h-5 w-5" />
          <span className="bg-amber-500 text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
            {cart.length}
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Your Cart
          </SheetTitle>
          <SheetDescription>
            {cart.length === 0 ? "Your cart is empty" : `${cart.length} item(s) in cart`}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-8 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 p-4 bg-muted rounded-lg">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h4 className="font-semibold">{item.name}</h4>
                <p className="text-sm text-muted-foreground">{item.duration}</p>
                <p className="text-amber-600 font-bold">${item.price}</p>
              </div>
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => onRemove(item.id)}
                className="text-destructive hover:text-destructive"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>

        {cart.length > 0 && (
          <div className="mt-8 space-y-4">
            <div className="flex justify-between items-center text-lg font-semibold border-t pt-4">
              <span>Total:</span>
              <span className="text-amber-600">${total}</span>
            </div>
            <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-semibold">
              Proceed to Checkout
            </Button>
            <Button 
              variant="outline" 
              className="w-full"
              onClick={onClear}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear Cart
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
