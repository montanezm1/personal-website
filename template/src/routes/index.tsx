import { createFileRoute } from '@tanstack/react-router'
import { Typewriter } from 'react-simple-typewriter'
import AboutSection from '../routes/about'
import ProjectsSection from '../routes/project'
import ExperienceSection from '../routes/experience'

export const Route = createFileRoute('/')({
  component: RouteComponentMainPage,
})

function RouteComponentMainPage() {
  return (
    <div>
      {/* Landing Page Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center px-6 pt-0"
      >
        <div className="-translate-y-12">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight">
            Hi, I'm{" "}
            <span className="text-[#a3747e]">
              <Typewriter
                words={['Your Name', 'a CodeCollab Dev', 'a Designer', 'a Developer', 'a Student']}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </span>
          </h1>
          <p className="text-lg text-[#2d2d2d] max-w-xl">
            Welcome to my personal portfolio built with CodeCollab. Explore my work and connect with me.
          </p>
        </div>

        {/* Arrow positioned absolutely at the bottom */}
        <a
          href="#about"
          className="absolute bottom-10 animate-bounce text-3xl text-[#a3747e]"
        >
          ↓
        </a>
      </section>

      {/* About Section */}
      <AboutSection />
      
      {/* Experience Section */}
      <ExperienceSection />

      {/* Projects Section */}
      <ProjectsSection />
    </div>
  );
}
