import React from "react";
const RequestQuote = () => {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="bg-linear-to-r from-blue-500 to-blue-400 rounded-lg p-8 flex justify-between items-center relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center"></div>
        <div className="relative z-10 max-w-md text-white">
          <h2 className="text-3xl font-bold mb-3">An easy way to send requests to all suppliers</h2>
          <p className="text-sm opacity-90">
            Send your quote request to multiple suppliers and get the best deals quickly and easily.
          </p>
        </div>
        <div className="relative z-10 bg-white rounded-lg p-5 w-full max-w-md shadow-lg hidden md:block">
            <h3 className="font-bold text-lg mb-4">Send quote to suppliers</h3>
            <div className="space-y-3">
                <input type="text" placeholder="What item you need?" className="w-full border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-blue-500"/>
                <textarea placeholder="Type more details" className="w-full border border-gray-300 rounded px-3 py-2 text-sm h-20 outline-none focus:border-blue-500"></textarea>
                <div className="flex gap-2">
                    <input type="number" placeholder="Quantity" className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm outline-none"/>
                    <select className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm outline-none">
                        <option>Pcs</option>
                        <option>Kg</option>
                    </select>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700">Send inquiry</button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default RequestQuote;