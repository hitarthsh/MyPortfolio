import {
  ArrowDownIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-[100svh] flex flex-col justify-between relative overflow-hidden bg-slate-900 px-4"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container mx-auto relative z-10 flex-1 flex flex-col">
        <div className="flex-1 flex items-center">
          <div className="text-center max-w-4xl mx-auto w-full pt-20">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 border border-slate-700 mb-6 sm:mb-8 animate-float ">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm text-white font-medium ">
                Available for Opportunities
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight">
              <span className="block text-white">Hi, I'm Hitarth Shah</span>
              <span className="block mt-2 bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 text-transparent bg-clip-text">
                Frontend Developer
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto">
              I specialize in creating responsive, high-performance web
              experiences with React.js and modern web technologies. Let's build
              something amazing together.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
              {[
                "React.js",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Node.js",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-white text-sm font-medium hover:border-primary-500/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mb-4">
              <a
                href="#contact"
                className="px-6 sm:px-8 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-medium hover:opacity-90 transition-all text-center"
              >
                Get in Touch
              </a>
              <a
                href="#portfolio"
                className="px-6 sm:px-8 py-3 rounded-xl bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 transition-all text-center"
              >
                View Portfolio
              </a>
            </div>
            {/* Scroll Indicator */}
            <div className="flex justify-center pb-3 pt-10">
              <a
                href="#about"
                className="text-slate-300 hover:text-primary-400 transition-colors group inline-flex flex-col items-center"
              >
                <span className="block text-sm font-medium mb-1">
                  Discover More
                </span>
                <ArrowDownIcon className="w-6 h-6 animate-bounce group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
