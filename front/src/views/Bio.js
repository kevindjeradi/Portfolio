import React, { useState, useEffect } from 'react';
import {
  Container, Typography, Avatar, Grid, Link, Paper, Box, useMediaQuery, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Tooltip
} from '@mui/material';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button
  } from '@mui/material';  
import { useNavigate } from 'react-router-dom';
import { blueGrey, grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import 'style/Bio.css';
import WarningIcon from '@mui/icons-material/Warning';
import { motion, AnimatePresence } from 'framer-motion';
import bioPicture from 'images/bio_picture.PNG'
import comicPreview from 'images/bio/comic_preview.png'
import school from 'images/icones/school.gif';
import graduation from 'images/icones/graduation-cap.gif';
import linkedin from 'images/icones/linkedin.gif';
import github from 'images/icones/github.gif';
import mail from 'images/icones/mail.gif';
import down_arrow from 'images/icones/arrow-down.gif';
import css from 'images/stack/css.png';
import firebase from 'images/stack/firebase.png';
import flutter from 'images/stack/flutter.png';
import html from 'images/stack/html.png';
import javascript from 'images/stack/javascript.png';
import laravel from 'images/stack/laravel.png';
import mongodb from 'images/stack/mongodb.png';
import node from 'images/stack/node.png';
import postgresql from 'images/stack/postgresql.png';
import react from 'images/stack/react.png';
import sql from 'images/stack/sql.png';
import git from 'images/stack/git.png';
import c from 'images/stack/c.png';
import php from 'images/stack/php.png';
import mysql from 'images/stack/mysql.png';
import bootstrap from 'images/stack/bootstrap.png';

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

const CustomDialog = styled(Dialog)({
    '& .MuiDialog-paper': {
    backgroundColor: grey[100],
    borderRadius: '10px',
    padding: '24px',
    color: blueGrey[800],
    },
});

const CustomDialogTitle = styled(DialogTitle)({
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: '16px',
});

const CustomDialogContent = styled(DialogContent)({
    marginBottom: '24px',
});

const CustomDialogActions = styled(DialogActions)({
    justifyContent: 'center',
    padding: '8px 24px',
});

const ActionButton = styled(Button)({
    fontWeight: 'bold',
    color: blueGrey[700],
    '&:hover': {
        backgroundColor: blueGrey[50],
    },
});

const ComicBookBioTeaser = () => {
    const navigate = useNavigate();
    const matches = useMediaQuery('(min-width:600px)');
    const [isHovering, setIsHovering] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleContinue = () => {
        setOpenDialog(false);
        navigate('/ComicBookBio');
    };

    return (
        <>
            {!openDialog ? (
                <Tooltip title="Découvrez ce qu'il s'est passé" placement="top">
                    <Box
                        onMouseEnter={() => setIsHovering(true)}
                        onMouseLeave={() => setIsHovering(false)}
                        onClick={handleOpenDialog}
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
            ) : (
                <Box
                    onClick={handleOpenDialog}
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
            )}

            <CustomDialog open={openDialog} onClose={handleCloseDialog}>
                <CustomDialogTitle id="alert-dialog-title">
                    <WarningIcon color="error" style={{ verticalAlign: 'middle', marginRight: '8px' }} />
                    Attention
                </CustomDialogTitle>
                <CustomDialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Pour vous prévenir. L'histoire sur la page suivante est très personnelle et est triste.
                    </DialogContentText>
                </CustomDialogContent>
                <CustomDialogActions>
                    <ActionButton onClick={handleContinue} autoFocus>
                        Continuer
                    </ActionButton>
                </CustomDialogActions>
            </CustomDialog>
        </>
    );
};

const ContactRow = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '10px',
    padding: '10px 0',
}));

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
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(0.5),
    },
}));

const ContactIcon = styled(Box)(({ theme }) => ({
    marginRight: '10px',
    display: 'flex',
    alignItems: 'center',
    
}));

const ContactText = styled(Typography)(({ theme }) => ({
    color: blueGrey[700],
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
        fontSize: '0.8rem',
    },
}));

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

const skillImages = {
    'Flutter': flutter,
    'React.js': react,
    'Node.js': node,
    'Laravel': laravel,
    'Firebase': firebase,
    'HTML5': html,
    'CSS3': css,
    'JavaScript': javascript,
    'SQL': sql,
    'Git': git,
    'C': c,
    'PHP': php,
    'MYSQL': mysql,
    'MongoDB': mongodb,
    'PostgreSQL': postgresql,
    'Bootstrap': bootstrap,
};

