import React, { useState } from "react";
import AddIcon from '@mui/icons-material/TouchAppOutlined';
import "style/TimelineCard.css";

const TimelineCard = ({ image, title, company, description }) => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    if (expanded) {
      const cardContent = document.querySelector(".timeline-card-content");
      cardContent.style.transition =
        "height 0.3s ease-in-out, opacity 0.3s ease-in-out";
      cardContent.style.height = "0";
      cardContent.style.opacity = "0";

      setTimeout(() => {
        setExpanded(!expanded);
        cardContent.style.transition = "";
        cardContent.style.height = "";
        cardContent.style.opacity = "";
      }, 300);
    } else {
      setTimeout(() => {
        setExpanded(!expanded);
      }, 300);
    }
  };

  return (
    <div className={`timeline-card ${expanded ? "expanded" : ""}`} onClick={handleCardClick}>
      <div className="timeline-card-image" style={{ backgroundImage: `url(${image})` }}></div>
      {!expanded && <AddIcon className="expand-icon" />}
      <div className="timeline-card-content">
        <div className="timeline-card-content-header">
          <p className="timeline-card-content-title">{title}</p>
          <p className="timeline-card-content-company">{company}</p>
        </div>
        <p className="timeline-card-content-description">{description}</p>
      </div>
    </div>
  );
};

export default TimelineCard;