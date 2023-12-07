import React, { useState } from 'react';
import {
  Container, Typography, Avatar, Grid, Chip, Link, Paper, Box, useMediaQuery, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Tooltip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { blueGrey, grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import 'style/Bio.css';
import { motion, AnimatePresence } from 'framer-motion';
import bioPicture from 'images/bio_picture.PNG'
import comicPreview from 'images/bio/comic_preview.png'
import school from 'images/icones/school.gif';
import graduation from 'images/icones/graduation-cap.gif';
import linkedin from 'images/icones/linkedin.gif';
import github from 'images/icones/github.gif';
import mail from 'images/icones/mail.gif';
import down_arrow from 'images/icones/arrow-down.gif';

const StyledPaper = styled(Paper)({
    backgroundColor: grey[100],
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.12)',
    margin: '30px 0',
    '&:hover': {
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.12)',
    },
});

const StyledCard = styled(Card)({
    marginBottom: '20px',
    backgroundColor: grey[200],
    borderRadius: '15px',
    '&:hover': {
        boxShadow: '0 6px 12px rgba(0, 0, 0, 0.12)',
    },
});

const ComicBookBioTeaser = () => {
    const navigate = useNavigate();
    const matches = useMediaQuery('(min-width:600px)');
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Tooltip title="Découvrez ce qu'il s'est passé" placement="top">
        <Box
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() => navigate('/ComicBookBio')}
            style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', cursor: 'pointer', margin: '20px 0', animation: 'idleAnimation 4s infinite', }}
        >
            <Typography variant="body2" style={{ fontStyle: 'italic', color: blueGrey[600], textAlign: 'center' }}>
                Vous avez remarqué le trou dans mon parcours et vous voulez savoir pourquoi ?
            </Typography>

            <motion.div
                initial={false}
                animate={isHovering ? { width: matches ? 130 : 100, height: matches ? 130 : 100 } : { width: 80, height: 80 }}
                transition={{ duration: 0.5 }}
                style={{ borderRadius: isHovering ? '10px' : '50%', overflow: 'hidden', margin: '10px' }}
                >
                <img 
                    src={comicPreview}
                    alt="Interactive Cartoon"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
            </motion.div>
        </Box>
                    </Tooltip>
    );
}

const ContactItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    backgroundColor: grey[100],
    borderRadius: theme.shape.borderRadius,
    boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 0.1)',
    '&:hover': {
        backgroundColor: grey[200],
        boxShadow: 'inset 0 0 10px rgba(0, 0, 0, 0.15)',
    },
}));

const ContactIcon = styled(Box)({
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
});

const ContactText = styled(Typography)({
    color: blueGrey[700],
    fontWeight: '500',
});

const ContactRow = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
    padding: '10px 0',
});

const StyledListItemIcon = styled(ListItemIcon)({
    marginRight: '20px',
  });

  const ExpandableSection = styled(motion.div)({
    padding: '20px',
    margin: '10px',
    cursor: 'pointer',
    backgroundColor: grey[100],
    borderRadius: '20px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.12)',
    '&:hover': {
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.12)',
    },
    overflow: 'hidden',
});

