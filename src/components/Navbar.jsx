import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      {/* Inline custom styles */}
      <style>{`
        @keyframes logoPulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .logo-animate:hover {
          animation: logoPulse 0.6s ease-in-out forwards;
          color: #60a5fa; /* lighter blue */
        }

        .nav-link {
          position: relative;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0;
          height: 2px;
          background-color: #60a5fa;
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link:hover {
          color: white;
        }
      `}</style>

      <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.4)] backdrop-blur-md border-b border-white/10 shadow-md font-sans">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo with animation */}
            <a
              href="#home"
              className="text-xl font-bold text-white logo-animate tracking-wide"
            >
              John Carlo<span className="text-blue-400">.techPortfolio</span>
            </a>

            {/* Burger Icon for mobile */}
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-white"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-wide">
              <a href="#home" className="text-gray-300 nav-link">Home</a>
              <a href="#about" className="text-gray-300 nav-link">About</a>
              <a href="#projects" className="text-gray-300 nav-link">Projects</a>
              <a href="#contact" className="text-gray-300 nav-link">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
