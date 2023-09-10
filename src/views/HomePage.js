import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button, Paper, Grid } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import '../style/HomePage.css';
import avatar from '../images/portrait.jpg';
import CustomImageAvatar from '../components/CustomImageAvatar';
import useVanta from '../components/useVanta';
import IconWrapper from '../components/IconWrapper';

function HomePage() {
    useVanta();

    useEffect(() => {
        if (window.innerWidth <= 600) {
            document.body.style.overflow = 'auto';  // enable scrolling for small screens
        } else {
            document.body.style.overflow = 'hidden';  // disable scrolling for larger screens
        }
    
        return () => {
            document.body.style.overflow = 'auto'; // reset to default when component unmounts
        }
    }, []);

    const routeDetails = [
        { route: "/Bio", icon: <PersonIcon fontSize="large" />, title: "Bio" },
        { route: "/Projects", icon: <WorkIcon fontSize="large" />, title: "Mes Projets" },
        { route: "/Experience", icon: <SchoolIcon fontSize="large" />, title: "Mon Experience" }
    ];

    return (
        <>
            <div id="vanta-bg"></div>
            <div style={{ display: 'grid', gridTemplateRows: '64px 1fr auto', height: '100vh' }}>
                <AppBar position="static" color="inherit" elevation={0}>
                    <Toolbar>
                        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                            <IconButton edge="start" color="inherit" aria-label="home">
                                <HomeIcon />
                            </IconButton>
                        </Link>
                        <Typography variant="h6" style={{ flexGrow: 1 }}></Typography>
                        <Link to="/Contact" style={{ textDecoration: 'none', color: '#B1B1B1' }}>
                            <Button color="inherit" style={{ color: '#B1B1B1', textTransform: 'none' }}>
                                Contact
                            </Button>
                        </Link>
                    </Toolbar>
                </AppBar>

                <Grid className='testt' container spacing={2} alignItems="center" style={{ height: '100%' }}>
                    <Grid item xs={12} sm={3} style={{ display: 'flex', justifyContent: 'center' }}>
                        <div className="inner-content">
                            <CustomImageAvatar borderRadius="10px" size={200} imgPath={avatar} className="centered-avatar" />
                            <Typography className="inner-title" variant="h6" style={{ fontWeight: 'bold' }}>
                                Kevin Djeradi
                            </Typography>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={9} className="text-center-on-small">
                        <Typography variant="h4" style={{ color: '#B1B1B1', textJustify: 'inter-word' }}>
                            En tant que développeur passionné,
                            je transforme mes idées en code,
                            cherchant constamment à créer des solutions plus efficaces et innovantes.
                        </Typography>
                    </Grid>
                </Grid>

                <div style={{ padding: '0 24px' }}>
                    <Grid container spacing={3} style={{ alignItems: 'flex-end' }}>
                        {routeDetails.map((detail, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Link to={detail.route} style={{ textDecoration: 'none' }}>
                                <div className="grid-item-holder">
                <Paper
                    elevation={0}
                    className="grid-item-paper hoverable-grid-item"
                    style={{ background: '#F4F3F1' }}
                >
                    <Paper elevation={1} className="inner-paper" style={{ background: '#EFEFEF' }}>
                        <div className="inner-content">
                            <IconWrapper>{detail.icon}</IconWrapper>
                            <Typography className="inner-title" variant="h6">
                                {detail.title}
                            </Typography>
                        </div>
                    </Paper>
                </Paper>
            </div>
                                </Link>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </>
    );
}

export default HomePage;