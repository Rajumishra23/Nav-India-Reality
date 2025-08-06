import React from "react";

const FnBBrands = () => {
  const brands = [
    {
      name: "Spice Villa",
      image: "/spicevilla.png",
      description: "Authentic Indian cuisine with rich spices and flavors.",
    },
    {
      name: "Café Bloom",
      image: "/caffbloom.png",
      description: "A cozy spot for coffee lovers and fresh bakes.",
    },
    {
      name: "Food Nest",
      image: "/FoodNest.png",
      description: "Multi-cuisine restaurant serving global tastes.",
    },
    {
      name: "Urban Bites",
      image: "/urbanbites.png",
      description: "Trendy fast food for the modern city lifestyle.",
    },
    {
      name: "The Kitchen Co.",
      image: "/kichen.png",
      description: "Home-style meals with a gourmet twist.",
    },
    {
      name: "Royal Tandoor",
      image: "/royaltandoor.png",
      description: "Traditional tandoori dishes served royally.",
    },
    {
      name: "Bakers Street",
      image: "/bakersstreet.png",
      description: "Freshly baked goods and sweet delights.",
    },
    {
      name: "Chaat Central",
      image: "/chatcentral.png",
      description: "Classic Indian street food and chaats.",
    },
    {
      name: "Global Feast",
      image: "/globalfeast.png",
      description: "World flavors under one roof.",
    },
  ];

  return (
    <section
      id="F&BBrands"
      className="py-12 bg-white px-6"
    >
     <h2 className="text-2xl font-bold text-indigo-700 text-center mb-2 animate-fade-in">
  Our F&B Brands
</h2>
<p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
  Discover our diverse portfolio of food and beverage brands that bring unique flavors and unforgettable dining experiences. From fine dining to street-style delights, we cater to every taste.
</p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-center">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="text-center shadow-md rounded p-4 hover:shadow-xl transition duration-300 transform hover:scale-105 hover:-translate-y-1 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
          >
            <img
              src={brand.image}
              alt={brand.name}
              className="mx-auto h-20 object-contain mb-2"
            />
            <p className="text-sm font-semibold text-gray-700">{brand.name}</p>
            <p className="text-xs text-gray-500 mt-1">{brand.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FnBBrands;
