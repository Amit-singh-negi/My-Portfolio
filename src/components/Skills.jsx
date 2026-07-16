import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Frontend",
    color: "from-[#2f6f63] to-[#7fae9f]",
    skills: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS3", level: 88, icon: "🎨" },
      { name: "JavaScript", level: 85, icon: "⚡" },
      { name: "Tailwind CSS", level: 90, icon: "💨" },
    ],
  },
  {
    category: "State & Tools",
    color: "from-[#2f6f63] to-[#7fae9f]",
    skills: [
      { name: "Redux", level: 40, icon: "🔄" },
      { name: "Git & GitHub", level: 85, icon: "🐙" },
      { name: "Vite", level: 82, icon: "⚡" },
      { name: "REST APIs", level: 88, icon: "🔗" },
      { name: "Figma", level: 70, icon: "🖌️" },
    ],
  },
  {
    category: "Backend",
    color: "from-[#2f6f63] to-[#7fae9f]",
    skills: [
      { name: "Node.js", level: 78, icon: "🟢" },
      { name: "Express.js", level: 75, icon: "🚂" },
      { name: "MongoDB", level: 72, icon: "🍃" },
    ],
  },
];

const familiars = [
  "Postman",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen bg-[#e9f1ee] py-24 px-6 relative overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2f6f63]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2f6f63]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-[#2f6f63] text-sm font-semibold tracking-widest uppercase mb-3">
            What I work with
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            My <span className="text-[#2f6f63]">Skills</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#2f6f63] to-[#7fae9f] rounded-full" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white border border-slate-200 hover:border-[#2f6f63]/40 rounded-2xl p-6 shadow-xl transition-all duration-300"
            >
              {/* Category badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${cat.color} mb-6`}>
                {cat.category}
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex items-center justify-between mb-1">
                      <div className="flex items-center gap-2">
                        <span>{skill.icon}</span>
                        <span className="text-slate-600 text-sm font-medium">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-slate-400 text-xs">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${cat.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-sm mb-6 uppercase tracking-widest">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {familiars.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 bg-white border border-slate-200 hover:border-[#2f6f63] hover:text-[#2f6f63] text-slate-500 text-sm rounded-full transition-all duration-200 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
