import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

function GeneDistribution({ data }) {
  const topGenes = data.sort((a, b) => b.variant_count - a.variant_count).slice(0, 10);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-center mb-2">Top Genes by Variant Count</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={topGenes}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="gene" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="variant_count" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default GeneDistribution;