const BioPage = () => {
    const matches = useMediaQuery('(min-width:600px)');
    const [isAboutExpanded, setAboutExpanded] = useState(false);
    const [isInterestsExpanded, setInterestsExpanded] = useState(false);

    const toggleAbout = () => setAboutExpanded(!isAboutExpanded);
    const toggleInterests = () => setInterestsExpanded(!isInterestsExpanded);

    return (
        <Container maxWidth="lg">
            <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', margin: '40px 0', padding: '20px', borderRadius: '20px', backgroundColor: blueGrey[50] }}>
                <Avatar
                    alt="Kevin Djeradi"
                    src={bioPicture}
                    style={{ width: matches ? '200px' : '150px', height: matches ? '200px' : '150px', margin: 'auto', border: `4px solid ${blueGrey[300]}` }}
                />
                <Typography variant="h3" style={{ marginTop: '20px', color: blueGrey[900] }}>Kevin Hamza Djeradi</Typography>
                <Typography variant="subtitle1" style={{ color: blueGrey[700] }}>Développeur Fullstack</Typography>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Link href="https://github.com/kevindjeradi" target="_blank" style={{ textDecoration: 'none' }}>
                            <ContactItem center={true}>
                                <ContactIcon>
                                    <img src={github} className="bio_gif" alt="graduation" />
                                </ContactIcon>
                                <ContactText>
                                    kevindjeradi
                                </ContactText>
                            </ContactItem>
                    </Link>
                </div>

                <ContactRow>
                    <Link href="mailto:kevindjeradi@hotmail.fr" style={{ textDecoration: 'none' }}>
                        <ContactItem>
                            <ContactIcon>
                                <img src={mail} className="bio_gif" alt="graduation" />
                            </ContactIcon>
                            <ContactText>
                                kevindjeradi@hotmail.fr
                            </ContactText>
                        </ContactItem>
                    </Link>

                    <Link href="https://www.linkedin.com/in/kevin-djeradi-012067105/" target="_blank" style={{ textDecoration: 'none' }}>
                        <ContactItem>
                            <ContactIcon>
                                <img src={linkedin} className="bio_gif" alt="graduation" />
                            </ContactIcon>
                            <ContactText>
                                Kevin Djeradi
                            </ContactText>
                        </ContactItem>
                    </Link>
                </ContactRow>
            </Box>

            <StyledPaper>
                <Typography variant="h5" style={{ color: blueGrey[800], marginBottom: '15px' }}>Compétences</Typography>
                <Grid container spacing={2}>
                    {['Flutter', 'React.js', 'Node.js', 'Laravel', 'Firebase', 'HTML5', 'CSS3', 'JavaScript', 'SQL', 'Git', 'C', 'PHP', 'MYSQL', 'Bootstrap'].map(skill => (
                        <Grid item key={skill}>
                            <Chip label={skill} variant="filled" color="primary" style={{ fontWeight: 'bold' }} />
                        </Grid>
                    ))}
                </Grid>
            </StyledPaper>

            <Grid container spacing={2}>
                <Grid item xs={12} md={isAboutExpanded ? 12 : 6}>
                    <ExpandableSection
                        onClick={toggleAbout}
                        initial={{ height: 0 }}
                        animate={{ height: isAboutExpanded ? 'auto' : 120 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <AnimatePresence>
                        <Typography variant="h5" style={{ color: blueGrey[800], marginBottom: '15px' }}>À Propos</Typography>
                        {
                            isAboutExpanded ? 
                            (
                                <React.Fragment>
                                    <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                                        Développeur Fullstack web et mobile, actuellement en alternance chez Onepoint depuis bientôt 3 ans.
                                    </Typography>
                                    <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                                        Spécialisé dans la création d'applications mobiles et web, j'accorde une grande importance à l'expérience utilisateur et la performance.
                                    </Typography>
                                    <Typography variant="body1">
                                        Mon parcours à Epitech m'a permis d'acquérir des compétences solides en programmation et de développer une approche pragmatique et realiste des projets technologiques.
                                    </Typography>
                                </React.Fragment>
                            ) : 
                            (
                                <Typography variant="body1">
                                    Développeur Fullstack web et mobile, actuellement en alternance chez Onepoint depuis bientôt 3 ans.
                                </Typography>
                            )
                        }
                        </AnimatePresence>
                        <Box textAlign="center" sx={{ marginTop: '10px' }}>
                        <img 
                            src={down_arrow}
                            alt="Expand arrow"
                            style={{ 
                                transform: isAboutExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.8s ease-in-out',
                                mixBlendMode: 'multiply',
                                height: '25px',
                            }} 
                        />
                    </Box>
                    </ExpandableSection>
                </Grid>

                <Grid item xs={12} md={isInterestsExpanded ? 12 : 6}>
                    <ExpandableSection
                        onClick={toggleInterests}
                        initial={{ height: 0 }}
                        animate={{ height: isInterestsExpanded ? 'auto' : 120 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <AnimatePresence>
                        <Typography variant="h5" style={{ color: blueGrey[800], marginBottom: '15px' }}>Intérêts Personnels</Typography>
                        {
                            isInterestsExpanded ? 
                            (
                                <React.Fragment>
                                    <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                                        Passionné de technologie et de développement, je me suis récemment replongé dans mes études après une pause significative. Cette expérience a renforcé ma persévérance et m'a façonné en tant que professionnel.
                                    </Typography>
                                    <Typography variant="body1"sx={{ marginBottom: '15px' }}>
                                        En dehors du codage, je suis un fervent lecteur de light novels fantastiques et de mangas, et j'aime me détendre en regardant des séries, films ou en suivant des streams sur Twitch. Le sport joue également un rôle clé dans ma vie, m'aidant à décompresser et à gérer le stress.
                                    </Typography>
                                    <Typography variant="body1">
                                        Ouvert à de nouvelles opportunités dans le développement, je suis toujours disponible pour discuter de projets passionnants ou échanger sur nos lectures préférées.
                                    </Typography>
                                </React.Fragment>
                            ) : 
                            (
                                <Typography variant="body1">
                                    Passionné de technologie et de développement, je me suis récemment replongé dans mes études après une pause significative.
                                </Typography>
                            )
                        }
                        </AnimatePresence>
                        <Box textAlign="center" sx={{ marginTop: '10px' }}>
                        <img 
                            src={down_arrow}
                            alt="Expand arrow"
                            style={{ 
                                transform: isInterestsExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.8s ease-in-out',
                                mixBlendMode: 'multiply',
                                height: '25px',
                            }} 
                        />
                    </Box>
                    </ExpandableSection>
                </Grid>
            </Grid>

            <StyledPaper style={{ marginTop: '20px' }}>
                <Typography variant="h5" style={{ color: blueGrey[800], marginBottom: '15px' }}>Diplômes et Formations</Typography>
                <List>
                    <StyledCard>
                        <CardContent>
                            <ListItem>
                                <StyledListItemIcon>
                                    <img src={graduation} className="home_gif" alt="graduation" />
                                </StyledListItemIcon>
                                <ListItemText
                                    primary="Architecte de Systèmes d'Information, Epitech Paris"
                                    secondary="En cours, 5ème année - 2024"
                                />
                            </ListItem>
                        </CardContent>
                    </StyledCard>

                    <StyledCard>
                        <CardContent>
                            <ListItem>
                                <StyledListItemIcon>
                                    <img src={graduation} className="home_gif" alt="graduation" />
                                </StyledListItemIcon>
                                <ListItemText
                                    primary="Responsable de projet web et mobile, Epitech Paris"
                                    secondary="2022"
                                />
                            </ListItem>
                        </CardContent>
                    </StyledCard>

                    <ComicBookBioTeaser />

                    <StyledCard>
                        <CardContent>
                            <ListItem>
                                <StyledListItemIcon>
                                    <img src={school} className="home_gif" alt="school" />
                                </StyledListItemIcon>
                                <ListItemText
                                    primary="Expert en technologies de l'information, Epitech Paris"
                                    secondary="Septembre 2014 - Août 2016"
                                />
                            </ListItem>
                        </CardContent>
                    </StyledCard>

                    <StyledCard>
                        <CardContent>
                            <ListItem>
                                <StyledListItemIcon>
                                    <img src={school} className="home_gif" alt="school" />
                            </StyledListItemIcon>
                                <ListItemText
                                    primary="Baccalauréat Économique et Social, Lycée Pasteur, Neuilly-Sur-Seine"
                                    secondary="2013 - 2014"
                                />
                            </ListItem>
                        </CardContent>
                    </StyledCard>
                </List>
            </StyledPaper>
        </Container>
    );
}

export default BioPage;
