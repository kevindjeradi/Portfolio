// Experiences.js
import React from "react";
import {
  Timeline,
  TimelineItem as MuiTimelineItem,
  TimelineContent,
} from '@mui/lab';
import { Paper, Typography} from '@mui/material';
import VisibilitySensor from "react-visibility-sensor";
// import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
// import LaptopMacIcon from '@mui/icons-material/LaptopMac';
// import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CustomAppBar from 'components/CustomAppBar';
// import chat from 'images/gifs/chat.gif';
// import livreur from 'images/gifs/livreur.gif';
// import dev from 'images/gifs/dev.gif';
// import huh from 'images/gifs/huh.gif';
import "style/Experiences.css";

const timelineData = [
  {
    id: "001",
    dateText: "01/01/2022 - Present",
    title: "Développeur mobile Flutter et web FullStack",
    company: "OnePoint",
    description: "Au sein de l'équipe de développement, j'ai significativement contribué à l'enrichissement de sites existant en ajoutant de nouvelles fonctionnalités, en utilisant Vue.js pour le front-end et Laravel pour le back-end, y compris l'intégration d'améliorations.\nJ'ai conçu et développé une application mobile complète avec flutter, assurant sa compatibilité avec les systèmes d'exploitation iOS et Android.\nJ'ai activement contribué à l'amélioration de l'interface utilisateur (UI) et de l'expérience utilisateur (UX), proposant et implémentant des fonctionnalités innovantes pour enrichir l'application mobile.",
    technologies: ['Api', 'Test', 'poo'],
  },
  {
    id: "002",
    dateText: "04/2009 - 11/2010",
    title: "Téléconseiller Anglais / Français",
    company: "TELEPERFORMANCE",
    description: "Gestion d'un sav pour les clients francophones et Anglophones",
    technologies: ['Api', 'Test', 'poo'],
  },
  {
    id: "003",
    dateText: "10/2018",
    title: "Livreur à vélo",
    company: "Uber",
    description: "Livraisons uber eats",
    technologies: ['Api', 'Test', 'poo'],
  },
  {
    id: "004",
    dateText: "08/2008 - 11/2008",
    title: "Agent de collecte et de propreté",
    company: "Sepur",
    description: "Développement et réorganisation des itinéraires de collecte des camions poubelles pour la ville de Suresnes",
    technologies: ['Api', 'Test', 'poo'],
  },
  {
    id: "005",
    dateText: "08/2008 - 11/2008",
    title: "Équipier de Commerce",
    company: "Simply Market",
    description: "Gestion des rayons fruits et légumes d'un supermarché, accueil et conseil des clients, mise en rayon des produits",
    technologies: ['Api', 'Test', 'poo'],
  }
];

const TimelineCard = ({ title, dateText, company, description, technologies }) => (
  <VisibilitySensor>
    {({ isVisible }) => (
      <Paper className={`timelineCard ${isVisible ? 'isVisible' : ''}`} elevation={3}>
        <div className="cardTitleBar">
          <Typography variant="h6" className="cardTitle">{title}</Typography>
        </div>
        <div className="cardSubHeader">
          <Typography variant="subtitle1" className="cardCompany">{company}</Typography>
          <Typography variant="body2" className="cardDate">{dateText}</Typography>
        </div>
        <Typography variant="body2" className="cardDescription">{description}</Typography>
        <div className="cardTechnologies">
          {technologies.map(tech => (
            <span key={tech} className="technologyChip">{tech}</span>
          ))}
        </div>
      </Paper>
    )}
  </VisibilitySensor>
);


function Experiences() {

  return (
    <div>
      <CustomAppBar />
      <Timeline align="left">
        {timelineData.map((item, index) => (
          <VisibilitySensor key={item.id} partialVisibility offset={{ bottom: 400 }}>
            {({ isVisible }) => (
              <MuiTimelineItem style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '20px', opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s' }}>
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
