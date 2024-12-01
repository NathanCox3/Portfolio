import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background: #f8f9fa;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  text-align: center;
  color: #1a1a1a;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2d2d2d;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #4a4a4a;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const Achievements = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Achievement = styled.li`
  margin-bottom: 0.5rem;
  color: #4a4a4a;
  
  &:before {
    content: "▹";
    color: #64ffda;
    margin-right: 10px;
  }
`;

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Queue Management System Simulation",
      description: "Discrete-event simulation project optimizing customer flow at Tim Hortons franchise",
      achievements: [
        "Reduced customer wait times by 8%",
        "Increased customers served by 6%",
        "Led weekly meetings using Kanban boards"
      ]
    },
    {
      title: "Quality Control Analysis",
      description: "Comprehensive analysis of textile manufacturing processes at Merchco Textiles",
      achievements: [
        "Identified two key quality factors",
        "Reduced defects by 12%",
        "Created data visualizations for stakeholders"
      ]
    },
    {
      title: "Mobile App Testing Framework",
      description: "Developed testing protocols for wearable technology applications",
      achievements: [
        "Documented over 100 bugs",
        "Implemented Python and JavaScript validation",
        "Optimized workflow processes"
      ]
    }
  ];

  return (
    <ProjectsSection>
      <Container>
        <Title>Featured Projects</Title>
        <ProjectsGrid>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <Achievements>
                  {project.achievements.map((achievement, i) => (
                    <Achievement key={i}>{achievement}</Achievement>
                  ))}
                </Achievements>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
