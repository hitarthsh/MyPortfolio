import { useState, useEffect, useRef } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Register ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const menuItemsRef = useRef([]);
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power2.out", clearProps: "all" }
    );

    gsap.fromTo(
      ".nav-link",
      { y: -10, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.05, ease: "power2.out", delay: 0.3, clearProps: "all" }
    );
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.to(menuRef.current, { opacity: 1, duration: 0.2, ease: "power2.out" });
      gsap.from(menuItemsRef.current, { y: 20, opacity: 0, duration: 0.3, stagger: 0.05, ease: "power2.out" });
    } else {
      gsap.to(menuRef.current, { opacity: 0, duration: 0.2, ease: "power2.in" });
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = isMobileMenuOpen ? "hidden" : "";
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    gsap.to(window, {
      duration: 0.8,
      scrollTo: targetElement.offsetTop - 80,
      ease: "power2.inOut",
    });

    setIsMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-[9999] transition-all ${
        isScrolled || isMobileMenuOpen ? "bg-slate-900 border-b border-slate-800" : "bg-slate-900/90"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <nav className="relative flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text hover:opacity-80 transition-opacity nav-link" onClick={handleNavClick}>
            Hitarth Shah
          </a>

          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm lg:text-base text-slate-300 hover:text-primary-400 transition-colors font-medium px-2 nav-link" onClick={handleNavClick}>
                {link.label}
              </a>
            ))}
            <a href="#contact" className="ml-2 px-4 py-2 text-sm lg:text-base rounded-full bg-slate-800 text-white hover:text-white hover:bg-slate-700 transition-all border border-slate-700 font-medium nav-link" onClick={handleNavClick}>
              Get in Touch
            </a>
          </div>

          <button className="md:hidden p-2 text-slate-300 hover:text-primary-400 transition-colors rounded-lg hover:bg-slate-800/50" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
            {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </nav>

        <div ref={menuRef} className={`fixed left-0 right-0 top-16 sm:top-20 bottom-0 bg-slate-900 transition-all md:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`} style={{ zIndex: 9998 }}>
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)]">
            {navLinks.map((link, index) => (
              <a key={link.href} href={link.href} ref={(el) => (menuItemsRef.current[index] = el)} className="w-full py-4 text-center text-lg text-slate-300 hover:text-primary-400 transition-colors font-medium hover:bg-slate-800/50" onClick={handleNavClick}>
                {link.label}
              </a>
            ))}
            <a href="#contact" ref={(el) => (menuItemsRef.current[navLinks.length] = el)} className="mt-8 px-8 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium hover:opacity-90 transition-all text-lg w-64 text-center" onClick={handleNavClick}>
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
