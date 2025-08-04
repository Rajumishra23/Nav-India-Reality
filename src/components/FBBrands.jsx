import React from "react";

const FnBBrands = () => {
  const brands = [
        
  { name: "Spice Villa", image: "/spicevilla.png" },
  { name: "Café Bloom", image: "/caffbloom.png" },
  { name: "Food Nest", image: "/FoodNest.png" },
  { name: "Urban Bites", image: "/urbanbites.png" },
  { name: "The Kitchen Co.", image: "/kichen.png" },
  { name: "Royal Tandoor", image: "/royaltandoor.png" },
  { name: "Bakers Street", image: "/bakersstreet.png" },
  { name: "Chaat Central", image: "/chatcentral.png" },
  { name: "Global Feast", image: "/globalfeast.png" },

  ];

  return (
    <section id="F&BBrands" className="py-12 bg-white px-6">
      <h2 className="text-3xl font-bold text-yellow-800 text-center mb-8">
        Our F&B Brands
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-center">
        {brands.map((brand, index) => (
          <div key={index} className="text-center shadow-md rounded p-4 hover:shadow-lg transition">
            <img
              src={brand.image}
              alt={brand.name}
              className="mx-auto h-20 object-contain mb-2"
            />
            <p className="text-sm font-semibold text-gray-700">{brand.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FnBBrands;
