import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceSection = styled.section`
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

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ExperienceCard = styled(motion.div)`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CompanyName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #2d2d2d;
`;

const Position = styled.h4`
  font-size: 1.2rem;
  color: #64ffda;
  margin-bottom: 1rem;
`;

const Duration = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 1rem;
`;

const Achievements = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Achievement = styled.li`
  margin-bottom: 0.5rem;
  color: #4a4a4a;
  line-height: 1.6;
  
  &:before {
    content: "▹";
    color: #64ffda;
    margin-right: 10px;
  }
`;

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Smarthaven",
      position: "Account Executive",
      duration: "December 2022 – September 2023",
      location: "Edmonton, AB",
      achievements: [
        "Achieved top rookie status, ranking in the top 5% of new hires for sales performance",
        "Closed over 40 sales within the first two months, generating $120,000 in revenue",
        "Maintained a customer satisfaction score of 93% by providing exceptional service"
      ]
    },
    {
      company: "Quest CIS Inc.",
      position: "Research Analyst",
      duration: "May 2022 – November 2022",
      location: "Oakville, ON",
      achievements: [
        "Published $0-$30M long-term business model for food production DTC startup",
        "Led product proof of concept testing, achieving 20% reduction in production costs",
        "Developed branding and eMarketing strategy leading to $3 return on ad spend"
      ]
    },
    {
      company: "Myant Inc.",
      position: "Software Engineer",
      duration: "May 2021 - September 2021",
      location: "Toronto, ON",
      achievements: [
        "Conducted comprehensive testing of mobile application and wearable technology",
        "Implemented validation protocols using Python and JavaScript",
        "Identified 11% decrease in production cycle time through optimization"
      ]
    }
  ];

  return (
    <ExperienceSection>
      <Container>
        <Title>Work Experience</Title>
        <ExperienceGrid>
          {experiences.map((exp, index) => (
            <ExperienceCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <CompanyName>{exp.company}</CompanyName>
              <Position>{exp.position}</Position>
              <Duration>{exp.duration} | {exp.location}</Duration>
              <Achievements>
                {exp.achievements.map((achievement, i) => (
                  <Achievement key={i}>{achievement}</Achievement>
                ))}
              </Achievements>
            </ExperienceCard>
          ))}
        </ExperienceGrid>
      </Container>
    </ExperienceSection>
  );
};

export default Experience;
