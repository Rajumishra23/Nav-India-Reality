import React from "react";

const JointVenture = () => {
  return (
    <section id="jointventure" className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-yellow-800 mb-4">Joint Venture Collaborations</h2>
        <p className="text-gray-600 mb-8">
          Partner with NavIndia Reality for high-value development ventures.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Built-to-Suit Projects</h3>
            <p className="text-gray-500">
              Custom real estate development aligned with partner specifications.
            </p>
          </div>
          <div className="border p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Revenue Sharing Models</h3>
            <p className="text-gray-500">
              Transparent agreements designed for mutual growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JointVenture;