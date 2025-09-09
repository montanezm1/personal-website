import { createFileRoute } from "@tanstack/react-router";
import { Typewriter } from "react-simple-typewriter";
import SkillsSection from "./skills";
import ProjectsSection from "../routes/project";
import ExperienceSection from "../routes/experience";
import BubbleBackground from "../bubblebackground";
import { motion } from "framer-motion";


export const Route = createFileRoute("/")({
  component: RouteComponentMainPage,
});

function RouteComponentMainPage() {
  return (
    <div className="relative overflow-hidden">


      {/* Landing Page Section */}
      <section
        id="home"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative z-10"
      >
        {/* Bubble Background */}
        <BubbleBackground />
        <motion.div
          className="-translate-y-12"
          /* appearance animation */
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            Hi, I'm{" "}
            <span className="text-third">
              <Typewriter
                words={[
                  "Michael Montanez",
                  "a Dev",
                  "a Designer",
                  "a Developer",
                  "a Student",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="text-lg text-primary max-w-xl font-mono">
            Welcome to my personal portfolio. Explore my
            work and feel free to connect with me.
          </p>
        </motion.div>

        {/* Arrow */}
        <div className="mt-24">
          <a href="#experience" className="animate-bounce text-3xl text-third">
            ↓
          </a>
        </div>
      </section>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Skills Section */}
      <SkillsSection />

      {/* Projects Section */}
      <ProjectsSection />
    </div>
  );
}
