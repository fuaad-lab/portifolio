import React from "react";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-100 ">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Contact me</h2>
        <p className="text-gray-500 mt-2">
          Have a question or want to work together? Send me a message!
        </p>
        <form className="mt-10 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-blue-500"
          />
          <button
            type="submit"
            className="mt-2 bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
        <div className="flex justify-center gap-6 mt-8">
          <a
            href="https://github.com/fuaad-lab"
            className="text-gray-700 hover:underline"
          >
            <FaGithub className="w-[50px] h-[50px]" />
            GitHub
          </a>
          <a href="https://x.com/fuaadi174" className="text-pink-500 hover:underline">
            <FaSquareXTwitter className="w-[50px] h-[50px]" />
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/fuaad-ibraahin-4738b4387/?trk=flagship3_open_to_hiring_creation_upsell"
            className="text-blue-600 hover:underline"
          >
            <FaLinkedin className="w-[50px] h-[50px]" />
            LinkedIN
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
