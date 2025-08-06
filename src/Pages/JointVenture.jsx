import React from "react";

const JointVenture = () => {
  const ventures = [
    {
      title: "Built-to-Suit Projects",
      img: "builtsuite.png",
      description:
        "We design and develop properties tailored to your business needs—retail, hospitality, or commercial—ensuring full alignment with your operational and branding goals.",
      link: "#contact",
    },
    {
      title: "Revenue Sharing Models",
      img: "revenue.png",
      description:
        "Transparent revenue-sharing agreements offering landowners and investors returns based on project performance and long-term profitability.",
      link: "#contact",
    },
    {
      title: "Land Owner Collaboration",
      img: "land.png",
      description:
        "Direct partnerships with landowners to unlock land value using legal and market expertise for optimal project outcomes.",
      link: "#contact",
    },
  ];

  return (
    <section id="jointventure" className="py-16 bg-white">
      <div className="max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-700 mb-4 animate-fade-in-up">
          Joint Venture Collaborations
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-10">
          Join hands with{" "}
          <span className="font-semibold text-yellow-700">NavIndia Realty</span>{" "}
          to co-create landmark developments. We offer strategic partnerships
          that maximize land value and ensure shared success in every project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {ventures.map((venture, index) => (
            <div
              key={index}
              className="border p-6 rounded-lg shadow hover:shadow-xl transition duration-300 text-center transform hover:-translate-y-1 bg-white animate-fade-in"
            >
              <img
                src={venture.img}
                alt={venture.title}
                className="w-full h-52 object-contain mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold mb-2 text-yellow-800">
                {venture.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{venture.description}</p>
              <a
                href={venture.link}
                className="inline-block mt-auto text-sm text-blue-600 font-medium hover:underline"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <p className="text-gray-700 text-md md:text-lg">
            Interested in partnering with us?{" "}
            <a
              href="#contact"
              className="text-blue-600 hover:underline font-medium"
            >
              Let&apos;s connect and build together →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default JointVenture;
