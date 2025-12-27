import React from "react";
import { projects, category } from "../../data/project";
import Fadein from "../Animation/Fadein";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const Project = () => {
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filterProjects = (cat) => {
    setActiveCategory(cat);
    if (cat === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter((p) => p.category === cat));
    }
  };

  return (
    <section id="project" className="relative py-20 bg-black overflow-hidden">
      {/* Header */}
      <Fadein delay={100}>
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-semibold text-white mb-4">
            Project Showcases
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Explore a collection of projects I have built using different
            technologies.
          </p>
        </div>
      </Fadein>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {category.map((cat) => (
          <button
            key={cat}
            onClick={() => filterProjects(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              activeCategory === cat
                ? "bg-primary text-black"
                : "bg-white/10 text-white hover:bg-primary hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
        {filteredProjects.map((project, index) => (
          <Fadein key={project.id} delay={index * 100}>
            <div className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              {/* Project Image */}
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-105"
                />
              )}

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-white/60 text-sm">{project.description}</p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-full border bg-white/10 border-white/20 text-white transition-all duration-300 group-hover:bg-primary group-hover:text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Metrics (Optional) */}
                {project.metrics && (
                  <div className="mt-2">
                    <div className="text-xs text-white/60 mb-1">
                      {project.metrics.label}
                    </div>
                    <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary transition-all duration-1000 ease-out rounded-full"
                        style={{ width: `${project.metrics.value}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {/* GitHub Button */}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-full text-sm font-medium hover:bg-white/10 transition-colors mt-3"
                  >
                    <FiGithub className="w-4 h-4" /> View GitHub
                  </a>
                )}

                {/* Live Demo Button */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-black rounded-full text-sm font-medium hover:bg-white/10 transition-colors mt-3 ml-2"
                  >
                    <FiExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                )}
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 group-hover:to-primary/20 transition-all duration-300 pointer-events-none"></div>
            </div>
          </Fadein>
        ))}
      </div>
    </section>
  );
};

export default Project;
