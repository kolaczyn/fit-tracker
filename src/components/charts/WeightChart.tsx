import React from 'react';
import {
  XAxis,
  AreaChart,
  YAxis,
  Area,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import data from '../../static/dummyChartData';

interface WeightChartProps {}

export const WeightChart: React.FC<WeightChartProps> = ({}) => {
  return (
    <ResponsiveContainer width="95%" height={200}>
      <AreaChart data={data}>
        <XAxis dataKey="date" />
        <YAxis domain={['dataMin - 0.5', 'dataMax + 0.5']} />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="weight"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};
