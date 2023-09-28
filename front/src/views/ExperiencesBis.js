// ExperienceBis.js
import React from "react";
import RoundedIcon from '@mui/icons-material/RadioButtonUnchecked';
import Timeline from "components/Experience/Timeline";
import TimelineItem from "components/Experience/TimelineItem";
import CustomAppBar from 'components/CustomAppBar';
import TimelineCard from "components/Experience/TimelineCard";
import chat from 'images/gifs/chat.gif'
import livreur from 'images/gifs/livreur.gif'
import dev from 'images/gifs/dev.gif'
import huh from 'images/gifs/huh.gif'

const timelineElements = [
  <TimelineItem
    id="001"
    dateText="11/2010 – Present"
    icon={<RoundedIcon />}
  >
    <TimelineCard 
      image={chat} 
      title="Chat Developer" 
      company="Chat Co." 
      description="Developed an innovative chat application with real-time features."
    />
  </TimelineItem>,
  <TimelineItem
    id="002"
    dateText="04/2009 – 11/2010"
    dateInnerStyle={{ background: "#61b8ff", color: "#000" }}
    iconColor="#61b8ff"
    icon={<RoundedIcon />}
  >
    <TimelineCard
      image={livreur} 
      title="Delivery Manager"
      company="Delivery Inc."
      description="Managed and optimized delivery routes for efficiency."
    />
  </TimelineItem>,
  <TimelineItem
    id="003"
    dateText="08/2008 – 11/2008"
    dateInnerStyle={{ background: "#76bb7f" }}
    iconColor="#76bb7f"
    icon={<RoundedIcon />}
  >
    <TimelineCard 
      image={huh} 
      title="Research Analyst" 
      company="Research Ltd." 
      description="Conducted extensive research on market trends and analytics."
    />
  </TimelineItem>,
  <TimelineItem
    id="004"
    dateText="08/2008 – 11/2008"
    icon={<RoundedIcon />}
  >
    <TimelineCard 
      image={dev} 
      title="Software Developer" 
      company="Dev Corp." 
      description="Developed and maintained software applications."
    />
  </TimelineItem>,
  <TimelineItem
    id="005"
    dateText="08/2008 – 11/2008"
    icon={<RoundedIcon />}
  >
    <TimelineCard 
      image={chat} 
      title="Customer Support" 
      company="Support Solutions" 
      description="Provided support to customers and resolved their issues."
    />
  </TimelineItem>
];

function ExperiencesBis() {
  return (
    <div>
      <CustomAppBar></CustomAppBar>
      <Timeline>{timelineElements}</Timeline>
    </div>
  );
}

export default ExperiencesBis;