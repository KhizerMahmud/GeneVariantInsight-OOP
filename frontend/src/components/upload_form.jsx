import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

function MutationChart({ data }) {
  const formatted = Object.entries(data).map(([key, value]) => ({ name: key, value }));

  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-semibold mb-2">Mutation Types</h2>
      <PieChart width={400} height={300}>
        <Pie data={formatted} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
          {formatted.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default MutationChart;
