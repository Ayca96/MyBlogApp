import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted: ", formData);
  };

  return (
    <div className="max-w-screen-lg mx-auto py-40 px-5">
      <div className="grid grid-cols-1 md:grid-cols-12 border">
        <div className="bg-peachBeige md:col-span-4 p-10 text-white">
          <p className="mt-4 text-sm uppercase">Contact</p>
          <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Get In <span className="text-indigo-600">Touch</span>
          </h3>
          <p className="mt-4 text-gray-200">
            Reach out to us for any inquiries or support.
          </p>
          <div className="mt-5 text-sm">
            <p>📍 House #14, Street #12, München</p>
            <p>📞 +93 749 99 65 50</p>
            <p>🕒 24/7 Support</p>
          </div>
        </div>
        <form className="md:col-span-8 p-10" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-700 text-xs font-bold mb-2">First Name</label>
              <input
                className="w-full bg-white text-gray-700 border rounded py-3 px-4 focus:outline-none focus:bg-white"
                name="firstName"
                type="text"
                placeholder="Jane"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-gray-700 text-xs font-bold mb-2">Last Name</label>
              <input
                className="w-full bg-white text-gray-700 border rounded py-3 px-4 focus:outline-none focus:bg-white"
                name="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-xs font-bold mb-2">Email Address</label>
            <input
              className="w-full bg-white text-gray-700 border rounded py-3 px-4 focus:outline-none focus:bg-white"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label className="block text-black-900 text-xs font-bold mb-2">Your Message</label>
            <textarea
              rows="5"
              className="w-full bg-white text-black-900 border rounded py-3 px-4 focus:outline-none focus:bg-white"
              name="message"
              placeholder="Type your message here..."
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex justify-between items-center">
            <label className="text-gray-500 font-bold">
              <input
                className="mr-2 leading-tight"
                type="checkbox"
                name="newsletter"
                checked={formData.newsletter}
                onChange={handleChange}
              />
              <span className="text-sm">Send me your newsletter!</span>
            </label>
            <button
              className="bg-indigo-600 text-white font-bold py-2 px-6 rounded hover:bg-indigo-400"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
