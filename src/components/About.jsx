import { motion } from "framer-motion";
import assets from "../assets/Profile .JPG";

const features = [
  {
    icon: "💡",
    title: "Innovative",
    desc: "I love creating unique solutions to complex problems with cutting-edge technologies.",
  },
  {
    icon: "🎨",
    title: "Design Oriented",
    desc: "Beautiful design and user experience are at the heart of everything I create.",
  },
  {
    icon: "⚡",
    title: "Clean Code",
    desc: "I write maintainable, efficient code following best practices.",
  },
  {
    icon: "🚀",
    title: "Fast Learner",
    desc: "I quickly adapt to new technologies and frameworks to stay ahead.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-[#e9f1ee] relative overflow-hidden"
    >

      <div className="absolute top-0 right-1/4 w-76 h-76 bg-[#2f6f63]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-76 h-76 bg-[#2f6f63]/10 rounded-full blur-3xl pointer-events-none" />

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
            Get to know me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
            About <span className="text-[#2f6f63]">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-[#2f6f63] to-[#7fae9f] rounded-full" />
        </motion.div>


        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#2f6f63] to-[#7fae9f] rounded-3xl blur-lg opacity-20" />
              <img
                className="relative rounded-3xl w-full h-96 object-cover object-[center_20%] shadow-2xl"
                src={assets}
                alt="Amit Singh Negi"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-white border border-slate-200 rounded-2xl px-5 py-3 shadow-xl">
                <p className="text-[#2f6f63] text-xs font-semibold uppercase tracking-widest">Full Stack</p>
                <p className="text-slate-900 font-bold text-lg">Developer</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">My Journey</h3>
            <p className="text-slate-500 leading-relaxed mb-4">
              My journey in web development began with a curiosity about how
              websites work. Over time, I learned HTML, CSS, JavaScript, React,
              Node.js, Express.js, and MongoDB, building projects that
              strengthened my skills.
            </p>
            <p className="text-slate-500 leading-relaxed mb-10">
              I am passionate about creating responsive and user-friendly
              applications while continuously learning and improving as a
              Full Stack Developer. I enjoy transforming ideas into functional
              and visually appealing web applications.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="bg-white border border-slate-200 hover:border-[#2f6f63]/50 rounded-2xl p-5 shadow-lg transition-all duration-300 group"
                >
                  <span className="text-2xl mb-3 block">{f.icon}</span>
                  <h4 className="text-slate-900 font-bold text-sm mb-1 group-hover:text-[#2f6f63] transition">
                    {f.title}
                  </h4>
                  <p className="text-slate-500 text-xs leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
