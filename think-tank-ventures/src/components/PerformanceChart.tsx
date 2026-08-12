import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const data = [
  { name: 'Jan', accuracy: 82, volume: 120 },
  { name: 'Feb', accuracy: 85, volume: 132 },
  { name: 'Mar', accuracy: 89, volume: 150 },
  { name: 'Apr', accuracy: 92, volume: 180 },
  { name: 'May', accuracy: 94, volume: 220 },
  { name: 'Jun', accuracy: 96, volume: 280 },
  { name: 'Jul', accuracy: 98, volume: 350 },
];

export default function PerformanceChart() {
  return (
    <div className="w-full h-80 min-h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorAccuracy" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f97316" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#f97316" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.4}/>
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="name" 
            stroke="#94a3b8" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false}
            dy={10}
          />
          <YAxis 
            stroke="#94a3b8" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
            tickFormatter={(value) => `${value}`} 
            dx={-10}
          />
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#ffffff', 
              borderRadius: '12px', 
              border: '1px solid #e2e8f0', 
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' 
            }}
            itemStyle={{ fontSize: '14px', fontWeight: 600 }}
            labelStyle={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}
          />
          <Area 
            type="monotone" 
            dataKey="volume" 
            stroke="#0ea5e9" 
            strokeWidth={3} 
            fillOpacity={1} 
            fill="url(#colorVolume)" 
            name="Data Processing (TB)" 
          />
          <Area 
            type="monotone" 
            dataKey="accuracy" 
            stroke="#f97316" 
            strokeWidth={3} 
            fillOpacity={1} 
            fill="url(#colorAccuracy)" 
            name="Model Accuracy (%)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
