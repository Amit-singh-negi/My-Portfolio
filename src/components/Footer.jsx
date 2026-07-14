import { motion } from "framer-motion";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];
  const socialLinks = [
    { label: "GitHub", href: "https://github.com/Amit-singh-negi", icon: "🐙" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/amit-singh-negi-46219a40b", icon: "💼" },
    { label: "Email", href: "mailto:amitn7906@gmail.com", icon: "📧" },
  ];
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#1b3a3a] border-t border-[#234f46] py-12 px-6"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-[#7fae9f] rounded-full animate-pulse" />
              <span className="text-xl font-bold text-white">
                Amit <span className="text-[#7fae9f]">Singh Negi</span>
              </span>
            </a>
            <p className="text-slate-300 text-sm leading-relaxed">
              Full Stack Developer passionate about building
              stunning web experiences with modern technologies.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-widest text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-[#7fae9f] transition text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-widest text-xs">
              Connect
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-[#7fae9f] transition text-sm"
                  >
                    <span>{link.icon}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="h-px bg-[#234f46] mb-6" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} Amit Singh Negi. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm">
            Built with <span className="text-[#7fae9f]">React</span> &{" "}
            <span className="text-[#7fae9f]">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};
export default Footer;
