import React from 'react';
import {
    Container, Typography, Avatar, Grid, Chip, Link, Paper, Box, useMediaQuery, Card, CardContent, List, ListItem, ListItemIcon, ListItemText
} from '@mui/material';
import { teal, deepPurple, amber, lightBlue } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';
import { motion } from 'framer-motion';

const StyledPaper = styled(Paper)({
    backgroundColor: lightBlue[50],
    padding: '20px',
    borderRadius: '20px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    margin: '20px 0',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.02)',
    },
});

const StyledCard = styled(Card)({
    marginBottom: '15px',
    backgroundColor: amber[50],
    borderRadius: '15px',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
        transform: 'scale(1.02)',
    },
});

const BioPage = () => {
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Container maxWidth="lg">
            <Box component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} style={{ textAlign: 'center', margin: '40px 0', padding: '20px', borderRadius: '20px', background: `linear-gradient(45deg, ${teal[300]}, ${deepPurple[300]})` }}>
                <Avatar
                    alt="Kevin Djeradi"
                    src="path_to_your_image.jpg"
                    style={{ width: matches ? '200px' : '150px', height: matches ? '200px' : '150px', margin: 'auto', border: `4px solid ${teal[500]}` }}
                />
                <Typography variant="h3" style={{ marginTop: '20px', color: 'white' }}>Kevin Hamza Djeradi</Typography>
                <Typography variant="subtitle1" style={{ color: amber[200] }}>Développeur Fullstack</Typography>
            </Box>

            <StyledPaper>
                <Typography variant="h5" style={{ color: teal[700], marginBottom: '15px' }}>À Propos</Typography>
                <Typography variant="body1">
                    Développeur Fullstack web et mobile avec notamment 3 ans d'expériences en flutter, actuellement en alternance chez onePoint. Spécialisé dans la création d'applications mobiles et web, j'accorde une grande importance à l'expérience utilisateur et la performance. Mon parcours à Epitech m'a permis d'acquérir des compétences solides en programmation et de développer une approche pragmatique des projets technologiques.
                </Typography>
            </StyledPaper>

            <StyledPaper style={{ marginTop: '20px' }}>
                <Typography variant="h5" style={{ color: teal[700], marginBottom: '15px' }}>Diplômes et Formations</Typography>
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
                <Typography variant="h5" style={{ color: teal[700], marginBottom: '15px' }}>Compétences</Typography>
                <Grid container spacing={2}>
                    {['Flutter', 'React.js', 'Node.js', 'Laravel', 'Firebase', 'HTML5', 'CSS3', 'JavaScript', 'SQL', 'Git', 'C', 'PHP', 'MYSQL', 'Bootstrap'].map(skill => (
                        <Grid item key={skill}>
                            <Chip label={skill} variant="filled" color="primary" style={{ fontWeight: 'bold' }} />
                        </Grid>
                    ))}
                </Grid>
            </StyledPaper>

            <StyledPaper style={{ marginTop: '20px' }}>
                <Typography variant="h5" style={{ color: teal[700], marginBottom: '15px' }}>Intérêts Personnels</Typography>
                <Typography variant="body1">
                    Amateur de lecture, innovation technologique et voyages, ces passions alimentent ma créativité et mon approche innovante dans le développement technologique.
                </Typography>
            </StyledPaper>

            <StyledPaper style={{ marginTop: '20px' }}>
                <Typography variant="h5" style={{ color: teal[700], marginBottom: '15px' }}>Contactez-Moi</Typography>
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
