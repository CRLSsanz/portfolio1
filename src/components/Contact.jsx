import React from "react";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Sending Form");
    window.location = "#section1";
  };

  return (
    <div className="px-4 mb-4">
      <h1 className="text-2xl py-2 font-semibold text-cyan-500">Contact </h1>
      <p className="text-sm text-gray-300 mb-3">
        I’m interested in freelance opportunities, especially ambitious or large
        projects. However, if you have other request or question, don’t hesitate
        to use the form.
      </p>
      <form onSubmit={handleSubmit} className="text-gray-700">
        <input
          type="text"
          className="w-full p-2  border border-cyan-600 rounded mb-3"
          placeholder="Name"
        />
        <input
          type="email"
          className="w-full p-2  border border-cyan-600 rounded mb-3"
          placeholder="Email"
        />
        <input
          type="text"
          className="w-full p-2  border border-cyan-600 rounded mb-3"
          placeholder="Subject"
        />
        <textarea
          rows="4"
          className="w-full p-2  border border-cyan-600 rounded mb-3"
          placeholder="Message"
        ></textarea>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 border border-cyan-600 text-cyan-500"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
