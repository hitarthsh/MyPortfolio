import { HiArrowUp } from "react-icons/hi2";
import { useNavigate, useLocation } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");

    // For home link
    if (targetId === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    // If it's a home page section link (contains #)
    if (targetId.includes("#")) {
      const sectionId = targetId.split("#")[1];

      // If we're not on the home page, first navigate to home
      if (location.pathname !== "/") {
        navigate("/");
        // Wait for navigation to complete then scroll
        setTimeout(() => {
          const targetElement = document.querySelector(`#${sectionId}`);
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 80,
              behavior: "smooth",
            });
          }
        }, 100);
      } else {
        // If already on home page, just scroll
        const targetElement = document.querySelector(`#${sectionId}`);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: "smooth",
          });
        }
      }
    } else {
      // For other non-section links
      navigate(targetId);
    }
  };

  const footerLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Contact", href: "/#contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/hitarth-web-dev",
      icon: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
    },
    {
      name: "GitHub",
      href: "https://github.com/hitarthsh",
      icon: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/hitarth.dev",
      icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.012-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@code-minds-junction?sub_confirmation=1",
      icon: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
    },
  ];

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container">
        <div className="py-12 border-b border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <a
                href="/"
                className="text-2xl font-bold text-white inline-block mb-4"
                onClick={handleNavClick}
              >
                HITARTH SHAH
              </a>
              <p className="text-slate-400 mb-6 max-w-xs">
                Frontend Developer specializing in creating responsive,
                high-performance web experiences with modern technologies.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-slate-700 hover:bg-primary rounded-md transition-colors"
                    aria-label={social.name}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d={social.icon}
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            <div className="md:col-span-2 md:flex md:justify-end">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2">
                    {footerLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-slate-400 hover:text-primary transition-colors"
                          onClick={handleNavClick}
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Skills</h3>
                  <ul className="space-y-2">
                    <li>
                      <span className="text-slate-400">React.js</span>
                    </li>
                    <li>
                      <span className="text-slate-400">Tailwind CSS</span>
                    </li>
                    <li>
                      <span className="text-slate-400">WordPress</span>
                    </li>
                    <li>
                      <span className="text-slate-400">Shopify</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="mailto:shahh0919@gmail.com"
                        className="text-slate-400 hover:text-primary transition-colors"
                      >
                        info@hitarthshah.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+918488820605"
                        className="text-slate-400 hover:text-primary transition-colors"
                      >
                        +91 8488820605
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Legal</h3>
                  <ul className="space-y-2">
                    <li>
                      <a
                        href="/terms"
                        className="text-slate-400 hover:text-primary transition-colors"
                        onClick={handleNavClick}
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        href="/privacy"
                        className="text-slate-400 hover:text-primary transition-colors"
                        onClick={handleNavClick}
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/freelancer-terms"
                        className="text-slate-400 hover:text-primary transition-colors"
                        onClick={handleNavClick}
                      >
                        Freelancer Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Developed & Managed By Hitarth
            Shah. All rights reserved
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 bg-slate-700 hover:bg-primary rounded-md text-white transition-colors group"
            aria-label="Scroll to top"
          >
            <HiArrowUp className="h-5 w-5 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
}
