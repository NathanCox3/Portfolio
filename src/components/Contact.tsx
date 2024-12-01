import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background: #1a1a1a;
  color: white;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: white;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #a8b2d1;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`;

const ContactItem = styled.a`
  color: #64ffda;
  text-decoration: none;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Contact: React.FC = () => {
  return (
    <ContactSection>
      <Container>
        <Title>Get In Touch</Title>
        <Subtitle>
          I'm currently open to new opportunities and would love to hear from you.
          Whether you have a question or just want to say hi, feel free to reach out!
        </Subtitle>
        <ContactInfo
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <ContactItem href="mailto:Nathanielthomascox@gmail.com">
            Nathanielthomascox@gmail.com
          </ContactItem>
          <ContactItem href="tel:289-259-7204">
            289-259-7204
          </ContactItem>
          <ContactItem href="https://www.linkedin.com/in/nathan-cox" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </ContactItem>
        </ContactInfo>
      </Container>
    </ContactSection>
  );
};

export default Contact;
