import { createFileRoute } from '@tanstack/react-router'
import { Typewriter } from 'react-simple-typewriter'

export const Route = createFileRoute('/')({
  component: RouteComponentMainPage,
})

function RouteComponentMainPage() {
  return (
    <section className="flex flex-col justify-center items-center text-center py-32 px-6">
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
    </section>
  );
}
