import React from 'react';
import { Container, Typography, Avatar, Grid, Chip, Link, Paper, Box, useMediaQuery, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { teal, grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import SchoolIcon from '@mui/icons-material/School';

const StyledPaper = styled(Paper)({
    backgroundColor: grey[100],
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

const StyledCard = styled(Card)({
    marginBottom: '10px',
    backgroundColor: grey[50],
    borderRadius: '8px',
});

const BioPage = () => {
    const matches = useMediaQuery('(min-width:600px)');

    return (
        <Container maxWidth="lg">
            <Box style={{ textAlign: 'center', margin: '40px 0' }}>
                <Avatar
                    alt="Kevin Djeradi"
                    src="path_to_your_image.jpg"
                    style={{ width: matches ? '200px' : '150px', height: matches ? '200px' : '150px', margin: 'auto' }}
                />
                <Typography variant="h3" style={{ marginTop: '20px', color: teal[700] }}>Kevin Hamza Djeradi</Typography>
                <Typography variant="subtitle1" style={{ color: teal[500] }}>Développeur Fullstack</Typography>
            </Box>

            <StyledPaper>
                <Typography variant="h5" style={{ color: teal[700], marginBottom: '15px' }}>À Propos</Typography>
                <Typography variant="body1">
                    Développeur Fullstack web et mobile avec nottamenet 3 ans d'expériences en flutter, actuellement en alternance chez onePoint. Spécialisé dans la création d'applications mobiles et web, j'accorde une grande importance à l'expérience utilisateur et la performance. Mon parcours à Epitech m'a permis d'acquérir des compétences solides en programmation et de développer une approche pragmatique des projets technologiques.
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
                                    secondary="En cours, 5ème année"
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
                                    secondary="Depuis septembre 2021"
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

            <StyledPaper style={{ marginTop: '20px' }}>
                <Typography variant="h5" style={{ color: teal[700], marginBottom: '15px' }}>Compétences</Typography>
                <Grid container spacing={2}>
                    {['Flutter', 'React.js', 'Node.js', 'Laravel', 'Firebase', 'HTML5', 'CSS3', 'JavaScript', 'SQL', 'Git', 'C', 'PHP', 'MYSQL', 'Bootstrap'].map(skill => (
                        <Grid item key={skill}>
                            <Chip label={skill} variant="outlined" color="primary" />
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
