import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Contact() {
return (
<> <div className="bg-black mt-10"> <div className="text-center pt-20 font-serif font-extrabold space-y-7 mb-10"> <h1 className="text-blue-950 text-4xl transition-colors duration-500 hover:text-blue-400">
Contact </h1> </div>

```
    <div className="bg-gradient-to-tr from-[#0f0f0f] via-[#1e1b4b] to-[#312e81] 
                    text-white text-center rounded-2xl max-w-4xl mx-auto p-8 
                    transition-all duration-500 hover:shadow-[0_0_40px_#3b82f6]/60 hover:scale-[1.02] mb-10">
      <p className="text-5xl md:text-6xl font-mono transition-colors duration-500 hover:text-blue-400">
        Let's connect
      </p>
      <p className="mt-4 text-lg md:text-2xl font-thin text-white transition-all duration-700 hover:scale-105 hover:drop-shadow-[0_0_10px_#a855f7] line-clamp-4">
        I’m always open to collaborating on creative projects, internships, or exciting opportunities in web development.
        Whether you have a question, a project idea, or just want to say hi — feel free to reach out!
      </p>

      <button className="my-6 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 
                         hover:from-blue-700 hover:to-indigo-700 rounded-xl text-white">
        📧 vermarishika@gmail.com
      </button>

      <div className="flex justify-center gap-6 pt-6 flex-wrap">
        <a
          href="https://www.linkedin.com/in/rishika-verma-4561502a6/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin size={40} />
        </a>
        <a
          href="https://github.com/vermarishika24598-blip"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaGithub size={40} />
        </a>
        <a
          href="https://x.com/RishikaVer19716"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaTwitter size={40} />
        </a>
      </div>
    </div>
  </div>
</>

);
}
