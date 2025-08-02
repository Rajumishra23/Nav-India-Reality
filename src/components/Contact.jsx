import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="bg-white py-10 px-6 md:px-20 lg:px-32">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center"><b><u>Contact us for our retail advisory</u></b></h2>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" rows="5" className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          </div>

          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;