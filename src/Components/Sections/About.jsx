import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import ParticleBackground from "../Background/ParticleBackground";


// import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaPython, FaDocker, FaAws, FaGithub,FaCertificate ,FaGraduationCap ,FaBriefcase} from "react-icons/fa";
// import { SiRedux, SiDjango, SiMysql, SiTailwindcss, SiPostgresql,  SiMicrogenetics } from "react-icons/si";

import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaPython,
  FaDocker, FaAws, FaGithub, FaCertificate, FaGraduationCap, FaBriefcase, FaServer
} from "react-icons/fa";

import { TbApi } from "react-icons/tb";


import {
  SiRedux,
  SiDjango,
  SiMysql,
  SiTailwindcss,
  SiPostgresql,
  // SiDjangoRestFramework
} from "react-icons/si";

import { RiNodeTree } from "react-icons/ri";



const AnimatedSection = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.2 });
  const controls = useAnimation();

  if (inView) controls.start("visible");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  const experiences = [
    {
      period: "May 2025 - Present",
      role: "Full-Stack Developer Intern",
      company: "Bridgeon Solutions",
      description: "Building scalable web apps with React, Django, and SQL. Optimized APIs and implemented reusable UI components.",
      icon: <FaBriefcase className="text-blue-400 text-2xl" />,
    },
    {
      period: "Sep 2022 - Apr 2025",
      role: "Bachelor's of Computer Applications",
      company: "University of Calicut",
      description: "Graduated with strong foundation in programming, databases, and web technologies.",
      icon: <FaGraduationCap className="text-green-400 text-2xl" />,
    },
  ];

  const languages = [
    { name: "English" },
    { name: "Hindi" },
    { name: "Malayalam" },

  ];


  const certifications = [
    { name: "Python Programming (HackerRank)", icon: <FaCertificate className="text-blue-400 text-xl" /> },
    { name: "Software Development (Upcode Labs)", icon: <FaCertificate className="text-green-400 text-xl" /> },
    { name: "Python Django (Techno Dot Academy)", icon: <FaCertificate className="text-yellow-400 text-xl" /> },
    { name: "AI Aware Badge - AI For All ( CBSE and Intel )", icon: <FaCertificate className="text-yellow-400 text-xl" /> },
    { name: " 100 Days of Code™: The Complete Python Pro Bootcamp (Udemy)", icon: <FaCertificate className="text-yellow-400 text-xl" /> },
  ];



  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
    { name: "React", icon: <FaReact className="text-sky-400" /> },
    { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
    { name: "Python", icon: <FaPython className="text-yellow-400" /> },
    { name: "Django", icon: <SiDjango className="text-green-700" /> },
    // { name: "Django REST Framework", icon: <SiDjangoRestFramework className="text-red-600" /> },
    { name: "Django REST Framework", icon: <TbApi className="text-red-500" /> },

    { name: "SQL", icon: <SiMysql className="text-blue-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-700" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-900" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
    { name: "AWS", icon: <FaAws className="text-orange-400" /> },

    // Best microservices icon (choose one)
    { name: "Microservices", icon: <FaServer className="text-indigo-400" /> },
    // Or: { name: "Microservices", icon: <RiNodeTree className="text-indigo-400" /> },
  ];




  return (
    <section id="about" className="relative min-h-screen bg-black text-white overflow-hidden">
      <ParticleBackground />

      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 space-y-16 md:space-y-32">

        {/* Hero Section */}
<AnimatedSection className="text-center space-y-6" delay={0.7}>
  <motion.div
    whileHover={{ scale: 1.05, y: -6 }}
    transition={{ type: "spring", stiffness: 120, damping: 18 }}
    className="group relative w-full max-w-2xl mx-auto h-80 md:h-110
               rounded-2xl overflow-hidden
               border border-gray-800 shadow-2xl
               bg-black"
  >
    {/* Glow Ring */}
    <div
      className="absolute inset-0 rounded-2xl 
                 opacity-0 group-hover:opacity-100
                 transition-opacity duration-500
                 ring-1 ring-indigo-400/30"
    />

    {/* Image */}
    <img
      src="/mypic.jpg"
      alt="Profile"
      className="w-full h-full object-cover
                  opacity-75
                 transition-transform duration-700 ease-out
                 group-hover:scale-105"
    />

    {/* Subtle Gradient Overlay */}
    <div
      className="absolute inset-0 bg-gradient-to-t
                 from-black/30 via-transparent to-transparent
                 opacity-0 group-hover:opacity-100
                 transition-opacity duration-500"
    />
  </motion.div>

  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
    FULLSTACK WEB DEVELOPER<br />
    <span className="text-gray-400">BASED IN KERALA, INDIA.</span>
  </h1>
</AnimatedSection>



        {/* About Text */}
<AnimatedSection
  className="space-y-6 max-w-6xl mx-auto px-6 md:px-0"
  delay={0.2}
>
  <h2 className="text-3xl md:text-4xl font-bold text-white border-l-4 border-gray-500 pl-4">
    THE JOURNEY SO FAR
  </h2>

  <div className="grid md:grid-cols-2 gap-10 items-start">
    {/* Left Column - Honest Story */}
    <div className="space-y-5">
      <p className="text-gray-300 text-lg leading-relaxed">
        I started learning web development by building simple pages and fixing
        things that didn’t work. Most of my early learning came from breaking
        code, searching for solutions, and trying again.
      </p>

      <p className="text-gray-300 text-lg leading-relaxed">
        Over time, I moved beyond static websites and began working on complete
        applications. I learned how frontend and backend connect, how APIs work,
        and why writing clean code matters when projects grow.
      </p>

      <p className="text-gray-300 text-lg leading-relaxed">
        Today, I work comfortably across the stack, focusing on writing code
        that is easy to understand, easy to maintain, and reliable in real
        usage.
      </p>
    </div>

    {/* Right Column - Real Experience Highlights */}
    <div className="space-y-4 text-gray-400 text-base leading-relaxed border-l border-gray-700 pl-6">
      <p>
        → Built and connected frontend interfaces with backend APIs using React
        and Django.
      </p>
      <p>
        → Implemented authentication, permissions, and basic security practices
        in real projects.
      </p>
      <p>
        → Faced and fixed common issues like API errors, state bugs, and
        performance bottlenecks.
      </p>
      <p>
        → Still learning by building, reviewing code, and improving existing
        projects.
      </p>
    </div>
  </div>
</AnimatedSection>



        {/* Technical Skills */}
        <AnimatedSection className="space-y-8 max-w-6xl mx-auto px-6 md:px-0" delay={0.4}>
          <h3 className="text-3xl md:text-4xl font-bold text-white border-l-4 border-gray-500 pl-4">
            TECHNICAL SKILLS
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {skills.map((skill, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col items-center justify-center
                   p-6 rounded-xl border border-gray-800 
                   bg-gradient-to-br from-gray-900/70 to-gray-800/40
                   shadow-lg hover:shadow-blue-500/20
                   hover:border-white transition-all duration-300"
              >
                {/* Logo */}
                <div className="text-4xl mb-3 group-hover:scale-110 transform transition-transform">
                  {skill.icon}
                </div>

                {/* Name */}
                <span className="text-gray-300 font-medium group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </span>

                {/* Glow */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 
                        bg-blue-500 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Experience */}
        <AnimatedSection className="space-y-8 max-w-6xl mx-auto px-6 md:px-0" delay={0.6}>
          <h2 className="text-3xl md:text-4xl font-bold text-white border-l-4 border-gray-500 pl-4">
            EXPERIENCE & EDUCATION
          </h2>

          <div className="space-y-6 relative">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="flex items-start gap-6 border border-gray-800 rounded-2xl p-6
                   bg-gray-900/30 backdrop-blur-sm hover:bg-gray-900/50
                   transition-all duration-300 relative"
              >
                {/* Icon Bubble */}
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full 
                        bg-gray-800 border border-gray-700 group-hover:border-blue-500 transition-all">
                  {exp.icon}
                </div>

                {/* Content */}
                <div>
                  <div className="text-gray-400 text-sm font-medium">{exp.period}</div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-gray-300 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>


        {/* Certifications */}
        <AnimatedSection className="space-y-8 max-w-6xl mx-auto px-6 md:px-0" delay={0.8}>
          <h3 className="text-3xl md:text-4xl font-bold text-white border-l-4 border-gray-500 pl-4">
            CERTIFICATIONS
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="group flex items-center gap-4 p-5 rounded-xl border border-gray-800
                   bg-gray-900/30 backdrop-blur-sm shadow-md 
                   hover:border-white hover:shadow-purple-500/20
                   transition-all duration-300 cursor-pointer"
              >

                {/* Text */}
                <span className="text-gray-300 font-medium group-hover:text-white-400 transition-colors">
                  {cert.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>


        {/* Languages */}
        <AnimatedSection className="space-y-8 max-w-6xl mx-auto px-6 md:px-0" delay={0.9}>
          <h3 className="text-3xl md:text-4xl font-bold text-white border-l-4 border-gray-500 pl-4">
            LANGUAGES
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {languages.map((lang, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center gap-3 p-6 rounded-xl
                   bg-gray-900/30 border border-gray-800 shadow-md 
                   hover:border-white 
                   transition-all duration-300 cursor-pointer"
              >
                {/* Language Name */}
                <span className="text-gray-300 font-medium group-hover:text-white-400 transition-colors">
                  {lang.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
};

export default About;
