import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

const ProjectsSection = () => {
  const projects = [
    {
      title: "SplitAI- Personal Finance Tracker",
      description:
        "Split AI is a full-stack Splitwise-style application that leverages modern web technologies to make shared expense tracking seamless, smart, and automated.",
      image: "/SplitAI.png",
      technologies: [
        "Next.js", "React", "Tailwind CSS", "Auth.js", "MongoDB", "Clerk",
      ],
      liveUrl: "https://split-ai-theta.vercel.app/",
      githubUrl: "https://github.com/Ashutoshgola/SplitAI",
      featured: true,
    },
    {
      title: "Code Collab",
      description:
        "CodeCollab is a real-time collaborative coding environment enhanced with intelligent AI assistance. It empowers developers to code together in a shared workspace, chat seamlessly within the platform, and leverage AI for context-aware code generation, debugging, and suggestions.",
      image:
        "/code-collab.png",
      technologies: [
        "React.js", "Node.js", "Express", "Socket.IO", "OpenAI API", "Supabase", "TypeScript",
      ],
      liveUrl: "https://codecollab-ai.vercel.app/login",
      githubUrl: "https://github.com/Ashutoshgola/codecollab-ai",
      featured: false,
    },

    {
      title: "Real Time Tracker",
      description:
        "A real-time location tracking app using Node.js, Socket.io, and Leaflet.js to broadcast user locations via WebSocket.",
      image:
        "/tracker.png",
      technologies: [
        "Node.js", "Socket.io", "Leaflet.js", "WebSocket", "JavaScript",
      ],
      liveUrl: "https://realtime-tracker-3a8n.onrender.com/",
      githubUrl: "https://github.com/Ashutoshgola/RealTime-Tracker",
      featured: false,
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for creating exceptional digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in ${
                project.featured ? "lg:col-span-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${project.featured ? "lg:flex" : ""}`}>
                <div className={`${project.featured ? "lg:w-1/2" : ""}`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover"
                    width={700}        
                    height={256}       
                    priority={project.featured} 
                  />
                </div>
                <div
                  className={`p-6 ${
                    project.featured
                      ? "lg:w-1/2 lg:flex lg:flex-col lg:justify-center"
                      : ""
                  }`}
                >
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 flex-wrap">
                    {project.liveUrl !== "#" && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer">
                        <Button variant="default" size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                    <a href={project.githubUrl} target="_blank" rel="noreferrer">
                      <Button variant="outline" size="sm">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
