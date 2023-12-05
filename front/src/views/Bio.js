import React, { useState } from 'react';
import {
  Container, Typography, Avatar, Grid, Chip, Link, Paper, Box, useMediaQuery, Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Tooltip
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { blueGrey, grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';
import comicPreview from 'images/bio/comic_preview.png'

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
            style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', cursor: 'pointer', margin: '20px 0' }}
        >
            <Typography variant="body2" style={{ fontStyle: 'italic', color: blueGrey[600], textAlign: 'center' }}>
                Vous avez remarqué un trou dans mon parcours ? J'ai une histoire à raconter.
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

const BioPage = () => {
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Container maxWidth="lg">
            <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ textAlign: 'center', margin: '40px 0', padding: '20px', borderRadius: '20px', backgroundColor: blueGrey[50] }}>
                <Avatar
                    alt="Kevin Djeradi"
                    src="path_to_your_image.jpg"
                    style={{ width: matches ? '200px' : '150px', height: matches ? '200px' : '150px', margin: 'auto', border: `4px solid ${blueGrey[300]}` }}
                />
                <Typography variant="h3" style={{ marginTop: '20px', color: blueGrey[900] }}>Kevin Hamza Djeradi</Typography>
                <Typography variant="subtitle1" style={{ color: blueGrey[700] }}>Développeur Fullstack</Typography>
            </Box>

            <StyledPaper>
                <Typography variant="h5" style={{ color: blueGrey[800], marginBottom: '15px' }}>À Propos</Typography>
                <Typography variant="body1">
                    Développeur Fullstack web et mobile, actuellement en alternance chez onePoint depuis bientôt 3 ans.
                </Typography>
                <Typography variant="body1">
                    Spécialisé dans la création d'applications mobiles et web, j'accorde une grande importance à l'expérience utilisateur et la performance.
                </Typography>
                <Typography variant="body1">
                    Mon parcours à Epitech m'a permis d'acquérir des compétences solides en programmation et de développer une approche pragmatique et realiste des projets technologiques.
                </Typography>
            </StyledPaper>

            <StyledPaper style={{ marginTop: '20px' }}>
                <Typography variant="h5" style={{ color: blueGrey[800], marginBottom: '15px' }}>Diplômes et Formations</Typography>
                <List>
                    <StyledCard>
                        <CardContent>
                            <ListItem>
                                <ListItemIcon>
                                    <SchoolIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Architecte de Systèmes d’Information, Epitech Paris"
                                    secondary="En cours, 5ème année - 2024"
                                />
                            </ListItem>
                        </CardContent>
                    </StyledCard>

                    <StyledCard>
                        <CardContent>
                            <ListItem>
                                <ListItemIcon>
                                    <SchoolIcon color="primary" />
                                </ListItemIcon>
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
                                <ListItemIcon>
                                    <SchoolIcon color="primary" />
                                </ListItemIcon>
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
                                <ListItemIcon>
                                    <SchoolIcon color="primary" />
                                </ListItemIcon>
                                <ListItemText
                                    primary="Baccalauréat Économique et Social, Lycée Pasteur, Neuilly-Sur-Seine"
                                    secondary="2013 - 2014"
                                />
                            </ListItem>
                        </CardContent>
                    </StyledCard>
                </List>
            </StyledPaper>

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

            <StyledPaper style={{ marginTop: '20px' }}>
                <Typography variant="h5" style={{ color: blueGrey[800], marginBottom: '15px' }}>Intérêts Personnels</Typography>
                <Typography variant="body1">
                    Amateur de lecture, innovation technologique et voyages, ces passions alimentent ma créativité et mon approche innovante dans le développement technologique.
                </Typography>
            </StyledPaper>

            <StyledPaper style={{ marginTop: '20px' }}>
                <Typography variant="h5" style={{ color: blueGrey[800], marginBottom: '15px' }}>Contactez-Moi</Typography>
                <Typography variant="body1">
                    Pour des collaborations, des projets ou des opportunités professionnelles, n'hésitez pas à me contacter.
                </Typography>
                <Typography variant="body1" style={{ marginTop: '10px' }}>
                    Email: <Link href="mailto:votre.email@example.com">votre.email@example.com</Link>
                </Typography>
                <Typography variant="body1" style={{ marginTop: '5px' }}>
                    LinkedIn: <Link href="https://www.linkedin.com/in/kevin-djeradi-012067105/" target="_blank">Kevin Djeradi</Link>
                </Typography>
            </StyledPaper>
        </Container>
    );
}

export default BioPage;
