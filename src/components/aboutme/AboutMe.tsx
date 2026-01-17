import { UserIcon, Code2Icon, Zap, Target } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import PixelSnow from "../PixelSnow";
import GradualBlur from "../GradualBlur";

const AboutMe = () => {
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

  return (
    <motion.div
      className=" container h-full max-w-6xl p-5 pb-20 "
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Hero Image */}
      <motion.img
        src="/aboutme.jpg"
        alt="About Me"
        className=" w-full aspect-4/1 rounded-xl mb-8 object-cover border border-white/20"
        variants={itemVariants}
      />

      {/* Title */}
      <motion.p
        className=" text-3xl md:text-5xl flex items-center gap-3 font-light mb-8"
        variants={itemVariants}
      >
        <UserIcon size={30} className=" md:hidden" />
        <UserIcon size={48} className=" hidden md:inline" />
        <span>About Me</span>
      </motion.p>

      {/* Bio Section */}
      <motion.div className="mb-12" variants={itemVariants}>
        <h3 className="text-xl font-light text-white mb-4 flex items-center gap-2">
          <Zap size={20} className="text-blue-400" />
          Who Am I?
        </h3>
        <p className="text-gray-300 font-light leading-relaxed mb-4">
          I’m a full-stack developer who enjoys building end-to-end web
          applications with real-world constraints. I like working close to the
          backend, integrating APIs, and turning rough ideas into usable
          products. Recently, I’ve been focused on building AI-assisted
          workflows and tools that reduce repetitive manual work.
        </p>
      </motion.div>

      {/* What I Do Section */}
      <motion.div className="mb-12" variants={itemVariants}>
        <h3 className="text-xl font-light text-white mb-4 flex items-center gap-2">
          <Target size={20} className="text-green-400" />
          What I Do
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
            <p className="font-light text-white">Frontend Development</p>
            <p className="text-sm text-gray-400 mt-1">
              Creating responsive, interactive UI with React, TypeScript, and
              Tailwind CSS
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
            <p className="font-light text-white">Backend Development</p>
            <p className="text-sm text-gray-400 mt-1">
              Building scalable APIs and services with Node.js, Express, and
              databases
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
            <p className="font-light text-white">Full Stack Solutions</p>
            <p className="text-sm text-gray-400 mt-1">
              End-to-end development from concept to deployment with best
              practices
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
            <p className="font-light text-white">UI/UX Implementation</p>
            <p className="text-sm text-gray-400 mt-1">
              Translating designs into smooth, performant interactive
              experiences
            </p>
          </div>
        </div>
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div className="mb-12" variants={itemVariants}>
        <h3 className="text-xl font-light text-white mb-4 flex items-center gap-2">
          <Code2Icon size={20} className="text-purple-400" />
          Tech Stack
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Node.js",
            "Express",
            "Tailwind CSS",
            "MongoDB",
            "PostgreSQL",
            "Git",
            "Docker",
            "REST APIs",
            "AWS",
          ].map((tech, idx) => (
            <motion.div
              key={tech}
              className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-lg px-4 py-2 text-center text-sm font-light text-gray-200 hover:border-white/20 transition-colors"
              variants={itemVariants}
            >
              {tech}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Values Section */}
      <motion.div variants={itemVariants}>
        <h3 className="text-xl font-light text-white mb-4">Core Values</h3>
        <div className="space-y-3">
          <div className="flex gap-3 items-start">
            <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
            <p className="text-gray-300 font-light">
              <strong className="text-white">Clean Code:</strong> I believe in
              writing maintainable, readable code that solves problems
              elegantly.
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <div className="w-2 h-2 rounded-full bg-green-400 mt-2 flex-shrink-0" />
            <p className="text-gray-300 font-light">
              <strong className="text-white">User-Centric:</strong> Every line
              of code I write is focused on delivering value to the end user.
            </p>
          </div>
          <div className="flex gap-3 items-start pb-14">
            <div className="w-2 h-2 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
            <p className="text-gray-300 font-light">
              <strong className="text-white">Continuous Growth:</strong> I'm
              always learning new technologies and best practices to stay ahead.
            </p>
          </div>
        </div>
      </motion.div>
      <GradualBlur />
    </motion.div>
  );
};

export default AboutMe;
