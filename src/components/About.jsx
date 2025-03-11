import {
  AcademicCapIcon,
  BriefcaseIcon,
  UserIcon,
  LightBulbIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "./SectionTitle";

export default function About() {
  const education = [
    {
      degree: "Bachelor of Technology - B.Tech",
      institution: "Silver Oak University",
      period: "Sep 2022 - Jun 2025",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "C. U. Shah University",
      period: "Aug 2019 - May 2022",
    },
  ];

  const achievements = [
    "Developed sleek, responsive web applications with modern technologies",
    "Optimized website performance, reducing bounce rates by 30%",
    "Implemented effective digital marketing strategies for lead generation",
    "Customized WordPress and WooCommerce solutions for enhanced functionality",
    "Troubleshooting complex technical issues with 50% improved resolution time",
  ];

  return (
    <section
      id="about"
      className="py-16 sm:py-20 bg-slate-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute hidden sm:block">
        <div className="absolute top-20 -left-16 sm:-left-20 md:-left-24 lg:-left-32 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-primary-500/10 rounded-full blur-[50px] sm:blur-[64px] md:blur-[80px] lg:blur-[96px] opacity-40 sm:opacity-50 md:opacity-60 lg:opacity-70" />
        <div className="absolute bottom-20 -right-16 sm:-right-20 md:-right-24 lg:-right-32 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-secondary-500/10 rounded-full blur-[50px] sm:blur-[64px] md:blur-[80px] lg:blur-[96px] opacity-40 sm:opacity-50 md:opacity-60 lg:opacity-70" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle>
          <span className="bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 text-transparent bg-clip-text">
            About Me
          </span>
        </SectionTitle>

        {/* Professional Bio */}
        <div className="max-w-3xl mx-auto text-left sm:text-center mb-12 sm:mb-16">
          <p className="text-base sm:text-lg text-white leading-relaxed mb-6">
            I'm a passionate Frontend Developer with a keen eye for creating
            elegant, user-centric web solutions. My journey in web development
            started with a curiosity for building beautiful interfaces and has
            evolved into a professional pursuit of crafting high-performance web
            applications.
          </p>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            With expertise in React.js, Next.js, and modern frontend
            technologies, I specialize in translating complex requirements into
            intuitive user experiences. I'm constantly learning and adapting to
            new technologies to deliver cutting-edge solutions.
          </p>
        </div>

        {/* Key Achievements & Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16">
          {/* Key Achievements */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/80 border border-slate-700 h-full">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <CheckCircleIcon className="w-7 h-7 text-primary-400 flex-shrink-0" />
              Key Achievements
            </h3>
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-primary-400 mt-1.5 text-lg flex-shrink-0">
                    •
                  </span>
                  <span className="text-slate-300 text-base sm:text-lg">
                    {achievement}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Education */}
          <div className="p-6 sm:p-8 rounded-2xl bg-slate-800/80 border border-slate-700 h-full">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-3">
              <AcademicCapIcon className="w-7 h-7 text-primary-400 flex-shrink-0" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="border-l-2 border-primary-500/50 pl-4"
                >
                  <h4 className="text-lg font-medium text-white">
                    {edu.degree}
                  </h4>
                  <p className="text-primary-400 mt-1 font-medium">
                    {edu.institution}
                  </p>
                  <p className="text-slate-300 mt-1 text-sm">{edu.period}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Overview Button */}
        <div className="text-center">
          <a
            href="#skills"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 text-white border border-slate-700 hover:bg-slate-700 transition-all group"
          >
            View My Skills
            <svg
              className="w-6 h-6 group-hover:translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
