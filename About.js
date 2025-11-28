


import { frontendSkills, backendSkills, programmingSkills } from "./utils/skill";

export function About() {
  return (
    <>
      {/* ABOUT SECTION */}
      <div className="text-center max-w-4xl mx-auto mt-16 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-black border border-white rounded-xl p-10 md:p-14 font-serif space-y-4">
        <h1 className="text-3xl font-bold">About Me</h1>

        <p className="text-sm md:text-base leading-relaxed">
          Hi, I’m Rishika Verma, a passionate frontend developer currently learning and expanding my skills 
          toward full stack development using the MERN stack. I have a strong foundation in C, C++, and Data 
          Structures & Algorithms, which helps me write clean and logical code. 
          On the frontend, I enjoy creating responsive and user-friendly web interfaces using HTML, CSS, and React. 
          I’m currently learning backend technologies like Node.js, Express.js, and MongoDB to build complete, 
          end-to-end web applications.
        </p>
      </div>

      {/* SKILLS SECTION */}
     <div className="pt-16 max-w-6xl mx-auto px-4 space-y-10">
  <h1 className="text-center font-extrabold text-3xl">Skills</h1>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Frontend Skills Card */}
    <div className="bg-black rounded-2xl p-6 text-center shadow-lg">
      <h2 className="text-xl font-bold mb-6 text-white">Frontend</h2>
      <div className="grid grid-cols-2 gap-4">
        {frontendSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white rounded-lg py-4 font-bold
                       transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>

    {/* Backend Skills Card */}
    <div className="bg-black rounded-2xl p-6 text-center shadow-lg">
      <h2 className="text-xl font-bold mb-6 text-white">Backend</h2>
      <div className="grid grid-cols-2 gap-4">
        {backendSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white rounded-lg py-4 font-bold
                       transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            {skill}
          </div>
        ))}
      </div>
      <p className="text-white pt-10 font-extrabold">( Learning )</p>
    </div>

    {/* Programming Skills Card */}
    <div className="bg-black rounded-2xl p-6 text-center shadow-lg">
      <h2 className="text-xl font-bold mb-6 text-white">Programming</h2>
      <div className="grid grid-cols-2 gap-4">
        {programmingSkills.map((skill, index) => (
          <div
            key={index}
            className="bg-gray-900 text-white rounded-lg py-4 font-bold
                       transition-all duration-300 hover:scale-105 hover:shadow-md"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>

  </div>
</div>

    </>
  );
}
