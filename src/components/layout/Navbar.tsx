
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ButtonCustom } from '@/components/ui/button-custom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import CartDrawer from '@/components/cart/CartDrawer';

interface NavbarProps {
  transparent?: boolean;
}

const Navbar = ({ transparent = false }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          (isScrolled || !transparent) ? 
            "bg-background/80 backdrop-blur-md border-b" : 
            "bg-transparent"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl font-medium tracking-tight transition-opacity hover:opacity-80"
            >
              Buytrix
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/" 
                className="text-sm font-medium hover:opacity-70 transition-opacity"
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-sm font-medium hover:opacity-70 transition-opacity"
              >
                Products
              </Link>
              <Link 
                to="/about" 
                className="text-sm font-medium hover:opacity-70 transition-opacity"
              >
                About
              </Link>
            </nav>

            {/* Desktop Right Icons */}
            <div className="hidden md:flex items-center space-x-4">
              <ButtonCustom
                variant="ghost"
                size="icon"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </ButtonCustom>
              
              <ButtonCustom
                variant="ghost"
                size="icon"
                aria-label="Cart"
                onClick={() => setIsCartOpen(true)}
              >
                <ShoppingBag className="h-5 w-5" />
              </ButtonCustom>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden">
              <ButtonCustom
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </ButtonCustom>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <div 
        className={cn(
          "fixed inset-0 z-50 bg-background transition-transform duration-300 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <Link 
            to="/" 
            className="text-2xl font-medium tracking-tight"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Buytrix
          </Link>
          <ButtonCustom
            variant="ghost"
            size="icon"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X className="h-5 w-5" />
          </ButtonCustom>
        </div>
        
        <nav className="flex flex-col p-4 space-y-4">
          <Link 
            to="/" 
            className="py-2 text-lg font-medium hover:opacity-70"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className="py-2 text-lg font-medium hover:opacity-70"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link 
            to="/about" 
            className="py-2 text-lg font-medium hover:opacity-70"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          
          <div className="h-[1px] bg-border my-2"></div>
          
          <ButtonCustom
            size="full"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsCartOpen(true);
            }}
            icon={<ShoppingBag className="h-5 w-5" />}
          >
            View Cart
          </ButtonCustom>
        </nav>
      </div>

      {/* Cart Drawer */}
      <CartDrawer open={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Navbar;
