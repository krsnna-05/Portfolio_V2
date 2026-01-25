import { Code2Icon, Play, Github, Globe } from "lucide-react";
import { motion } from "motion/react";
import GradualBlur from "../GradualBlur";
import useImgStore from "../../../imgStore";

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
  } as const;

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
  } as const;

  const { setImgURL, setShowImgDialog } = useImgStore();

  const projects = [
    {
      title: "FastForms",
      description:
        "FastForm is an AI-powered tool that lets you create Google Forms using natural language prompts, removing the need for manual setup and repetitive clicks.",
      images: [
        "/fastforms/home.png",
        "/fastforms/dashboard.png",
        "/fastforms/form.png",
      ],
      technologies: [
        "Next.JS",
        "ShadCN UI",
        "AI SDK",
        "Appwrite",
        "Gemini API",
        "Google Forms API",
        "Ollama",
      ],
      demoLink: "#",
      githubLink: "https://github.com/krsnna-05/FastForms",
      liveLink: "#",
    },
    {
      title: "Feedback Collection and Analysis System : GHRCEM CS&DS",
      description:
        "Feedback Collection System is a web-based platform used by a college department to create feedback forms in minutes, collect responses, visualize insights through charts, and export reports as PDFs.",
      images: [
        "/csds_feedback/csds_dashboard.jpg",
        "/csds_feedback/csds_analytics.jpg",
        "/csds_feedback/csds_users.jpg",
      ],
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "ShadCN UI",
        "Appwrite",
        "Vercel",
      ],
      demoLink: "#",
      githubLink: "https://github.com/krsnna-05/ghrcem-csds-feedback-platform",
      liveLink: "https://ghrcem-csds-feedback-platform.vercel.app/app-info",
    },
    {
      title: "KrishiSahayak",
      description:
        "KrishiSahayak is an AI-based agricultural assistant that recommends suitable crops based on location, soil, and weather, and answers farmer queries through a chatbot using both cloud and local AI models.",
      images: ["/krishisahayak/home.png", "/krishisahayak/chat.png"],
      technologies: [
        "React",
        "TypeScript",
        "Ollama",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      demoLink: "#",
      githubLink: "https://github.com/krsnna-05/KrishiSahayak",
      liveLink: "#",
    },
    {
      title: "TypeStrike",
      description:
        "TypeStrike is a real-time typing game that lets users test their typing speed in single-player mode, track past results, and compete in multiplayer rooms with up to four players.",
      images: ["/typestrike/multiplayer.png", "/typestrike/singleplayer.png"],
      technologies: [
        "React",
        "TypeScript",
        "Socket.IO",
        "Node.js",
        "Express",
        "MongoDB",
        "GCP",
        "Nginx",
      ],
      demoLink: "#",
      githubLink: "https://github.com/krsnna-05/TypeStrike",
      liveLink: "https://www.typestrike.tech",
    },
    {
      title: "ForgeUpload",
      description:
        "ForgeUpload is a file upload system built to understand secure file handling, storage workflows, and backend validation, focusing on efficient and reliable upload management.",
      images: ["forgeupload/dashboard.png", "forgeupload/upload.png"],
      technologies: [
        "React",
        "TypeScript",
        "ShadCN UI",
        "Node.js",
        "Express",
        "Appwrite",
        "Express",
      ],
      demoLink: "#",
      githubLink: "https://github.com/krsnna-05/ForgeUpload",
      liveLink: "#",
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
        className="w-full aspect-4/1 rounded-xl mb-8 object-cover border border-white/20 hidden md:block"
        style={{ objectPosition: "0px -260px" }}
        variants={itemVariants}
      />

      <motion.img
        src="/projects.jpg"
        alt="Projects"
        className="w-full aspect-video md:aspect-4/1 rounded-xl mb-8 object-cover border border-white/20 md:hidden"
        style={{ objectPosition: "0px 0px" }}
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
                      setImgURL(project.images[0]);
                      setShowImgDialog(true);
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" />
                </div>

                {/* Multiple Smaller Images */}
                {project.images.length > 1 && (
                  <div className="grid grid-cols-3 gap-2">
                    {project.images.slice(1).map((img, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="relative overflow-hidden rounded-lg border border-white/10 hover:border-white/20 transition-colors duration-300 aspect-square cursor-pointer"
                        onClick={() => {
                          setImgURL(img);
                          setShowImgDialog(true);
                        }}
                      >
                        <img
                          src={img}
                          alt={`${project.title} ${imgIdx + 2}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
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
                <div className="flex gap-3 flex-wrap">
                  {project.liveLink !== "#" && (
                    <motion.a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg font-light hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Globe size={16} />
                      Live
                    </motion.a>
                  )}

                  {project.demoLink !== "#" && (
                    <motion.a
                      href={project.demoLink}
                      className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg font-light hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play size={16} />
                      Demo Video
                    </motion.a>
                  )}

                  {project.githubLink !== "#" && (
                    <motion.a
                      href={project.githubLink}
                      className="flex items-center gap-2 px-4 py-2 border border-white/20 text-white rounded-lg font-light hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={16} />
                      Code
                    </motion.a>
                  )}
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
