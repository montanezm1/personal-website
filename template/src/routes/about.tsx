// src/routes/about.tsx

export default function AboutSection() {
  return (
    <section id="about" className="bg-white text-[black] min-h-screen px-6 py-16">
      <h2 className="text-5xl font-semibold text-center mb-12">About Me</h2>
      <div className="flex flex-col md:flex-row items-center gap-8 max-w-6xl mx-auto">
        {/* Bio box - padding to left*/}
        <div className="bg-[#f5f1f1] p-6 md:p-8 rounded-xl border border-[#000000] max-w-xl text-left font-mono text-sm shadow-md ml-18">
          <p>
            I am Firstname Lastname, a student at (University).
            I am originally from (Hometown). Growing up there inspired me to pursue
            (Major) despite... I'm passionate about building tools that solve real problems...
          </p>
          <p className="mt-4">
            Feel free to reach out for anything...
          </p>
        </div>

        {/* Image (personal image or can be removed) */}
        <img
          src="/codeLogo.png"
          alt="profile"
          className="w-72 h-auto rounded-md shadow-md"
        />
      </div>

      {/* Skills Section */}
      <h3 className="text-5xl font-semibold text-center mb-12 mt-20">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 text-[#000000] font-mono text-sm">
        {/* Languages */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-center">Languages</h4>
          <ul className="space-y-1 text-center">
            <li>JavaScript</li>
            <li>Python</li>
            <li>C</li>
            <li>C++</li>
            <li>HTML & CSS</li>
            <li>SQL</li>
          </ul>
        </div>

        {/* Frameworks */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-center">Frameworks</h4>
          <ul className="space-y-1 text-center">
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Flask</li>
            <li>Node</li>
            <li>Express</li>
          </ul>
        </div>

        {/* Tools */}
        <div>
          <h4 className="text-2xl font-semibold mb-4 text-center">Tools</h4>
          <ul className="space-y-1 text-center">
            <li>Git & GitHub</li>
            <li>Figma</li>
            <li>Postman</li>
          </ul>
        </div>
      </div>

      {/* Fun Facts */}
      <h3 className="text-4xl italic font-semibold text-center mt-20 mb-12">Fun Facts</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-[#f5f1f1] p-6 rounded-xl border border-[#000000] shadow-md">
          <div className="text-xl mb-2">I really enjoy...</div>
          <p className="font-mono text-sm">
            Hiking! It's one of the best ways to...
          </p>
        </div>

        <div className="bg-[#f5f1f1] p-6 rounded-xl border border-[#000000] shadow-md">
          <div className="text-xl mb-2">In my free time...</div>
          <p className="font-mono text-sm">
            I like to...</p>
        </div>

        <div className="bg-[#f5f1f1] p-6 rounded-xl border border-[#000000] shadow-md">
          <div className="text-xl mb-2">I love watching...</div>
          <p className="font-mono text-sm">
            This show is so...
          </p>
        </div>
      </div>
    </section>
  );
}
