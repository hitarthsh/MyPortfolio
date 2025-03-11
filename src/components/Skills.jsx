import {
  CodeBracketIcon,
  PaintBrushIcon,
  CommandLineIcon,
  WindowIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: CodeBracketIcon,
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "JavaScript/ES6+", level: 90 },
        { name: "TypeScript", level: 80 },
        { name: "HTML5/CSS3", level: 95 },
      ],
    },
    {
      title: "UI Frameworks & Tools",
      icon: PaintBrushIcon,
      skills: [
        { name: "Tailwind CSS", level: 95 },
        { name: "Material-UI", level: 85 },
        { name: "Styled Components", level: 85 },
        { name: "Framer Motion", level: 80 },
        { name: "Figma", level: 75 },
      ],
    },
    {
      title: "Backend & Tools",
      icon: CommandLineIcon,
      skills: [
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "MongoDB", level: 70 },
        { name: "RESTful APIs", level: 85 },
        { name: "Git/GitHub", level: 90 },
      ],
    },
    {
      title: "CMS & E-commerce",
      icon: WindowIcon,
      skills: [
        { name: "WordPress", level: 90 },
        { name: "WooCommerce", level: 85 },
        { name: "Shopify", level: 80 },
        { name: "Webflow", level: 75 },
        { name: "SEO Optimization", level: 85 },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-slate-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute hidden sm:block">
        <div className="absolute top-20 -left-16 sm:-left-20 md:-left-24 lg:-left-32 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-primary-500/10 rounded-full blur-[50px] sm:blur-[64px] md:blur-[80px] lg:blur-[96px] opacity-40 sm:opacity-50 md:opacity-60 lg:opacity-70" />
        <div className="absolute bottom-20 -right-16 sm:-right-20 md:-right-24 lg:-right-32 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-secondary-500/10 rounded-full blur-[50px] sm:blur-[64px] md:blur-[80px] lg:blur-[96px] opacity-40 sm:opacity-50 md:opacity-60 lg:opacity-70" />
      </div>

      <div className="container relative z-10">
        <SectionTitle>
          <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 text-transparent bg-clip-text">
            Technical Skills
          </span>
        </SectionTitle>

        <p className="text-slate-400 text-center max-w-3xl mx-auto mb-16 leading-relaxed">
          Specializing in modern web technologies and frameworks, I bring ideas
          to life through clean code and intuitive user interfaces. Here's my
          technical toolkit:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-primary-500/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <category.icon className="w-6 h-6 text-primary-400" />
                <h3 className="text-lg font-semibold text-slate-200">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-slate-400">
                        {skill.name}
                      </span>
                      <span className="text-sm font-medium text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-700/50 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 transition-all duration-500 group-hover:from-primary-400 group-hover:to-secondary-400"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-slate-200 mb-8">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "React.js Advanced Concepts",
                issuer: "Meta",
                date: "2023",
              },
              {
                name: "Frontend Web Development",
                issuer: "freeCodeCamp",
                date: "2023",
              },
              {
                name: "Modern JavaScript",
                issuer: "Udemy",
                date: "2022",
              },
            ].map((cert, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-slate-800/30 border border-slate-700/50 hover:border-primary-500/50 transition-colors"
              >
                <h4 className="text-lg font-semibold text-slate-200 mb-2">
                  {cert.name}
                </h4>
                <p className="text-primary-400 font-medium">{cert.issuer}</p>
                <p className="text-sm text-slate-400 mt-1">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
