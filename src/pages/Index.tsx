
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import ProductGrid from "@/components/products/ProductGrid";
import { products } from "@/data/products";
import { ButtonCustom } from "@/components/ui/button-custom";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // For demo purposes: Add to cart function
  const handleAddToCart = (product: any) => {
    // @ts-ignore
    if (window.addToCart) {
      // @ts-ignore
      window.addToCart(product);
    }
  };

  // Featured products (first 4)
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar transparent />
      
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Products */}
        <section className="bg-accent/50 py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              <span className="pill bg-black text-white">Featured Products</span>
              <h2 className="mt-6 text-center">Discover Our Finest Selection</h2>
              <p className="mt-4 max-w-2xl text-center text-muted-foreground">
                Explore our curated collection of premium products, designed with meticulous attention to detail and crafted for exceptional quality.
              </p>
              
              <div className="mt-16 w-full">
                <ProductGrid 
                  products={featuredProducts} 
                  onAddToCart={handleAddToCart} 
                />
              </div>
              
              <ButtonCustom 
                className="mt-16" 
                size="lg" 
                asChild
              >
                <Link to="/products">
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </ButtonCustom>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              <span className="pill bg-black text-white">Why Choose Us</span>
              <h2 className="mt-6 text-center">The Difference is in the Details</h2>
              <p className="mt-4 max-w-2xl text-center text-muted-foreground">
                We believe that excellence lies in the smallest details. From the materials we source to the final touches on every product, quality is our priority.
              </p>
              
              <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Feature 1 */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-medium">Premium Materials</h3>
                  <p className="mt-2 text-muted-foreground">
                    We source only the highest quality materials to ensure durability and performance.
                  </p>
                </div>
                
                {/* Feature 2 */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-medium">Fast Shipping</h3>
                  <p className="mt-2 text-muted-foreground">
                    Get your products delivered quickly with our expedited shipping options.
                  </p>
                </div>
                
                {/* Feature 3 */}
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-8 w-8">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-xl font-medium">Easy Returns</h3>
                  <p className="mt-2 text-muted-foreground">
                    Not satisfied? Return your purchase within 30 days for a full refund.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter */}
        <section className="bg-primary py-24 text-primary-foreground">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">
              <h2 className="text-center">Stay Updated</h2>
              <p className="mt-4 max-w-2xl text-center text-primary-foreground/80">
                Subscribe to our newsletter for exclusive offers, new product announcements, and more.
              </p>
              
              <div className="mt-8 flex w-full max-w-md flex-col gap-4 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border-none bg-white/10 px-4 py-2 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
                <ButtonCustom className="bg-white text-primary">
                  Subscribe
                </ButtonCustom>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-lg font-medium">Buytrix</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Premium products for discerning customers. Quality, design, and performance in everything we create.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium">Shop</h4>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li><Link to="/products" className="hover:text-foreground">All Products</Link></li>
                <li><Link to="/products" className="hover:text-foreground">Featured</Link></li>
                <li><Link to="/products" className="hover:text-foreground">New Arrivals</Link></li>
                <li><Link to="/products" className="hover:text-foreground">Best Sellers</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground">About Us</Link></li>
                <li><Link to="/about" className="hover:text-foreground">Careers</Link></li>
                <li><Link to="/about" className="hover:text-foreground">Contact</Link></li>
                <li><Link to="/about" className="hover:text-foreground">Blog</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-medium">Support</h4>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li><Link to="/about" className="hover:text-foreground">Help Center</Link></li>
                <li><Link to="/about" className="hover:text-foreground">Shipping</Link></li>
                <li><Link to="/about" className="hover:text-foreground">Returns</Link></li>
                <li><Link to="/about" className="hover:text-foreground">FAQ</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 border-t pt-8 text-sm text-muted-foreground">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <p>&copy; {new Date().getFullYear()} Buytrix. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-foreground">Privacy Policy</a>
                <a href="#" className="hover:text-foreground">Terms of Service</a>
                <a href="#" className="hover:text-foreground">Legal</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
