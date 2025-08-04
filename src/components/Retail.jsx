import React from "react";

const Retail = () => {
  return (
    <section id="retail" className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-800 mb-4">Retail Opportunities</h2>
        <p className="text-gray-600 mb-8">
          Explore leasing options across premium retail zones — ideal for flagship stores & curated brands.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="border p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Anchor Spaces</h3>
            <p className="text-gray-500">
              High visibility zones for leading brands & lifestyle stores.
            </p>
          </div>
          <div className="border p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Boutique Units</h3>
            <p className="text-gray-500">
              Tailored spaces for niche fashion & artisanal labels.
            </p>
          </div>
          <div className="border p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Pop-up Zones</h3>
            <p className="text-gray-500">
              Short-term retail for seasonal or trending concepts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Retail;