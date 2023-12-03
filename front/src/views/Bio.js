import React from 'react';
import { Container, Typography, Avatar, Grid, Chip, Link, Paper } from '@mui/material';

const BioPage = () => {
    return (
        <Container maxWidth="md">
            <Grid container spacing={3} alignItems="center" justifyContent="center" style={{ marginTop: '20px' }}>
                <Grid item xs={12} sm={6}>
                    <Avatar
                        alt="Kevin Djeradi"
                        src="path_to_your_image.jpg"
                        style={{ width: '150px', height: '150px' }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h4">Kevin Hamza Djeradi</Typography>
                    <Typography variant="subtitle1">Fullstack Developer</Typography>
                </Grid>
            </Grid>

            <Typography variant="h6" style={{ marginTop: '20px' }}>About Me</Typography>
            <Typography variant="body1">
                Passionate flutter and React developer with a strong foundation in full-stack mobile and web development. Currently in my 5th year, I'm engaged in an internship with onepoint, where I continue to expand my skills and contribute to impactful projects.
            </Typography>

            <Typography variant="h6" style={{ marginTop: '20px' }}>Skills</Typography>
            <Grid container spacing={1}>
                {/* List of skills */}
                {['React.js', 'Material-UI', 'Node.js', 'Firebase', 'HTML5', 'CSS3', 'JavaScript'].map(skill => (
                    <Grid item key={skill}>
                        <Chip label={skill} />
                    </Grid>
                ))}
            </Grid>

            <Typography variant="h6" style={{ marginTop: '20px' }}>Interests</Typography>
            <Typography variant="body1">
                Outside of coding, I enjoy reading, especially fantasy light novels and mangas. This passion fuels my creativity and problem-solving skills in the tech world.
            </Typography>

            <Paper elevation={3} style={{ marginTop: '20px', padding: '20px' }}>
                <Typography variant="body1">
                    Feel free to connect with me on <Link href="https://www.linkedin.com/in/kevin-djeradi-012067105/" target="_blank">LinkedIn</Link>.
                </Typography>
            </Paper>
        </Container>
    );
}

export default BioPage;
