import { RevealOnScroll } from "../RevealOnScroll";
import myPic from "../../assets/myPic.jpg";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* 🔽 Inline Animation Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slide-in-down {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1s ease forwards;
        }

        .animate-slide-in-down {
          animation: slide-in-down 1s ease forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>

      <RevealOnScroll>
        <div className="text-center z-10 px-4 animate-fade-in">
          {/* Floating Profile Picture */}
          <img
            src={myPic}
            alt="My Photo"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-6 border-4 border-blue-400 shadow-xl transform transition-all duration-500 hover:scale-105 animate-float"
          />

          {/* Gradient Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-md animate-slide-in-down">
            John Carlo Del Rosario
          </h1>

          {/* Description */}
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto animate-fade-in delay-200">
            Computer Engineer aspiring to be a Junior Developer. Experienced in
            application deployment, helpdesk operations, and providing
            technical support.
          </p>

          {/* Buttons */}
          <div className="flex justify-center space-x-4 animate-fade-in delay-300">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-400 py-3 px-6 rounded font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
