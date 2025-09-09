// src/routes/about.tsx
import { motion } from "framer-motion";
export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-third text-primary pt-10 pb-10 px-6"
    >
      {/* Skills Section */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mx-auto mb-12 text-primary">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
        {[
          { name: "JavaScript", logo: "/icons/js.svg" },
          { name: "Python", logo: "/icons/py.svg" },
          { name: "HTML", logo: "/icons/html.svg" },
          { name: "CSS", logo: "/icons/css.svg" },
          { name: "SQL", logo: "/icons/sql.svg" },
          { name: "React", logo: "/icons/react.svg" },
          { name: "Django", logo: "/icons/dj.svg" },
          { name: "Node.js", logo: "/icons/nodejs.svg" },
          { name: "Express", logo: "/icons/express.svg" },
          { name: "Git & GitHub", logo: "/icons/git.svg" },
          { name: "Figma", logo: "/icons/figma.svg" },
          { name: "Java", logo: "/icons/java.svg" },
        ].map((skill, index) => (
          <motion.div
            /* spring animation */
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 10,
            }}
            className="group bg-[#e7e7e7] hover:bg-[#a8e7f5] transition-colors duration-300 p-4 rounded-xl border border-[#000000] shadow-md flex flex-col items-center text-center"
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-12 h-12 mb-3 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-mono text-sm">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
