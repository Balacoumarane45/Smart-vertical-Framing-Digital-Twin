
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Box, Grid3X3, Layers, LayoutGrid, Maximize2, Droplet } from "lucide-react";

const DigitalTwin = () => {
  const [activeView, setActiveView] = useState("3d");

  return (
    <section id="digital-twin" className="section bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">3D Digital Twin</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Experience your vertical farm like never before with our interactive 3D digital twin technology.
          </p>
        </div>

        <div className="flex flex-wrap md:flex-nowrap gap-6">
          {/* Control Panel */}
          <div className="w-full md:w-64 bg-gray-50 rounded-xl p-4 space-y-4">
            <div className="font-medium text-gray-800 mb-2">View Controls</div>
            <div className="flex flex-col gap-2">
              <Button 
                variant={activeView === "3d" ? "default" : "outline"} 
                className={activeView === "3d" ? "bg-green-600 hover:bg-green-700" : ""}
                onClick={() => setActiveView("3d")}
                size="sm"
              >
                <Box className="mr-2 h-4 w-4" />
                3D View
              </Button>
              <Button 
                variant={activeView === "floors" ? "default" : "outline"} 
                className={activeView === "floors" ? "bg-green-600 hover:bg-green-700" : ""}
                onClick={() => setActiveView("floors")}
                size="sm"
              >
                <Layers className="mr-2 h-4 w-4" />
                Floor Plan
              </Button>
              <Button 
                variant={activeView === "grid" ? "default" : "outline"} 
                className={activeView === "grid" ? "bg-green-600 hover:bg-green-700" : ""}
                onClick={() => setActiveView("grid")}
                size="sm"
              >
                <LayoutGrid className="mr-2 h-4 w-4" />
                Grid View
              </Button>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="font-medium text-gray-800 mb-2">Sections</div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="section1" className="mr-2" defaultChecked />
                  <label htmlFor="section1" className="text-sm">Growing Area A</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="section2" className="mr-2" defaultChecked />
                  <label htmlFor="section2" className="text-sm">Growing Area B</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="section3" className="mr-2" defaultChecked />
                  <label htmlFor="section3" className="text-sm">Seeding Section</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="section4" className="mr-2" defaultChecked />
                  <label htmlFor="section4" className="text-sm">Harvesting Area</label>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4">
              <div className="font-medium text-gray-800 mb-2">Visualization</div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input type="checkbox" id="temp" className="mr-2" defaultChecked />
                  <label htmlFor="temp" className="text-sm">Temperature Overlay</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="humidity" className="mr-2" />
                  <label htmlFor="humidity" className="text-sm">Humidity Overlay</label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="growth" className="mr-2" />
                  <label htmlFor="growth" className="text-sm">Growth Stage</label>
                </div>
              </div>
            </div>
          </div>

          {/* 3D Visualization Area */}
          <div className="flex-1 relative">
            <div className="bg-gray-50 rounded-xl border border-gray-100 w-full h-[500px] flex items-center justify-center relative">
              {activeView === "3d" && (
                <div className="relative w-full h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1626278664285-f796b9ee7806?q=80&w=3174&auto=format&fit=crop" 
                    alt="Vertical Farm Digital Twin" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-xl"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">Digital Twin Visualization</p>
                    <p className="text-sm text-white/80">Interactive 3D model with real-time data</p>
                  </div>

                  <Button className="absolute top-3 right-3 rounded-full h-8 w-8 p-0" variant="outline">
                    <Maximize2 className="h-4 w-4" />
                  </Button>

                  {/* Sample data points */}
                  <div className="absolute top-1/4 left-1/3 w-8 h-8 rounded-full bg-green-500/20 border-2 border-green-500 flex items-center justify-center cursor-pointer hover:bg-green-500/30 transition-colors">
                    <Box className="h-4 w-4 text-white" />
                  </div>
                  <div className="absolute top-1/2 right-1/4 w-8 h-8 rounded-full bg-blue-500/20 border-2 border-blue-500 flex items-center justify-center cursor-pointer hover:bg-blue-500/30 transition-colors">
                    <Droplet className="h-4 w-4 text-white" />
                  </div>
                </div>
              )}

              {activeView === "floors" && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="bg-white p-12 rounded-xl shadow-sm max-w-[500px]">
                    <Grid3X3 size={240} className="text-green-700/30 mx-auto" />
                    <p className="text-center mt-4 text-gray-500">Floor Plan View</p>
                  </div>
                </div>
              )}

              {activeView === "grid" && (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="bg-white p-12 rounded-xl shadow-sm max-w-[500px]">
                    <LayoutGrid size={240} className="text-green-700/30 mx-auto" />
                    <p className="text-center mt-4 text-gray-500">Grid View</p>
                  </div>
                </div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <Button variant="outline" className="text-xs">Reset View</Button>
              <Button variant="outline" className="text-xs">Take Screenshot</Button>
              <Button variant="outline" className="text-xs">Share View</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalTwin;
