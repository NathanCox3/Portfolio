import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 2rem;
`;

const Content = styled.div`
  max-width: 1200px;
  text-align: left;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Subtitle = styled(motion.h2)`
  font-size: 2rem;
  color: #64ffda;
  margin-bottom: 2rem;
`;

const Description = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #a8b2d1;
`;

const Hero: React.FC = () => {
  return (
    <HeroSection>
      <Content>
        <Title
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nathan Cox
        </Title>
        <Subtitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Industrial Engineer & Software Developer
        </Subtitle>
        <Description
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          A passionate engineer with expertise in industrial engineering, software development,
          and data analytics. Currently based in Toronto, ON.
        </Description>
      </Content>
    </HeroSection>
  );
};

export default Hero;
