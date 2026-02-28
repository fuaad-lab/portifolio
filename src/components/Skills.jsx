import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React", level: "Intermediate" },
    { name: "Tailwind CSS", level: "Intermediate" },
    { name: "Git", level: "Intermediate" },
    { name: 'figma', level: 'Beginner' },
    { name: 'vs code', level: 'Intermediate' },
  ];
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          My Skills
        </h2>
        <div className="mt-10 space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex items-center justify-between bg-white p-4 rounded shadow">
                <span className="text-lg font-medium text-gray-800">
                  {skill.name}
                </span>
                <span className="text-sm text-gray-600">{skill.level}</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full"
                style={{width:`${skill.level}`}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
