import { motion } from "framer-motion";
import assets from "../assets/UserProfile.JPG";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 bg-[#e9f1ee] relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#2f6f63]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2f6f63]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:w-1/2 mb-12 md:mb-0"
        >
          <div className="inline-block px-4 py-1.5 bg-[#2f6f63]/10 border border-[#2f6f63]/30 rounded-full mb-6">
            <span className="text-[#2f6f63] text-sm font-medium">
              Available for work
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight text-slate-900">
            Hi, I am{" "}
            <span className="text-[#2f6f63]">Amit Singh Negi</span>
          </h1>
          <h2 className="typewriter text-2xl md:text-3xl font-semibold mb-6 text-slate-600">
            Full Stack Developer
          </h2>
          <p className="text-slate-500 text-lg mb-10 leading-relaxed max-w-md">
            I create stunning web experiences with modern technologies and
            innovative design.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-[#2f6f63] hover:bg-[#234f46] text-white rounded-xl font-semibold transition-all duration-200 active:scale-95 shadow-lg shadow-[#2f6f63]/20"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-[#2f6f63] text-[#2f6f63] hover:bg-[#2f6f63] hover:text-white rounded-xl font-semibold transition-all duration-200 active:scale-95"
            >
              Contact Me
            </a>
          </div>
          {/* Stats */}
          <div className="flex gap-8 mt-12">
            <div>
              <p className="text-2xl font-bold text-slate-900">3+</p>
              <p className="text-slate-500 text-sm">Projects Done</p>
            </div>
            <div className="w-px bg-slate-300" />
            <div>
              <p className="text-2xl font-bold text-slate-900">1+</p>
              <p className="text-slate-500 text-sm">Years Learning</p>
            </div>
            <div className="w-px bg-slate-300" />
            <div>
              <p className="text-2xl font-bold text-slate-900">10+</p>
              <p className="text-slate-500 text-sm">Technologies</p>
            </div>
          </div>
        </motion.div>

        {/* Right - Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="md:w-1/2 flex justify-center"
        >
          <div className="relative">
            {/* Spinning ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#2f6f63] to-[#7fae9f] opacity-20 blur-xl animate-pulse" />
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#2f6f63] to-[#7fae9f] opacity-30" />
            {/* Floating image */}
            <motion.img
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover object-[center_20%] z-10 border-4 border-[#e9f1ee]"
              src={assets}
              alt="Amit Singh Negi"
            />
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -bottom-4 -left-4 bg-white border border-slate-200 rounded-2xl px-4 py-2 shadow-xl z-20"
            >
              <p className="text-xs text-slate-500">Tech Stack</p>
              <p className="text-[#2f6f63] font-bold text-sm">React & Node.js</p>
            </motion.div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -top-4 -right-4 bg-white border border-slate-200 rounded-2xl px-4 py-2 shadow-xl z-20"
            >
              <p className="text-xs text-slate-500">Status</p>
              <p className="text-[#2f6f63] font-bold text-sm">Open to Work</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