const BioPage = () => {
    const matches = useMediaQuery('(min-width:600px)');
    const [isAboutExpanded, setAboutExpanded] = useState(false);
    const [isInterestsExpanded, setInterestsExpanded] = useState(false);
    const [responsiveHeight, setResponsiveHeight] = useState('120px');

    const toggleAbout = () => setAboutExpanded(!isAboutExpanded);
    const toggleInterests = () => setInterestsExpanded(!isInterestsExpanded);

    const updateHeight = () => {
        if (window.innerWidth < 480) {
            setResponsiveHeight('20vh');
        } else if (window.innerWidth < 900) {
            setResponsiveHeight('15vh');
        }
        else {
            setResponsiveHeight('18vh');
        }
    };

    useEffect(() => {
        window.addEventListener('resize', updateHeight);
        updateHeight();
        return () => window.removeEventListener('resize', updateHeight);
    }, []);

    return (
        <Container maxWidth="lg">
            <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', margin: '40px 0', padding: '20px', borderRadius: '20px', backgroundColor: blueGrey[50] }}>
                <Avatar
                    alt="Kevin Djeradi"
                    src={bioPicture}
                    style={{ width: matches ? '200px' : '150px', height: matches ? '200px' : '150px', margin: 'auto', border: `4px solid ${blueGrey[300]}` }}
                />
                <Typography variant="h3" style={{ marginTop: '20px', color: blueGrey[900] }}>Kevin Hamza Djeradi</Typography>
                <Typography variant="subtitle1" style={{ color: blueGrey[700] }}>Développeur Mobile Flutter et web Fullstack</Typography>

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
                        <Grid item key={skill} xs={6} sm={4} md={3}>
                            <Box textAlign="center">
                                <img src={skillImages[skill]} alt={skill} style={{ height: '40px', marginBottom: '10px' }}/>
                                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>{skill}</Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </StyledPaper>

            <Grid container spacing={2}>
                <Grid item xs={12} md={isAboutExpanded ? 12 : 6} className={isAboutExpanded ? 'grid-expanded' : 'grid-collapsed'}>                    <ExpandableSection
                        onClick={toggleAbout}
                        initial={{ height: 0 }}
                        animate={{ height: isAboutExpanded ? 'auto' : responsiveHeight }}
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

                <Grid item xs={12} md={isInterestsExpanded ? 12 : 6} className={isInterestsExpanded ? 'grid-expanded' : 'grid-collapsed'}>
                    <ExpandableSection
                        onClick={toggleInterests}
                        initial={{ height: 0 }}
                        animate={{ height: isInterestsExpanded ? 'auto' : responsiveHeight }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        <AnimatePresence>
                        <Typography variant="h5" style={{ color: blueGrey[800], marginBottom: '15px' }}>Intérêts Personnels</Typography>
                        {
                            isInterestsExpanded ? 
                            (
                                <React.Fragment>
                                    <Typography variant="body1" sx={{ marginBottom: '15px' }}>
                                    🚀 Je suis un développeur passionné par la technologie, avec une petite obsession pour la lecture, en particulier les light novels fantastiques et les mangas. Après une pause de 7 ans due à des soucis de santé de proches, j'ai décidé de reprendre mes études il y a 2 ans pour devenir développeur.
                                    </Typography>
                                    <Typography variant="body1"sx={{ marginBottom: '15px' }}>
                                    💪 Mon parcours m'a appris la valeur de la persévérance. J'ai surmonté de nombreux défis personnels qui ont façonnés l'homme que je suis devenu.
                                    </Typography>
                                    <Typography variant="body1"sx={{ marginBottom: '15px' }}>
                                    📖 Quand je ne suis pas en train de coder, vous me trouverez en train de bouquiner, de mater des séries et films ou de suivre des streams sur Twitch.
                                    </Typography>
                                    <Typography variant="body1"sx={{ marginBottom: '15px' }}>
                                    🏋️ En dehors de ça, je suis un amateur de sport, une façon pour moi de décompresser et d'évacuer le stress cumulé.
                                    </Typography>
                                    <Typography variant="body1">
                                    🌐 Je suis ouvert aux nouvelles opportunités dans le domaine du développement. N'hésitez pas à me contacter pour discuter de projets, d'offres d'emploi ou d'échanger des recommandations de lecture.
                                    </Typography>
                                </React.Fragment>
                            ) : 
                            (
                                <Typography variant="body1">
                                    Passionné de technologie et de développement, j'ai repris mes études après une longue pause.
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
