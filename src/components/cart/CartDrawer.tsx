
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { ButtonCustom } from "@/components/ui/button-custom";
import { X } from "lucide-react";
import CartItem from "./CartItem";
import { Product } from "@/components/products/ProductCard";
import { Link } from "react-router-dom";

// Mock cart items (in real app, this would come from state management)
const initialCartItems: { product: Product; quantity: number }[] = [];

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
}

const CartDrawer = ({ open, onClose }: CartDrawerProps) => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  
  // Calculate totals
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  // Handle closing with escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onClose();
      }
    };
    
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  // Handle body scroll lock
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Cart item management functions
  const updateQuantity = (productId: number, newQuantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeItem = (productId: number) => {
    setCartItems(cartItems.filter((item) => item.product.id !== productId));
  };

  // Add a product to the cart (external function used by product components)
  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.product.id === product.id
      );
      
      if (existingItem) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { product, quantity: 1 }];
      }
    });
  };

  // Make the addToCart function available globally
  useEffect(() => {
    // @ts-ignore
    window.addToCart = addToCart;
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm transition-all duration-300",
          open ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 h-full w-full max-w-md transform overflow-auto bg-background shadow-xl transition-transform duration-300 sm:max-w-lg",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b px-4 py-4">
          <h2 className="text-lg font-medium">Shopping Cart</h2>
          <ButtonCustom
            variant="ghost"
            size="icon"
            onClick={onClose}
            aria-label="Close cart"
          >
            <X className="h-5 w-5" />
          </ButtonCustom>
        </div>

        {/* Content */}
        <div className="flex flex-col h-[calc(100vh-7.5rem)]">
          {/* Items */}
          <div className="flex-1 overflow-auto px-4 py-2">
            {cartItems.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <p className="text-muted-foreground">Your cart is empty</p>
                <ButtonCustom 
                  variant="outline" 
                  className="mt-4"
                  onClick={onClose}
                >
                  Continue Shopping
                </ButtonCustom>
              </div>
            ) : (
              <div className="divide-y">
                {cartItems.map((item) => (
                  <CartItem
                    key={item.product.id}
                    product={item.product}
                    quantity={item.quantity}
                    onUpdateQuantity={updateQuantity}
                    onRemove={removeItem}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {cartItems.length > 0 && (
            <div className="border-t p-4 sm:p-6">
              <div className="flex justify-between py-2">
                <span className="text-base">Subtotal</span>
                <span className="text-base font-medium">${subtotal.toFixed(2)}</span>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Shipping and taxes calculated at checkout
              </p>
              <ButtonCustom 
                size="full" 
                className="mb-2"
                asChild
              >
                <Link to="/checkout" onClick={onClose}>
                  Checkout
                </Link>
              </ButtonCustom>
              <ButtonCustom 
                variant="outline" 
                size="full"
                onClick={onClose}
              >
                Continue Shopping
              </ButtonCustom>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
