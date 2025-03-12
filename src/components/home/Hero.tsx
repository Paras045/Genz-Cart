
import { ButtonCustom } from "@/components/ui/button-custom";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute -left-1/4 -top-1/4 h-[50rem] w-[50rem] rounded-full bg-gradient-to-r from-gray-900 to-gray-800"></div>
        <div className="absolute -right-1/4 -bottom-1/4 h-[50rem] w-[50rem] rounded-full bg-gradient-to-r from-gray-900 to-gray-800"></div>
      </div>
      
      <div className="container mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div className="flex flex-col items-center text-center">
          <span className="pill bg-black text-white animate-fade-in">
            Crafted with precision
          </span>
          
          <h1 className="mt-6 max-w-4xl animate-fade-in [animation-delay:200ms]">
            The next generation of premium products
          </h1>
          
          <p className="mt-6 max-w-2xl text-muted-foreground animate-fade-in [animation-delay:400ms]">
            Experience the perfect balance of form and function. Our products are designed with meticulous attention to detail, ensuring every interaction is intuitive and delightful.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:600ms]">
            <ButtonCustom size="lg" asChild>
              <Link to="/products">
                Shop Collection
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </ButtonCustom>
            
            <ButtonCustom size="lg" variant="outline" asChild>
              <Link to="/about">
                Learn More
              </Link>
            </ButtonCustom>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
