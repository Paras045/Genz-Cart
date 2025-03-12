
import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";

const About = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-medium lg:text-4xl">About Us</h1>
          
          <div className="mt-8 grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-xl font-medium">Our Story</h2>
              <p className="mt-4 text-muted-foreground">
                Founded with a vision to provide exceptional quality and design, GenzCart has grown from a small startup to a leading e-commerce destination. We believe in crafting products that seamlessly blend form and function.
              </p>
            </div>
            
            <div>
              <h2 className="text-xl font-medium">Our Mission</h2>
              <p className="mt-4 text-muted-foreground">
                To deliver premium products that enhance everyday life through thoughtful design and superior craftsmanship. We're committed to exceptional customer service and sustainable practices.
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <h2 className="text-xl font-medium">Our Values</h2>
            <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Quality First",
                  description: "We never compromise on the quality of our products.",
                },
                {
                  title: "Customer Focus",
                  description: "Your satisfaction is our top priority.",
                },
                {
                  title: "Innovation",
                  description: "Constantly improving and evolving our offerings.",
                },
                {
                  title: "Sustainability",
                  description: "Committed to environmentally responsible practices.",
                },
              ].map((value, index) => (
                <div key={index} className="rounded-lg bg-accent/50 p-6">
                  <h3 className="font-medium">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t">
        <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Genz Cart. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
