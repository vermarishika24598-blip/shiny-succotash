import { projects } from "./utils/project.card.js";



export function Project() {
  return (
    <>
      <div className="pt-20 mx-4 md:mx-20">
        <div className="pt-10 px-6 bg-gradient-to-b from-black via-gray-900 to-black min-h-screen rounded-xl">

          {/* Heading */}
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white pb-1">
              Projects
            </h1>
          </div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((value) => (
              <div
                key={value.id}
                className="bg-gray-800 p-4 rounded-xl text-white shadow-lg hover:scale-105 transition-all duration-300"
              >
                {/* IMAGE */}
                <img
                  src={value.image}
                  alt={value.title}
                  className="rounded-lg h-48 w-full object-cover"
                />

                {/* TITLE */}
                <h1 className="text-xl font-bold mt-3">{value.title}</h1>

                {/* DESCRIPTION */}
                <p className="text-gray-300 mt-2">{value.description}</p>

                {/* TECH BADGES */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {value.tech.map((t, index) => (
                    <span
                      key={index}
                      className="text-xs bg-orange-600 px-2 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="mt-4 flex justify-between">

                  <a
                    href={value.link}
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    Live Demo
                  </a>

                  <a
                    href={value.github}
                    target="_blank"
                    className="text-blue-400 hover:underline"
                  >
                    GitHub
                  </a>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
