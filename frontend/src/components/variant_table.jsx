import React from 'react';

function VariantTable({ data }) {
  return (
    <div className="overflow-x-auto">
      <h2 className="text-2xl font-semibold text-center mb-2">Gene Summary Table</h2>
      <table className="table-auto w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="bg-indigo-200">
            <th className="px-4 py-2">Gene</th>
            <th className="px-4 py-2">Variant Count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((gene, index) => (
            <tr key={index} className="text-center border-b">
              <td className="px-4 py-2">{gene.gene}</td>
              <td className="px-4 py-2">{gene.variant_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VariantTable;
