
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import { ButtonCustom } from "@/components/ui/button-custom";

const Checkout = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-medium lg:text-4xl">Checkout</h1>
          
          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            {/* Checkout Form */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-xl font-medium">Contact Information</h2>
                <div className="mt-4 space-y-4">
                  <div>
                    <label className="text-sm font-medium">Email</label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-md border px-4 py-2"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>
              
              {/* Shipping Address */}
              <div>
                <h2 className="text-xl font-medium">Shipping Address</h2>
                <div className="mt-4 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium">First Name</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border px-4 py-2"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Last Name</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border px-4 py-2"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium">Address</label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border px-4 py-2"
                    />
                  </div>
                  
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium">City</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border px-4 py-2"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium">ZIP Code</label>
                      <input
                        type="text"
                        className="mt-1 block w-full rounded-md border px-4 py-2"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Payment Method - Placeholder */}
              <div>
                <h2 className="text-xl font-medium">Payment Method</h2>
                <p className="mt-4 text-sm text-muted-foreground">
                  Payment processing will be implemented with Stripe integration.
                </p>
              </div>
              
              <ButtonCustom className="w-full">
                Complete Order
              </ButtonCustom>
            </div>
            
            {/* Order Summary - Placeholder */}
            <div className="rounded-lg border p-6 lg:mt-0">
              <h2 className="text-xl font-medium">Order Summary</h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Order summary will be implemented with cart integration.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Buytrix. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Checkout;
