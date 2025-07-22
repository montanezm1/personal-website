// src/routes/project.tsx

export default function ProjectsSection() {
  const projects = [
    { id: 1, title: 'Project1', description: 'description1', image: '/codeLogo.png', link: 'https://www.instagram.com/umasscodecollab/' },
    { id: 2, title: 'Project2', description: 'description2', image: '/codeLogo.png', link: 'https://www.instagram.com/umasscodecollab/' },
    { id: 3, title: 'Project3', description: 'description3', image: '/codeLogo.png', link: 'https://www.instagram.com/umasscodecollab/' },
    { id: 4, title: 'Project4', description: 'description4', image: '/codeLogo.png', link: 'https://www.instagram.com/umasscodecollab/' },
  ];


  return (
    <div id="projects" className="bg-[transparent] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mx-auto mb-12 text-gray-900">Personal Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#f9fafb] p-4 rounded-2xl shadow-sm hover:shadow-md"
          >
            <a href={project.link} target='_blank'>
              <div className="w-full aspect-video overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
              <p className="text-gray-600 text-sm">{project.description}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
