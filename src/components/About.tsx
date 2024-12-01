import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  background: #ffffff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const Content = styled.div``;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #1a1a1a;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a4a4a;
  margin-bottom: 1.5rem;
`;

const Education = styled.div`
  margin-top: 2rem;
`;

const University = styled.h3`
  font-size: 1.3rem;
  color: #2d2d2d;
  margin-bottom: 0.5rem;
`;

const Degree = styled.p`
  font-size: 1.1rem;
  color: #64ffda;
  margin-bottom: 0.5rem;
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  
  &:before {
    content: "";
    position: absolute;
    top: 20px;
    left: 20px;
    width: 100%;
    height: 100%;
    border: 2px solid #64ffda;
    border-radius: 4px;
    z-index: 0;
  }
`;

const ProfileImage = styled.div`
  width: 100%;
  height: 400px;
  background: #2d2d2d;
  border-radius: 4px;
  position: relative;
  z-index: 1;
`;

const About: React.FC = () => {
  return (
    <AboutSection>
      <Container>
        <Content>
          <Title>About Me</Title>
          <Description>
            I'm an Industrial Engineering graduate from Toronto Metropolitan University with a passion 
            for solving complex problems through data-driven approaches and innovative technology solutions.
          </Description>
          <Description>
            My diverse experience spans software engineering, research analysis, and business development,
            allowing me to bring a unique perspective to technical challenges. I'm particularly interested
            in statistical process measurement, business strategy, financial technology, and artificial intelligence.
          </Description>
          <Education>
            <University>Toronto Metropolitan University</University>
            <Degree>Bachelor of Engineering - Industrial Engineering</Degree>
            <Description>
              As President of the Canadian Aeronautics and Space Institute - TMU Chapter, I developed
              leadership skills while pursuing my academic interests in data analytics, project management,
              and information systems.
            </Description>
          </Education>
        </Content>
        <ImageContainer
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ProfileImage />
        </ImageContainer>
      </Container>
    </AboutSection>
  );
};

export default About;
