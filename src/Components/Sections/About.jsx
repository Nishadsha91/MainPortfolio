import React, { useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import ParticleBackground from "../Background/ParticleBackground";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiDjango, SiTailwindcss, SiMysql } from "react-icons/si";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";



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
  { name: "Arabic" },
];


const certifications = [
  { name: "Python Programming (HackerRank)", icon: <FaCertificate className="text-blue-400 text-xl" /> },
  { name: "Software Development (Upcode Labs)", icon: <FaCertificate className="text-green-400 text-xl" /> },
  { name: "Python Django (Techno Dot Academy)", icon: <FaCertificate className="text-yellow-400 text-xl" /> },
];


const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "Django", icon: <SiDjango className="text-green-700" /> },
  { name: "SQL", icon: <SiMysql className="text-blue-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-300" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 space-y-32">

        {/* Hero Section */}
        <AnimatedSection className="text-center space-y-6" delay={0.7}>
          <div className="w-70   md:w-160 h-110 mx-auto rounded-2xl overflow-hidden border border-gray-800 shadow-2xl ">
            <img src="/mypic.jpg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            FULLSTACK WEB DEVELOPER<br />
            <span className="text-gray-400">BASED IN KERALA, INDIA.</span>
          </h1>
          {/* <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Self-taught Full-Stack Developer specializing in building scalable, high-performance web applications using modern technologies.
          </p> */}
        </AnimatedSection>

        {/* About Text */}
<AnimatedSection className="space-y-6 max-w-6xl mx-auto px-6 md:px-0" delay={0.2}>
  <h2 className="text-3xl md:text-4xl font-bold text-white border-l-4 border-gray-500 pl-4">
    THE JOURNEY SO FAR
  </h2>

  <div className="grid md:grid-cols-2 gap-8 items-start">
    {/* Left Column - Short Highlights */}
    <div className="space-y-4">
      <p className="text-gray-400 text-lg leading-relaxed">
        Self-taught Full-Stack Developer focused on building scalable, high-performance web applications.
      </p>
      <p className="text-gray-400 text-lg leading-relaxed">
        Experienced in frontend & backend development, crafting robust and user-friendly projects.
      </p>
      <p className="text-gray-400 text-lg leading-relaxed">
        Passionate about transforming complex challenges into clean, maintainable solutions.
      </p>
    </div>

    {/* Right Column - Timeline Style / Additional Highlights */}
    <div className="space-y-4 text-gray-500 text-base leading-relaxed">
      <p>
        Designed responsive interfaces and integrated REST APIs for modern web applications.
      </p>
      <p>
        Optimized application performance and followed best practices in software development.
      </p>
      <p>
        Continuously learning emerging technologies to deliver impactful digital experiences.
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
