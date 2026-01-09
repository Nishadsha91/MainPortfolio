import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import ParticleBackground from "../Background/ParticleBackground";

const projects = [
  {
    title: "Portfolio Website",
    desc: "A personal portfolio built with React & Tailwind CSS to showcase my skills, projects, and experience in an interactive way.",
    link: "#",
    github: "#",
    image: "portfolio.png",
    tags: ["React", "Tailwind", "Framer Motion"],
    category: "Frontend",
    year: "2025"
  },
  {
    title: "E-Commerce App",
    desc: "A shopping app with authentication, cart, and payment integration. Built with React, Node.js, and Stripe for seamless transactions.",
    link: "https://e-commerce-mk8l.vercel.app/",
    github: "https://github.com/Nishadsha91/E-commerce",
    image: "project.png",
    tags: ["React", "Django", "Tailwind"],
    category: "Full-Stack",
    year: "2025"
  },
  // {
  //   title: "Admin Dashboard",
  //   desc: "An admin dashboard with charts, analytics, and CRUD operations. Built using React, Redux, and Chart.js for data visualization.",
  //   link: "https://e-commerce-mk8l.vercel.app/",
  //   github: "https://github.com/Nishadsha91/E-commerce",
  //   image: "admin.png",
  //   tags: ["React", "Redux", "Chart.js"],
  //   category: "FullStack",
  //   year: "2025"
  // },
{
  title: "CodeMentor AI",
  desc: "An AI-powered coding mentor platform with a microservices-based backend, real-time collaboration, intelligent code review, and personalized learning workflows.",
  github: "https://github.com/Nishadsha91/CodeMentorAI-Services",
  link: "https://github.com/Nishadsha91/CodeMentorAI-Frontend",
  image: "codementor.png",
  tags: ["React", "Django", "FastAPI", "Microservices"],
  category: "Full Stack",
  year: "2025",
  type: "case-study"
},

];

const Projects = () => {
  return (
    <section id="projects" className="relative py-32 bg-black text-white overflow-hidden">
      <ParticleBackground />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-black mb-4 tracking-tight">
              SELECTED <span className="text-gray-500">WORKS</span>
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              A collection of projects that showcase my expertise in modern web development
            </p>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-16 md:space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="grid lg:grid-cols-12 gap-12 items-center">

                {/* Project Image */}
                <div
                  className={`lg:col-span-7 relative ${index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                    }`}
                >
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 p-1">
                    <div className="relative rounded-xl overflow-hidden bg-black">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[300px] lg:h-[400px] object-cover transition-all duration-700 group-hover:scale-105"
                      />

                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center space-x-6">
                        {/* <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-110"
                        >
                          Live Demo <ExternalLink size={18} />
                        </a> */}
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 border border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-all transform hover:scale-110"
                        >
                          Code <Github size={18} />
                        </a>
                      </div>
                    </div>

                    {/* Gradient Border Effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                  </div>
                </div>

                {/* Project Details */}
                <div
                  className={`lg:col-span-5 space-y-8 ${index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                    }`}
                >

                  {/* Project Number & Category */}
                  <div className="flex items-center gap-4">
                    <span className="text-6xl font-black text-gray-800">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <div className="space-y-1">
                      <div className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                        {project.category}
                      </div>
                      <div className="text-sm text-gray-500">
                        {project.year}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight group-hover:text-gray-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-4 py-2 text-sm font-medium bg-gray-900 text-gray-300 rounded-lg border border-gray-700 hover:border-gray-600 hover:bg-gray-800 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons - Desktop */}
                  <div className="hidden lg:flex gap-4 pt-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
                    >
                      View Project
                      <ArrowUpRight size={20} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-8 py-4 border border-gray-600 text-white rounded-full font-semibold hover:border-gray-400 hover:bg-gray-900 transition-all transform hover:scale-105"
                    >
                      Source Code <Github size={18} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Action Buttons */}
              <div className="lg:hidden flex gap-4 mt-8 justify-center">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Live Demo <ExternalLink size={18} />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 border border-gray-600 text-white rounded-full font-semibold hover:border-gray-400 transition-colors"
                >
                  Code <Github size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;