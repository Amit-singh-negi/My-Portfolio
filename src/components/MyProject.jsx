import { motion } from "framer-motion";

const projects = [
  {
    title: "YouTube Clone",
    description: "A fully functional YouTube clone with video listing, search, channel pages, and responsive design. Built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "YouTube API", "React Router"],
    icon: "▶️",
    color: "from-[#2f6f63] to-[#7fae9f]",
    border: "hover:border-[#2f6f63]/50",
    github: "https://github.com/Amit-singh-negi/Youtube/tree/main/Youtube/src/youtube",
    live: "https://youtube-git-main-amit-singh-negi-s-projects.vercel.app",
  },
  {
    title: "Weather App",
    description: "A real-time weather application showing temperature, humidity, wind speed and forecasts for any city using live weather API.",
    tech: ["React", "Vite", "OpenWeather API"],
    icon: "🌤️",
    color: "from-[#2f6f63] to-[#7fae9f]",
    border: "hover:border-[#2f6f63]/50",
    github: "https://github.com/Amit-singh-negi/WeatherApi/blob/main/src/Component/WeatherApi.jsx",
    live: "https://weather-1ili9rl8j-amit-singh-negi-s-projects.vercel.app",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio website showcasing my projects, skills, and experience. Smooth animations and fully responsive design.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    icon: "🚀",
    color: "from-[#2f6f63] to-[#7fae9f]",
    border: "hover:border-[#2f6f63]/50",
    github: "https://github.com/amitneg",
    live: "#",
  },
  {
    title: "E-commerce Website",
    description: "A full-featured e-commerce storefront with product listings, cart, and checkout flow. Built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    icon: "🛒",
    color: "from-[#2f6f63] to-[#7fae9f]",
    border: "hover:border-[#2f6f63]/50",
    github: "https://github.com/amitneg",
    live: "#",
  },
];

const MyProject = () => {
  return (
    <section
      id="projects"
      className="min-h-screen bg-[#e9f1ee] py-24 px-6 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#2f6f63]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-[#2f6f63]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <p className="text-[#2f6f63] text-sm font-semibold uppercase tracking-wide mb-2">
            What I've built
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            My <span className="text-[#2f6f63]">Projects</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#2f6f63] to-[#7fae9f] rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`bg-white border border-slate-200 ${project.border} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col`}
            >
              <div className="mb-4">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl mb-4 shadow-lg`}>
                  {project.icon}
                </div>
                <h3 className="text-slate-900 text-xl font-bold">{project.title}</h3>
              </div>

              <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-slate-100 border border-slate-200 text-slate-600 text-xs rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 text-sm rounded-xl transition"
                >
                  🐙 GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex-1 text-center py-2 bg-gradient-to-r ${project.color} text-white text-sm rounded-xl font-medium hover:opacity-90 transition`}
                >
                  🔗 Live
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-slate-500 text-sm mb-4">Want to see more?</p>

          <a
            href="https://github.com/Amit-singh-negi"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-3 border border-[#2f6f63] text-[#2f6f63] hover:bg-[#2f6f63] hover:text-white rounded-xl font-medium transition-all duration-200"
          >
            View All on GitHub →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MyProject;
