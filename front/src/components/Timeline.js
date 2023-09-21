import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import styled from '@emotion/styled';
import '../style/Timeline.css';

const experiences = [
  { title: 'Job 1', company: 'Company 1', description: 'Description 1', date: '01 . 05 . 2022' },
  { title: 'Job 2', company: 'Company 1', description: 'Description 1', date: '01 . 05 . 2022' },
  { title: 'Job 3', company: 'Company 1', description: 'Description 1', date: '01 . 05 . 2022' },
  { title: 'Job 4', company: 'Company 1', description: 'Description 1', date: '01 . 05 . 2022' },
  { title: 'Job 5', company: 'Company 1', description: 'Description 1', date: '01 . 05 . 2022' },
  { title: 'Job 6', company: 'Company 1', description: 'Description 1', date: '01 . 05 . 2022' },
  { title: 'Job 7', company: 'Company 1', description: 'Description 1', date: '01 . 05 . 2022' },
  { title: 'Job 8', company: 'Company 1', description: 'Description 1', date: '01 . 05 . 2022' },
];

function Timeline() {
  const [visibleCount, setVisibleCount] = useState(1);
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef([]);
  const [startY, setStartY] = useState(null); // New state to track start Y position

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      setVisibleCount((prev) => Math.min(prev + 1, experiences.length));
    } else {
      setVisibleCount((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleTouch = (index) => {
    if (activeCard === index) {
      setActiveCard(null); // Deactivate if already active
    } else {
      setActiveCard(index); // Activate if not active
    }
  };

  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;
    if (startY && currentY > startY + 10) { // Swipe down
      setVisibleCount((prev) => Math.max(prev - 1, 1));
      setStartY(null);
    } else if (startY && currentY < startY - 10) { // Swipe up
      setVisibleCount((prev) => Math.min(prev + 1, experiences.length));
      setStartY(null);
    }
  };

  useEffect(() => {
    if (cardRefs.current[visibleCount - 1]) {
      cardRefs.current[visibleCount - 1].scrollIntoView({ behavior: 'smooth' });
    }
  }, [visibleCount]);

  return (
    <div className="timeline" onWheel={handleScroll} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      {experiences.slice(0, visibleCount).map((exp, index) => (
        <StyledCard 
        key={index} 
        className={`experience-card ${activeCard === index ? 'active' : ''}`}
        ref={(el) => cardRefs.current[index] = el}
        onTouchStart={() => handleTouch(index)}
      >
          <CardContent>
            <Typography color="white" fontWeight="700" mb={0.5}>
              {exp.date}
            </Typography>
            <InfoBox>
              <Typography variant="h6">{exp.title}</Typography>
              <Typography variant="subtitle1">{exp.company}</Typography>
              <Typography variant="body2">{exp.description}</Typography>
            </InfoBox>
          </CardContent>
        </StyledCard>
      ))}
    </div>
  );
}
const StyledCard = styled(Card)`
  width: 300px;
  height: 230px;
  transform: rotate(90deg);
  background: #97B5C7;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  transition-duration: 1.5s;
  transition-property: width, height, transform;

  &:hover {
    width: 230px;
    height: 300px;
    transform: rotate(0deg);
  }
`;

const InfoBox = styled(Box)`
  width: 100%;
  height: 200px;
  padding: .7rem;
  font-size: smaller;
  border-radius: 1rem;
  text-align: center;
  background-color: #F4F3F1;
  color: #F4F3F1;
  transition-duration: 1s;
  transition-property: color;

  &:hover {
    color: #212121;
  }
`;

export default Timeline;