
import { 
  LineChart, 
  Line, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  Tooltip, 
  CartesianGrid,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from "recharts";
import { Thermometer, Droplet, Sun, Wind, Leaf } from "lucide-react";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  // Sample data for charts
  const temperatureData = [
    { time: '00:00', value: 22.4 },
    { time: '04:00', value: 21.8 },
    { time: '08:00', value: 23.2 },
    { time: '12:00', value: 25.6 },
    { time: '16:00', value: 24.9 },
    { time: '20:00', value: 23.5 },
    { time: '24:00', value: 22.8 },
  ];
  
  const humidityData = [
    { time: '00:00', value: 68 },
    { time: '04:00', value: 69 },
    { time: '08:00', value: 72 },
    { time: '12:00', value: 67 },
    { time: '16:00', value: 65 },
    { time: '20:00', value: 70 },
    { time: '24:00', value: 71 },
  ];
  
  const harvestData = [
    { month: 'Jan', lettuce: 45, spinach: 38, kale: 25 },
    { month: 'Feb', lettuce: 52, spinach: 40, kale: 30 },
    { month: 'Mar', lettuce: 48, spinach: 45, kale: 28 },
    { month: 'Apr', lettuce: 58, spinach: 42, kale: 32 },
    { month: 'May', lettuce: 62, spinach: 48, kale: 35 },
    { month: 'Jun', lettuce: 57, spinach: 45, kale: 30 },
  ];
  
  const energyData = [
    { name: 'Lighting', value: 45 },
    { name: 'HVAC', value: 27 },
    { name: 'Irrigation', value: 18 },
    { name: 'Other', value: 10 },
  ];
  
  const COLORS = ['#66BB6A', '#4CAF50', '#43A047', '#388E3C'];
  
  const statusMetrics = [
    { 
      name: 'Temperature', 
      value: '24.5°C', 
      status: 'optimal', 
      icon: <Thermometer className="w-6 h-6 text-green-600" />,
      change: '+0.3°C'
    },
    { 
      name: 'Humidity', 
      value: '67%', 
      status: 'optimal', 
      icon: <Droplet className="w-6 h-6 text-blue-500" />,
      change: '-2%'
    },
    { 
      name: 'Light Intensity', 
      value: '428 μmol', 
      status: 'optimal', 
      icon: <Sun className="w-6 h-6 text-yellow-500" />,
      change: '+12 μmol'
    },
    { 
      name: 'Air Flow', 
      value: '0.5 m/s', 
      status: 'optimal', 
      icon: <Wind className="w-6 h-6 text-gray-500" />,
      change: '0.0 m/s'
    },
  ];

  return (
    <section id="dashboard" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12 fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Smart Dashboard</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Monitor all critical parameters of your vertical farm in real-time with our intelligent dashboard.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statusMetrics.map((metric, index) => (
            <Card key={index} className="dashboard-card slide-up" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="flex justify-between items-start">
                <div className="bg-gray-50 p-3 rounded-lg">
                  {metric.icon}
                </div>
                <span className={`text-sm font-medium px-2 py-1 rounded-full ${
                  metric.status === 'optimal' ? 'bg-green-100 text-green-700' : 
                  metric.status === 'warning' ? 'bg-yellow-100 text-yellow-700' : 
                  'bg-red-100 text-red-700'
                }`}>
                  {metric.status}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-gray-500 font-medium">{metric.name}</h3>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold">{metric.value}</span>
                  <span className="text-sm text-gray-500 pb-1">{metric.change}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="dashboard-card p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Thermometer className="mr-2 h-5 w-5 text-green-600" />
              Temperature Trend
            </h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={temperatureData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <Line type="monotone" dataKey="value" stroke="#4CAF50" strokeWidth={2} />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
          
          <Card className="dashboard-card p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Droplet className="mr-2 h-5 w-5 text-blue-500" />
              Humidity Trend
            </h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={humidityData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <Line type="monotone" dataKey="value" stroke="#2196F3" strokeWidth={2} />
                  <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                  <XAxis dataKey="time" />
                  <YAxis />
                  <Tooltip />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="dashboard-card p-4">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Leaf className="mr-2 h-5 w-5 text-green-600" />
              Harvest Yield
            </h3>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={harvestData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="lettuce" fill="#66BB6A" />
                  <Bar dataKey="spinach" fill="#43A047" />
                  <Bar dataKey="kale" fill="#2D9D78" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
          
          <Card className="dashboard-card p-4">
            <h3 className="text-lg font-semibold mb-4">Energy Distribution</h3>
            <div className="h-[250px] flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={energyData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {energyData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
