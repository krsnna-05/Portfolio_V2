import { Code2Icon, Play, Github } from "lucide-react";
import { motion } from "motion/react";
import GradualBlur from "../GradualBlur";

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const projects = [
    {
      title: "Project Name",
      description:
        "Brief description of what this project does and the problem it solves.",
      images: [
        "/project2-1.jpg",
        "/project2-2.jpg",
        "/project2-3.jpg",
        "/project2-4.jpg",
      ],
      technologies: ["React", "Node.js", "MongoDB"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Project Name",
      description:
        "Brief description of what this project does and the problem it solves.",
      images: [
        "/project2-1.jpg",
        "/project2-2.jpg",
        "/project2-3.jpg",
        "/project2-4.jpg",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "#",
    },
    {
      title: "Project Name",
      description:
        "Brief description of what this project does and the problem it solves.",
      images: [
        "/project3-1.jpg",
        "/project3-2.jpg",
        "/project3-3.jpg",
        "/project3-4.jpg",
      ],
      technologies: ["Express", "PostgreSQL", "AWS"],
      demoLink: "#",
      githubLink: "#",
    },
  ];

  return (
    <motion.div
      className=" container h-full max-w-6xl p-5 pb-20 "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Image */}
      <motion.img
        src="/projects.jpg"
        alt="Projects"
        className=" w-full aspect-4/1 rounded-xl mb-8 object-cover border border-white/20"
        variants={itemVariants}
      />

      {/* Title */}
      <motion.div className="mb-12" variants={itemVariants}>
        <p className=" text-3xl md:text-5xl flex items-center gap-3 font-light mb-8">
          <Code2Icon size={30} className=" md:hidden" />
          <Code2Icon size={48} className=" hidden md:inline" />
          <span>Projects</span>
        </p>
        <p className="text-gray-400 font-light text-base md:text-lg">
          A collection of projects I've built, showcasing my full-stack
          development skills and problem-solving approach.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div className="space-y-12 mb-12" variants={itemVariants}>
        {projects.map((project, idx) => (
          <motion.div key={idx} className="group" variants={itemVariants}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              {/* Images */}
              <div className={`${idx % 2 === 1 ? "md:order-2" : ""}`}>
                {/* Big Image */}
                <div className="relative overflow-hidden rounded-xl border border-white/10 hover:border-white/20 transition-colors duration-300 aspect-video cursor-pointer mb-3">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onClick={() => {
                      // Implement modal/lightbox here later
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Multiple Smaller Images */}
                {project.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-2">
                    {project.images.slice(1).map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="relative overflow-hidden rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300 aspect-square cursor-pointer"
                        onClick={() => {
                          // Implement modal/lightbox here later
                        }}
                      >
                        <img
                          src={img}
                          alt={`${project.title} ${imgIdx + 2}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                          <Play
                            size={20}
                            className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={`${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-300 font-light leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-sm text-gray-400 font-light mb-2">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-white/10 rounded-full px-3 py-1 text-gray-200 font-light hover:border-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.demoLink}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-light hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Play size={16} />
                    Demo Video
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white rounded-lg font-light hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className=" mt-10"></div>

      <GradualBlur />
    </motion.div>
  );
};

export default Projects;
