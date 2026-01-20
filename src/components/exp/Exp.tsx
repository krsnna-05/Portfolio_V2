import { BriefcaseIcon, ArrowRight, Lightbulb, Zap } from "lucide-react";
import { motion } from "motion/react";
import GradualBlur from "../GradualBlur";

const Exp = () => {
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
  } as const;

  const experiences = [
    {
      company: "ACM GHRCEM",
      role: "Technical Lead",
      period: "July 2025 - Present",
      description:
        "Leading the technical initiatives and development projects for the college's premier technical club, fostering innovation and collaboration among student developers.",
      achievements: [
        "Spearhead technical workshops and coding bootcamps for club members",
        "Mentor students in full-stack development and best practices",
        "Organize and coordinate hackathons and technical competitions",
      ],
      technologies: [
        "React",
        "Node.js",
        "TypeScript",
        "Web Development",
        "Leadership",
      ],
      highlights: "Leadership • Mentorship • Community",
    },
    {
      company: "Blessin Care",
      role: "Developer Intern",
      period: "Jun 2025 - Sep 2025",
      description:
        "Contributed to developing and maintaining healthcare-focused web applications with emphasis on user experience and data security.",
      achievements: [
        "Built responsive UI components for patient management portal",
        "Developed API integrations for healthcare data processing",
        "Collaborated with cross-functional teams on feature implementation",
      ],
      technologies: ["React", "Node.js", "Express", "Healthcare Tech", "UI/UX"],
      highlights: "Problem Solving • Collaboration • Learning",
    },
  ];

  return (
    <motion.div
      className=" container h-full max-w-6xl p-5 "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Image */}
      <motion.img
        src="/exp.jpg"
        alt="Experience"
        className=" w-full aspect-4/1 rounded-xl mb-8 object-cover border border-white/20 hidden md:block"
        style={{ objectPosition: "0px -260px" }}
        variants={itemVariants}
      />

      <motion.img
        src="/exp.jpg"
        alt="Experience"
        className="w-full aspect-video md:aspect-4/1 rounded-xl mb-8 object-cover border border-white/20 md:hidden"
        style={{ objectPosition: "0px 0px" }}
        variants={itemVariants}
      />

      {/* Title */}
      <motion.p
        className=" text-3xl md:text-5xl flex items-center gap-3 font-light mb-8"
        variants={itemVariants}
      >
        <BriefcaseIcon size={30} className=" md:hidden" />
        <BriefcaseIcon size={48} className=" hidden md:inline" />
        <span>Experience</span>
      </motion.p>

      {/* Intro Section */}
      <motion.div className="mb-16" variants={itemVariants}>
        <div className="flex items-start gap-3 mb-4">
          <Zap size={20} className="text-blue-400 mt-1 shrink-0" />
          <div>
            <h3 className="text-xl font-light text-white mb-2">
              Professional Journey
            </h3>
            <p className="text-gray-300 font-light leading-relaxed">
              As a developer intern and technical leader, I'm passionate about
              building web applications and fostering a community of developers.
              Currently leading technical initiatives at ACM GHRCEM while
              continuously learning and growing my full-stack development
              skills.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div className="space-y-6 mb-16" variants={itemVariants}>
        {experiences.map((exp, _) => (
          <motion.div
            key={exp.company}
            className="group relative"
            variants={itemVariants}
          >
            {/* Card */}
            <div className="bg-linear-to-br from-white/5 to-white/2 backdrop-blur border border-white/10 rounded-xl p-6 md:ml-8 hover:border-white/20 transition-all duration-300 group-hover:bg-white/8">
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="flex-1">
                  <h4 className="text-lg md:text-xl font-light text-white mb-1">
                    {exp.role}
                  </h4>
                  <p className="text-sm text-blue-400 font-light">
                    {exp.company}
                  </p>
                </div>
                <span className="text-xs md:text-sm text-gray-400 font-light whitespace-nowrap bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 font-light text-sm md:text-base mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="mb-4 space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <div
                    key={i}
                    className="flex gap-3 items-start text-sm text-gray-300 font-light"
                  >
                    <ArrowRight
                      size={16}
                      className="text-green-400 mt-1 shrink-0"
                    />
                    <span>{achievement}</span>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-3">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-linear-to-r from-blue-500/20 to-purple-500/20 border border-white/10 rounded-full px-3 py-1 text-gray-200 font-light hover:border-white/20 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights */}
              <div className="flex items-center gap-2 text-xs text-purple-300 font-light">
                <Lightbulb size={14} />
                <span>{exp.highlights}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
        variants={itemVariants}
      >
        {[
          { label: "Roles", value: "2" },
          { label: "Projects", value: "7+" },
          { label: "Technologies", value: "10+" },
        ].map((stat, _) => (
          <div
            key={stat.label}
            className="bg-linear-to-br from-white/5 to-white/2 backdrop-blur border border-white/10 rounded-lg p-4 text-center hover:border-white/20 transition-colors"
          >
            <p className="text-3xl md:text-4xl font-light text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400 mb-2">
              {stat.value}
            </p>
            <p className="text-sm text-gray-400 font-light">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* What I'm Looking For */}
      <motion.div
        className="bg-linear-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 backdrop-blur border border-white/10 rounded-xl p-6 mb-20 md:p-8"
        variants={itemVariants}
      >
        <h3 className="text-xl font-light text-white mb-4 flex items-center gap-2">
          <Zap size={20} className="text-yellow-400" />
          Looking Forward
        </h3>
        <p className="text-gray-300 font-light leading-relaxed mb-4">
          I'm eager to take on internship and junior developer roles where I can
          apply and expand my full-stack development skills. I'm passionate
          about building real-world applications, learning from experienced
          mentors, and contributing to innovative projects.
        </p>
        <div className="flex flex-wrap gap-2">
          {["Full Stack", "Frontend", "Backend", "StartUps", "Remote"].map(
            (interest) => (
              <span
                key={interest}
                className="text-sm bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-gray-200 font-light hover:bg-white/20 transition-colors"
              >
                {interest}
              </span>
            ),
          )}
        </div>
      </motion.div>

      <div className=" w-full h-px"></div>

      <GradualBlur />
    </motion.div>
  );
};

export default Exp;
