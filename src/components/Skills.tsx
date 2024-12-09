import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-32 mx-auto px-4 sm:px-6">
      <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-center">
        {/* Left Column: Introduction */}
        <div data-aos="zoom-in-up" className="space-y-6">
          <h2 className="text-4xl md:text-5xl text-gray-300 font-bold">
            Technologies I Work On
          </h2>
          <p className="text-gray-500 text-lg md:text-xl">
            I&apos;m passionate about using the latest technologies to build
            modern, scalable applications. Here are the technologies I work
            with.
          </p>
        </div>

        {/* Right Column: Skills List */}
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 text-lg sm:text-xl">
            {/* List of Skills */}
            {[
              { name: "Typescript", color: "text-blue-500" },
              { name: "Next.js", color: "text-white" },
              { name: "Python", color: "text-yellow-400" },
              { name: "Tailwind", color: "text-teal-400" },
              { name: "HTML", color: "text-red-500" },
              { name: "Node.js", color: "text-green-400" },
            ].map((skill, index) => (
              <div key={index} data-aos="zoom-in-up" className="space-y-2">
                <p className={`${skill.color} font-semibold`}>{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
