
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Dashboard from "@/components/Dashboard";
import DigitalTwin from "@/components/DigitalTwin";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Dashboard />
        <DigitalTwin />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
