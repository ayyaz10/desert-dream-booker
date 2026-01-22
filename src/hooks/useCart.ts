import { useState } from "react";
import { SafariPackage } from "@/components/safari/PackageCard";
import { useToast } from "@/hooks/use-toast";

export const useCart = () => {
  const [cart, setCart] = useState<SafariPackage[]>([]);
  const { toast } = useToast();

  const addToCart = (pkg: SafariPackage) => {
    if (cart.find(item => item.id === pkg.id)) {
      toast({
        title: "Already in Cart",
        description: `${pkg.name} is already in your cart.`,
        variant: "destructive",
      });
      return;
    }

    setCart([...cart, pkg]);
    toast({
      title: "Added to Cart!",
      description: `${pkg.name} has been added to your cart.`,
    });
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
    toast({
      title: "Removed from Cart",
      description: "Package has been removed from your cart.",
    });
  };

  const clearCart = () => {
    setCart([]);
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart.",
    });
  };

  const isInCart = (id: string) => cart.some(item => item.id === id);

  return { cart, addToCart, removeFromCart, clearCart, isInCart };
};
