"use client";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredContact: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "radio" ? value : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1 items-stretch">
          {/* Left Image & Info */}
          <div className="h-full">
            <div className="relative w-full h-full rounded-2xl lg:rounded-l-2xl overflow-hidden">
              <img
                src="footy-skill.jpg"
                alt="Contact Us"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11 z-10">
                Contact us
              </h1>
              <div className="absolute bottom-0 w-full lg:p-11 p-5 z-10">
                <div className="bg-white rounded-lg p-6 space-y-6">
                  <ContactInfo icon="📞" label="470-601-1911" />
                  <ContactInfo icon="📧" label="academy@sportsconnect.com" />
                  <ContactInfo
                    icon="📍"
                    label="654 Sycamore Ave, Meadowville, WA 76543"
                  />
                </div>
              </div>
              <div className="absolute inset-0 bg-[#59098c] bg-opacity-50 z-0"></div>
            </div>
          </div>

          {/* Right Form */}
          <div className="h-full bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl flex flex-col justify-between">
            <div>
              <h2 className="text-[#59098c] font-manrope text-4xl font-semibold leading-10 mb-11">
                Send Us A Message
              </h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                />

                {/* Preferred Sport */}
                <div className="mb-10">
                  <h4 className="text-gray-500 text-lg font-normal leading-7 mb-4">
                    Preferred Sport
                  </h4>
                  <div className="flex">
                    {["basketball", "Football"].map((method) => (
                      <label
                        key={method}
                        className="flex items-center mr-11 cursor-pointer text-gray-500 text-base font-normal leading-6"
                      >
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method}
                          checked={formData.preferredContact === method}
                          onChange={handleChange}
                          className="hidden"
                        />
                        <span className="border border-gray-300 rounded-full mr-2 w-4 h-4 ml-2" />
                        {method.charAt(0).toUpperCase() + method.slice(1)}
                      </label>
                    ))}
                  </div>
                </div>

                <input
                  type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
                />
                <button
                  type="submit"
                  className="w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 bg-[#8536b6] hover:bg-[#59098c] shadow-sm"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, label }) => (
  <div className="flex items-center space-x-4">
    <div className="text-indigo-600 text-xl">{icon}</div>
    <h5 className="text-black text-base font-normal leading-6">{label}</h5>
  </div>
);

export default ContactForm;
