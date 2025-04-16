
import { BarChart2, Cloud, Cpu, LineChart, Shield, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Cpu className="h-10 w-10 text-green-600" />,
      title: "Real-time Monitoring",
      description: "Track temperature, humidity, light, and nutrient levels across your vertical farm in real time."
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-green-600" />,
      title: "Data Analytics",
      description: "Leverage advanced analytics to optimize plant growth and maximize yields."
    },
    {
      icon: <LineChart className="h-10 w-10 text-green-600" />,
      title: "Growth Prediction",
      description: "AI-powered growth models predict harvest dates and yield potential with high accuracy."
    },
    {
      icon: <Zap className="h-10 w-10 text-green-600" />,
      title: "Energy Optimization",
      description: "Reduce energy consumption while maintaining optimal growing conditions."
    },
    {
      icon: <Cloud className="h-10 w-10 text-green-600" />,
      title: "Cloud Integration",
      description: "Access your farm's digital twin from anywhere with secure cloud connectivity."
    },
    {
      icon: <Shield className="h-10 w-10 text-green-600" />,
      title: "Anomaly Detection",
      description: "Early warning system detects and alerts you to potential issues before they affect crops."
    },
  ];
  
  return (
    <section id="features" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our digital twin platform offers comprehensive tools for managing your vertical farm
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="rounded-full bg-green-50 p-3 w-fit mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-green-600 to-green-400 rounded-xl p-8 text-white shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to transform your vertical farm?</h3>
              <p className="text-white/80">Get started with our digital twin technology today.</p>
            </div>
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
