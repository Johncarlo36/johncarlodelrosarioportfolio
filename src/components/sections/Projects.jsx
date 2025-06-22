import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl w-full px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid gap-6">
            {/* Project Card */}
            <div
              className="
                glass p-6 rounded-xl border border-white/10 
                hover:-translate-y-1 hover:border-blue-500/30
                hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                transition-all
              "
            >
              <h3 className="text-xl font-bold mb-2">CLTech Booking System</h3>
              <p className="text-gray-400 mb-4">
                Access quality education anytime, anywhere with flexible online courses designed to fit your schedule and lifestyle.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {["MongoDB", "Express", "React.js", "Node.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="https://cl-tech-front-john-carlo-568ewhtil.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
