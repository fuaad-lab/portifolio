import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Netflix Clone",
      description: "A movie streaming UI built with React and Tailwind.",
      image: "/Untitled3.png",
      live: "https://ntf-clone-f8ve.vercel.app/",
      github: "https://github.com/fuaad-lab/ntf-clone.git",
      tech: ["React", "Tailwindcss", "Recoil", 'firebase'],
    },
    {
      id: 2,
      title: "Shopping Cart",
      description: "Online store with cart functionality.",
      image: "/Untitled2.png",
      live: "https://shopping-cart-hazel-rho-20.vercel.app/",
      github: "https://github.com/fuaad-lab/shopping-cart.git",
      tech: ["React", "css", "Reducer", "Context API"],
    },
    {
      id: 3,
      title: "Mss Somalia",
      description: "A website for Mss Somalia built with React and scss.",
      image: "/Untitled.png",
      live: "https://mss-somalia-r3k5.vercel.app/",
      github: "https://github.com/fuaad-lab/mss-somalia.git",
      tech: ["React", "SCSS", "Redux"],
    },
  ];
  return (
    <section className="py-20 bg-gray-100 ">
      <div className="max-w-6xl mx-auto text-gray-800">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          My Projects
        </h2>
        <p className="mt-4 text-gray-600 text-center">
          Here are some of my recent projects.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 justify-items-center">          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl  shadow p-4 hover: shadow-lg transition overflow-hidden max-w-sm w-full"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                <p className="mt-2 text-gray-600">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 px-3 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <a
                    href={project.live}
                    className="bg-blue-500 font-medium text-white px-4 py-2 rounded hover:underline transition"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    className="bg-gray-800 font-medium text-white px-4 py-2 rounded hover:underline transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
