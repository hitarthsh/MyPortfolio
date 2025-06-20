import { useState } from "react";
import { HiArrowTopRightOnSquare, HiTag, HiCodeBracket } from "react-icons/hi2";
import SectionTitle from "./SectionTitle";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "React Dashboard",
      category: "react",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description:
        "Interactive admin dashboard with comprehensive data visualization, user management, and reporting features. Implemented real-time updates using WebSockets and complex data filtering. Reduced manual reporting time by 70%.",
      tech: ["React", "Redux", "Chart.js", "Socket.io"],
      liveUrl: "https://dashboard.hitarthshah.com",
      githubUrl: "https://github.com/hitarthsh/react-dashboard",
    },
  ];

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "react", name: "React.js" },
    { id: "nextjs", name: "Next.js" },
    { id: "uiux", name: "UI/UX Design" },
    { id: "others", name: "Others" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-20 bg-slate-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute hidden sm:block">
        <div className="absolute top-20 -left-16 sm:-left-20 md:-left-24 lg:-left-32 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-primary-500/10 rounded-full blur-[50px] sm:blur-[64px] md:blur-[80px] lg:blur-[96px] opacity-40 sm:opacity-50 md:opacity-60 lg:opacity-70" />
        <div className="absolute bottom-20 -right-16 sm:-right-20 md:-right-24 lg:-right-32 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-secondary-500/10 rounded-full blur-[50px] sm:blur-[64px] md:blur-[80px] lg:blur-[96px] opacity-40 sm:opacity-50 md:opacity-60 lg:opacity-70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-12 animate-fade-in">
          My Portfolio Projects
        </h1>
        <SectionTitle>
          <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 text-transparent bg-clip-text">
            Featured Projects
          </span>
        </SectionTitle>

        <p className="text-slate-300 text-center max-w-3xl mx-auto mb-12 leading-relaxed px-4">
          Here are some of my recent projects that showcase my skills in
          frontend development, UI/UX design, and full-stack capabilities.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 px-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-primary-500 text-white shadow-lg"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 px-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-2xl bg-slate-800 border border-slate-700 overflow-hidden hover:border-primary-500 transition-colors"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-slate-900">
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-10">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-800 text-white hover:bg-primary-500 transition-colors"
                    aria-label="View Live Demo"
                  >
                    <HiArrowTopRightOnSquare className="w-6 h-6" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-slate-800 text-white hover:bg-primary-500 transition-colors"
                    aria-label="View Source Code"
                  >
                    <HiCodeBracket className="w-6 h-6" />
                  </a>
                </div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";
                  }}
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-sm bg-slate-700 text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/hitarthsh"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-white border border-slate-700 hover:bg-slate-700 transition-all group"
          >
            View More Projects
            <HiArrowTopRightOnSquare className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
