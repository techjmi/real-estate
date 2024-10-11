import React from 'react'

const FormFooter = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* First Name */}
          <div className="relative">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              className="w-full py-2 border-b focus:border-blue-500 outline-0 form bg-black"
            />
          </div>
          {/* Last Name */}
          <div className="relative">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              className="w-full py-2 border-b border-gray-400 focus:border-blue-500 outline-none  bg-black"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Email */}
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full py-2 border-b border-gray-400 focus:border-blue-500 outline-none  bg-black"
            />
          </div>
          {/* Phone */}
          <div className="relative">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className="w-full py-2 border-b border-gray-400 focus:border-blue-500 outline-none  bg-black"
            />
          </div>
        </div>

        {/* Message */}
        <div className="relative mb-4">
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full py-2 border-b border-gray-400 focus:border-blue-500 outline-none  bg-black"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 "
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default FormFooter;
