import React from "react";

const AboutMe = () => {
  return (
    <section className="py-20 bg-gray-100 ">
      <div className="max-w-6xl mx-auto px-6 md:flex md:items-ceter md:gap-12">
        <div className="flex justify-center md:w-1/2">
          <img
            src="download (2).webp"
            alt=""
            className="w-60 h-60 object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div className="mt-10 md:mt-0 md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            I'm a passionate Frontend Developer who loves building modern,
            responsive, and user-friendly web applications. I specialize in
            React, Tailwind CSS, and JavaScript, and I enjoy turning ideas into
            real-world digital experiences.
          </p>
          <div className="flex flex-col justify-center items-center mt-4">
            <h3 className="text-3xl font-bold text-gray-800">skills</h3>{" "}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6">
              <span className="bg-white px-4 py-2 rounded shadow">React</span>
              <span className="bg-white px-4 py-2 rounded shadow">
                Tailwind CSS
              </span>
              <span className="bg-white px-4 py-2 rounded shadow">
                JavaScript
              </span>
              <span className="bg-white px-4 py-2 rounded shadow">
                UI Design
              </span>
              <span className="bg-white px-4 py-2 rounded shadow">
                Responsive Design
              </span>
              <span className="bg-white px-4 py-2 rounded shadow">
                Git
              </span>
            </div>
          </div>
          <button className="mt-8 bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
