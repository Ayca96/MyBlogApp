import React, { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed with: ${email}`);
    // Burada backend API'ye post edebilirsin.
  };

  return (
    <div className="mx-auto !mt-20 mb-20 w-[50%] px-4 sm:mt-32 lg:px-6">
    <div className="relative overflow-hidden bg-peachBeige px-4 py-12 shadow-2xl rounded-xl sm:rounded-2xl sm:px-12 xl:py-16">
      <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold tracking-tight text-white sm:text-3xl">
        Keep Updated
      </h2>
  
      <p className="mx-auto mt-2 max-w-xl text-center text-base leading-7 text-white">
        Join our mailing list and stay informed about the latest FitFunction innovations!
      </p>
  
      {/* Form */}
      <form onSubmit={handleSubmit} className="mx-auto mt-6 flex max-w-md gap-x-3">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6  placeholder-white"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className="flex-none rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          Notify me
        </button>
      </form>
    </div>
  </div>
  
  );
};

export default SubscribeSection;
