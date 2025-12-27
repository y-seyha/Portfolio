import React, { useEffect, useRef, useState } from "react";
import { Code, Menu, X } from "lucide-react";
import { NAV_LINK } from "../../utils/contains";
import { scrollToSection, useScrollSpy } from "../../hooks/useScrollSpy";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const activeSection = useScrollSpy(NAV_LINK.map((link) => link.id));

  // refs for desktop nav items
  const navRef = useRef({});
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0,
  });

  // background blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // move sliding indicator
  useEffect(() => {
    const activeEl = navRef.current[activeSection];
    if (activeEl) {
      setIndicatorStyle({
        width: activeEl.offsetWidth,
        left: activeEl.offsetLeft,
      });
    }
  }, [activeSection]);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 w-full py-4 -transition-1/2 duration-300 ${
        isScrolled ? "bg-black/30 backdrop-blur-lg" : "bg-transparent"
      }`}
      style={{ transform: "translate3d(0,0,0)" }}
    >
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="flex items-center justify-between md:justify-center">
          {/* Logo */}
          <div className="flex items-center gap-4 md:hidden">
            <Code className="w-6 h-6 text-primary" />
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl font-bold text-white hover:opacity-80 transition-opacity"
            >
              Home
            </button>
          </div>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden md:flex items-center relative bg-white/10 backdrop-blur-lg rounded-full p-1">
            {/* Sliding Indicator */}
            <span
              className="absolute top-1 bottom-1 bg-white rounded-full transition-all duration-300 ease-[cubic-bezier(.34,1.56,.64,1)]"
              style={{
                width: indicatorStyle.width,
                transform: `translateX(${indicatorStyle.left}px)`,
              }}
            />

            {NAV_LINK.map((link) => (
              <button
                key={link.id}
                ref={(el) => (navRef.current[link.id] = el)}
                onClick={() => handleNavClick(link.id)}
                className={`relative z-10 px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                  activeSection === link.id
                    ? "text-black"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden ">
            <button
              onClick={() => handleNavClick("contact")}
              className="ml-4 px-7 py-3.5 bg-white text-[#212121] font-medium rounded-[17px] hover:bg-white/90 transition-all"
            >
              Hire Me
            </button>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-4 text-white"
            aria-label="menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-lg border-t border-white/10 px-5 py-6 space-y-3">
          {NAV_LINK.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeSection === link.id
                  ? "text-white bg-white/10"
                  : "text-white/70 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.label}
            </button>
          ))}

          <button
            onClick={() => handleNavClick("contact")}
            className="w-full px-7 py-3.5 bg-white text-[#212121] font-medium rounded-[17px] hover:bg-white/90 transition-all mt-2"
          >
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
