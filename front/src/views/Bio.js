import React from 'react';
import { Container, Typography, Avatar, Grid, Chip, Link, Paper, Box } from '@mui/material';

const BioPage = () => {
    return (
        <Container maxWidth="md">
            <Box style={{ textAlign: 'center', margin: '20px 0' }}>
                <Avatar
                    alt="Kevin Djeradi"
                    src="path_to_your_image.jpg"
                    style={{ width: '150px', height: '150px', margin: 'auto' }}
                />
                <Typography variant="h4" style={{ marginTop: '15px' }}>Kevin Hamza Djeradi</Typography>
                <Typography variant="subtitle1">Développeur Fullstack</Typography>
            </Box>

            <Typography variant="h6" style={{ marginTop: '20px' }}>À Propos</Typography>
            <Typography variant="body1">
                Développeur Flutter et React passionné, en 5ème année de mon parcours professionnel. Actuellement en alternance chez onePoint, je me spécialise dans la création d'applications mobiles et web.
            </Typography>

            <Typography variant="h6" style={{ marginTop: '20px' }}>Compétences</Typography>
            <Grid container spacing={1} style={{ marginBottom: '20px' }}>
                {['React.js', 'Material-UI', 'Node.js', 'Firebase', 'HTML5', 'CSS3', 'JavaScript'].map(skill => (
                    <Grid item key={skill}>
                        <Chip label={skill} />
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h6">Intérêts</Typography>
            <Typography variant="body1" style={{ marginBottom: '20px' }}>
                Quand je ne code pas, je me plonge dans la lecture de romans de fantasy et l'exploration du monde des mangas. Mon intérêt pour ces narrations sert non seulement de débouché créatif mais renforce également mon approche de résolution de problèmes dans le domaine technologique.
            </Typography>

            <Paper elevation={3} style={{ padding: '20px' }}>
                <Typography variant="h6">Contactez-Moi</Typography>
                <Typography variant="body1">
                    N'hésitez pas à me contacter pour des collaborations ou pour établir un contact professionnel.
                </Typography>
                <Typography variant="body1" style={{ marginTop: '10px' }}>
                    Email: <Link href="mailto:votre.email@example.com">votre.email@example.com</Link> 
                </Typography>
                <Typography variant="body1" style={{ marginTop: '5px' }}>
                    LinkedIn: <Link href="https://www.linkedin.com/in/kevin-djeradi-012067105/" target="_blank">Kevin Djeradi</Link>
                </Typography>
            </Paper>
        </Container>
    );
}

export default BioPage;
