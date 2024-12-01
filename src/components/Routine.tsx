import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const RoutineSection = styled.section`
  padding: 5rem 2rem;
  background: #ffffff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  color: #1a1a1a;
`;

const Description = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #4a4a4a;
  margin-bottom: 3rem;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const RoutineGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const RoutineCard = styled(motion.div)`
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const TimeBlock = styled.div`
  margin-bottom: 1.5rem;
`;

const Time = styled.h4`
  color: #64ffda;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const Activity = styled.p`
  color: #4a4a4a;
  font-size: 1rem;
`;

const Highlight = styled.div`
  background: #1a1a1a;
  color: white;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  margin-top: 2rem;
`;

const HighlightText = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`;

const Routine: React.FC = () => {
  const routineHighlights = [
    {
      title: "Early Riser",
      details: "5:00 AM - Starting each day with a refreshing walk"
    },
    {
      title: "Deep Work",
      details: "7:00 AM - 3:00 PM - Focused work sessions with strategic breaks"
    },
    {
      title: "Physical Fitness",
      details: "3:30 PM - 5:00 PM - Dedicated gym time for mental and physical well-being"
    },
    {
      title: "Evening Routine",
      details: "Wind down activities and reflection through journaling"
    }
  ];

  return (
    <RoutineSection>
      <Container>
        <Title>Daily Routine</Title>
        <Description>
          Success is built on consistency and discipline. My structured daily routine reflects my commitment to continuous improvement and productivity.
        </Description>
        
        <RoutineGrid>
          {routineHighlights.map((item, index) => (
            <RoutineCard
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Time>{item.title}</Time>
              <Activity>{item.details}</Activity>
            </RoutineCard>
          ))}
        </RoutineGrid>

        <Highlight>
          <HighlightText>
            "My structured routine demonstrates my dedication to personal growth, time management, and achieving goals through consistent daily actions."
          </HighlightText>
        </Highlight>
      </Container>
    </RoutineSection>
  );
};

export default Routine;
