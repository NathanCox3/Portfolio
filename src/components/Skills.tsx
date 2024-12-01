import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  background: #ffffff;
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

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CategoryTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: #2d2d2d;
  border-bottom: 2px solid #64ffda;
  padding-bottom: 0.5rem;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 0.8rem;
  color: #4a4a4a;
  display: flex;
  align-items: center;
  
  &:before {
    content: "▹";
    color: #64ffda;
    margin-right: 10px;
  }
`;

const Skills: React.FC = () => {
  const skills = {
    technical: [
      "Statistical Analysis",
      "Data Visualization",
      "Data Interpretation",
      "ERP Systems",
      "Agile Methodologies"
    ],
    software: [
      "Python",
      "JavaScript",
      "SQL",
      "MATLAB",
      "MS Excel",
      "Minitab",
      "Solidworks"
    ],
    certifications: [
      "Microsoft Azure Fundamentals",
      "Lean Green Belt Certificate",
      "Extended French Award",
      "Royal Conservatory of Music Grade 8",
      "National Lifeguard Certification"
    ]
  };

  return (
    <SkillsSection>
      <Container>
        <Title>Skills & Certifications</Title>
        <SkillsGrid>
          <SkillCategory
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>Technical Skills</CategoryTitle>
            <SkillsList>
              {skills.technical.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>

          <SkillCategory
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>Software</CategoryTitle>
            <SkillsList>
              {skills.software.map((skill, index) => (
                <SkillItem key={index}>{skill}</SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>

          <SkillCategory
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <CategoryTitle>Certifications</CategoryTitle>
            <SkillsList>
              {skills.certifications.map((cert, index) => (
                <SkillItem key={index}>{cert}</SkillItem>
              ))}
            </SkillsList>
          </SkillCategory>
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

export default Skills;
