import { ArrowUpIcon } from "@heroicons/react/24/outline";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const footerLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
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
  ];

  return (
    <footer className="bg-slate-800 text-white">
      <div className="container">
        <div className="py-12 border-b border-slate-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <a
                href="#home"
                className="text-2xl font-bold text-white inline-block mb-4"
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
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Navigation</h3>
                  <ul className="space-y-2">
                    {footerLinks.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-slate-400 hover:text-primary transition-colors"
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
                        shahh0919@gmail.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+918488820605"
                        className="text-slate-400 hover:text-primary transition-colors"
                      >
                        (+91) 8488820605
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
            &copy; {new Date().getFullYear()} Hitarth Shah. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="p-2 bg-slate-700 hover:bg-primary rounded-md text-white transition-colors group"
            aria-label="Scroll to top"
          >
            <ArrowUpIcon className="h-5 w-5 group-hover:animate-bounce" />
          </button>
        </div>
      </div>
    </footer>
  );
}
