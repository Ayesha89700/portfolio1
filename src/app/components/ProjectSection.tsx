"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Next.js Burger Website",
    description: "Project 1 description",
    image: "/images/projects/p1.jpeg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Ayesha89700/burger-land",
    previewUrl: "https://burger-ayesha-website.vercel.app/",
  },
  {
    id: 2,
    title: "E-commerce shopping Website",
    description: "Project 2 description",
    image: "/images/projects/p2.jpeg",
    tag: ["All", "Web"],
    gitUrl: "",
    previewUrl: "https://shopping-web-ayesha-arsalan.vercel.app/",
  },
  {
    id: 3,
    title: "Static Resume Application",
    description: "Project 3 description",
    image: "/images/projects/p3.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://hackathon1-vert-alpha.vercel.app/",
  },
  {
    id: 4,
    title: "Shareable,editable interactive resume Application",
    description: "Project 4 description",
    image: "/images/projects/p4.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "https://milestones-5-gray.vercel.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };
  

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;