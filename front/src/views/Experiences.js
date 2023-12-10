// Experiences.js
import React from "react";
import {
  Timeline,
  TimelineItem as MuiTimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';
import { Paper, Typography } from '@mui/material';
import VisibilitySensor from "react-visibility-sensor";
import RoundedIcon from '@mui/icons-material/ArrowForwardIos';
import CustomAppBar from 'components/CustomAppBar';
import chat from 'images/gifs/chat.gif';
import livreur from 'images/gifs/livreur.gif';
import dev from 'images/gifs/dev.gif';
import huh from 'images/gifs/huh.gif';


const timelineData = [
  {
    id: "001",
    dateText: "11/2010 – Present",
    image: chat,
    title: "Chat Developer",
    company: "Chat Co.",
    description: "Developed an innovative chat application with real-time features."
  },
  {
    id: "002",
    dateText: "04/2009 – 11/2010",
    image: livreur,
    title: "Delivery Manager",
    company: "Delivery Inc.",
    description: "Managed and optimized delivery routes for efficiency."
  },
  {
    id: "003",
    dateText: "08/2008 – 11/2008",
    image: huh,
    title: "Research Analyst",
    company: "Research Ltd.",
    description: "Conducted extensive research on market trends and analytics."
  },
  {
    id: "004",
    dateText: "08/2008 – 11/2008",
    image: dev,
    title: "Software Developer",
    company: "Dev Corp.",
    description: "Developed and maintained software applications."
  },
  {
    id: "005",
    dateText: "08/2008 – 11/2008",
    image: chat,
    title: "Customer Support",
    company: "Support Solutions",
    description: "Provided support to customers and resolved their issues."
  }
];


const TimelineCard = ({ image, title, company, description }) => (
  <Paper elevation={3} style={{ padding: '20px', marginTop: '16px' }}>
    <img src={image} alt={title} style={{ width: '100%', height: 'auto', marginBottom: '16px' }} />
    <Typography variant="h6">{title}</Typography>
    <Typography variant="subtitle1">{company}</Typography>
    <Typography variant="body2">{description}</Typography>
  </Paper>
);

function Experiences() {
  return (
    <div>
      <CustomAppBar />
      <Timeline>
        {timelineData.map((item, index) => (
          <VisibilitySensor key={item.id} partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <MuiTimelineItem style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s' }}>
                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <RoundedIcon />
                  </TimelineDot>
                  {index < timelineData.length - 1 && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent>
                  <TimelineCard {...item} />
                </TimelineContent>
              </MuiTimelineItem>
            )}
          </VisibilitySensor>
        ))}
      </Timeline>
    </div>
  );
}

export default Experiences;