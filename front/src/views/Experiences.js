// Timeline.js
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import CustomAppBar from 'components/CustomAppBar';
import 'style/Experience.css';

const experiences = [
  { title: 'Job 1', company: 'Entreprise 1', description: "Ceci est une description d'emploi tout à fait classique avec diverses taches effectuées pour prouver des pseudos compétences à un rh n°1", date: '01 . 05 . 2022' },
  { title: 'Job 2', company: 'Entreprise 2', description: "Ceci est une description d'emploi tout à fait classique avec diverses taches effectuées pour prouver des pseudos compétences à un rh n°2", date: '01 . 05 . 2022' },
  { title: 'Job 3', company: 'Entreprise 3', description: "Ceci est une description d'emploi tout à fait classique avec diverses taches effectuées pour prouver des pseudos compétences à un rh n°3", date: '01 . 05 . 2022' },
  { title: 'Job 4', company: 'Entreprise 4', description: "Ceci est une description d'emploi tout à fait classique avec diverses taches effectuées pour prouver des pseudos compétences à un rh n°4", date: '01 . 05 . 2022' },
  { title: 'Job 5', company: 'Entreprise 5', description: "Ceci est une description d'emploi tout à fait classique avec diverses taches effectuées pour prouver des pseudos compétences à un rh n°5", date: '01 . 05 . 2022' },
  { title: 'Job 6', company: 'Entreprise 6', description: "Ceci est une description d'emploi tout à fait classique avec diverses taches effectuées pour prouver des pseudos compétences à un rh n°6", date: '01 . 05 . 2022' },
  { title: 'Job 7', company: 'Entreprise 7', description: "Ceci est une description d'emploi tout à fait classique avec diverses taches effectuées pour prouver des pseudos compétences à un rh n°7", date: '01 . 05 . 2022' },
  { title: 'Job 8', company: 'Entreprise 8', description: "Ceci est une description d'emploi tout à fait classique avec diverses taches effectuées pour prouver des pseudos compétences à un rh n°8", date: '01 . 05 . 2022' },
];

function Experiences() {
  const [visibleCount, setVisibleCount] = useState(1);
  const [nextVisibleCount, setNextVisibleCount] = useState(null);
  const [activeCard, setActiveCard] = useState(null);
  const cardRefs = useRef([]);
  const dotsRef = useRef(null);
  const [startY, setStartY] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');

  const handleScroll = useCallback((e) => {
    if (e.deltaY > 0) {
      setNextVisibleCount((prev) => Math.min(prev + 1, experiences.length));
      setScrollDirection('down');
    } else {
      setNextVisibleCount((prev) => Math.max(prev - 1, 1));
      setScrollDirection('up');
    }
    setAnimating(true);
  }, []); // Add dependencies if any variables inside handleScroll change over time

  const handleTouch = (index) => {
    if (activeCard === index) {
      setActiveCard(null); // Deactivate if already active
    } else {
      setActiveCard(index); // Activate if not active
    }
  };

  const handleTouchStart = useCallback((e) => {
    setStartY(e.touches[0].clientY);
  }, []); // Add dependencies if any variables inside handleTouchStart change over time

  const handleTouchMove = useCallback((e) => {
    const currentY = e.touches[0].clientY;
    if (startY && currentY > startY + 10) { // Swipe down
      setNextVisibleCount((prev) => Math.max(prev - 1, 1));
      setAnimating(true);
      setStartY(null);
    } else if (startY && currentY < startY - 10) { // Swipe up
      setNextVisibleCount((prev) => Math.min(prev + 1, experiences.length));
      setAnimating(true);
      setStartY(null);
    }
  }, [startY]); // Add dependencies if any variables inside handleTouchMove change over time

  useEffect(() => {
    // Attach the handleScroll and touch event listeners to the window object
    window.addEventListener('wheel', handleScroll);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    // Cleanup: Remove the event listeners when the component is unmounted
    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [handleScroll, handleTouchStart, handleTouchMove]);

  useEffect(() => {
    if (animating) {
      dotsRef.current.scrollIntoView({ behavior: 'smooth' });

      setTimeout(() => {
        if (cardRefs.current[visibleCount - 1]) {
          cardRefs.current[visibleCount - 1].scrollIntoView({ behavior: 'smooth' });
        }
        setVisibleCount(nextVisibleCount);
        setAnimating(false);
      }, 800);
    }
  }, [animating, nextVisibleCount, visibleCount]);
  

  useEffect(() => {
    if (cardRefs.current[visibleCount - 1]) {
      cardRefs.current[visibleCount - 1].scrollIntoView({ behavior: 'smooth' });
    }
  }, [visibleCount]);

  return (
    <div className="timeline" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <CustomAppBar />
      {experiences.slice(0, visibleCount).map((exp, index) => (
        <Card 
          key={index} 
          className={`experience-card ${activeCard === index ? 'active' : ''}`}
          ref={(el) => cardRefs.current[index] = el}
          onTouchStart={() => handleTouch(index)}
        >
          <CardContent>
            <Typography color="white" fontWeight="700" mb={0.5}>
              {exp.date}
            </Typography>
            <div className="info-box">
              <div className="info-header">
                <Typography variant="h4" className="info-title">{exp.title}</Typography>
                <Typography variant="h6" className="info-company">{exp.company}</Typography>
              </div>
              <div className="info-content">
                <Typography variant="body2" className="info-description">{exp.description}</Typography>
              </div>
            </div>
          </CardContent>
          <Typography className='TitleDefault' variant="subtitle1"  sx={{ fontWeight: 'bold' }}>{exp.title}</Typography>
        </Card>
      ))}
      {animating && <div className={`dots-animation ${scrollDirection}`} ref={dotsRef}>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>}
    </div>
  );
}

export default Experiences;