
import { Button } from "@/components/ui/button";
import { ArrowRight, LineChart, Monitor, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 to-white py-20">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 fade-in">
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Smart <span className="gradient-text">Vertical Farming</span> Digital Twin
          </h1>
          <p className="text-lg text-gray-600 md:text-xl max-w-2xl">
            Monitor, optimize, and control your vertical farm with our cutting-edge digital twin technology, providing real-time insights and AI-powered recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-green-600 hover:bg-green-700 px-8 py-6 text-lg">
              Get Started
            </Button>
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-6 py-6 text-lg">
              <span>View Demo</span>
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
          
          <div className="flex flex-wrap gap-6 pt-8">
            <div className="flex items-center gap-2">
              <LineChart className="text-green-600" />
              <span className="font-medium">Real-time Analytics</span>
            </div>
            <div className="flex items-center gap-2">
              <Monitor className="text-green-600" />
              <span className="font-medium">Remote Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="text-green-600" />
              <span className="font-medium">Yield Optimization</span>
            </div>
          </div>
        </div>
        
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="bg-gradient-to-r from-green-600/20 to-green-400/20 rounded-full w-[380px] h-[380px] md:w-[450px] md:h-[450px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 blur-3xl z-0"></div>
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2642&auto=format&fit=crop"
                alt="Vertical Farming Digital Twin" 
                className="rounded-xl shadow-2xl w-full max-w-md object-cover grow-animation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
