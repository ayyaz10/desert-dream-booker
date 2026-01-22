import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Packages", href: "#packages" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-xl font-bold text-amber-600">
              🏜️ Desert Safari
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollTo("#booking")}
              className="bg-amber-500 hover:bg-amber-600 text-black font-semibold"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-left px-2 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <Button 
                onClick={() => scrollTo("#booking")}
                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold mt-2"
              >
                Book Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
