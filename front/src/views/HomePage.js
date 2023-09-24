import { React, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Paper, Grid } from '@mui/material';
import avatar from 'images/portrait.jpg';
import emploi from 'images/icones/emploi.gif';
import espion from 'images/icones/espion.gif';
import ecrans from 'images/icones/ecrans.gif';
import CustomImageAvatar from 'components/CustomImageAvatar';
import CustomAppBar from 'components/CustomAppBar';
import 'style/HomePage.css';

function HomePage() {

    useEffect(() => {
        if (window.innerWidth <= 900) {
            document.body.style.overflow = 'auto';  // enable scrolling for small screens
        } else {
            document.body.style.overflow = 'hidden';  // disable scrolling for larger screens
        }
    
        return () => {
            document.body.style.overflow = 'auto'; // reset to default when component unmounts
        }
    }, []);

    const routeDetails = [
        { route: "/Bio", icon: <img className="home_gif" src={espion} alt="Bio" />, title: "Bio" },
        { route: "/Projects", icon: <img className="home_gif" src={ecrans} alt="ecran" />, title: "Mes Projets" },
        { route: "/Experience", icon: <img className="home_gif" src={emploi} alt="Experience" />, title: "Mon Experience" }
    ];

    return (
        <>
            <div style={{ display: 'grid', gridTemplateRows: '64px 1fr auto', height: '100vh' }}>
                <CustomAppBar />

                <Grid className='firstGrid' container spacing={2} alignItems="center" style={{ height: '100%' }}>
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
                            <Grid item xs={12} sm={12} md={4} key={index}>
                                <Link to={detail.route} style={{ textDecoration: 'none' }}>
                                    <div className="grid-item-holder">
                                        <Paper
                                            elevation={0}
                                            className="grid-item-paper hoverable-grid-item"
                                            style={{ background: '#F4F3F1' }}
                                        >
                                            <Paper elevation={1} className="inner-paper" style={{ background: '#EFEFEF' }}>
                                                <div className="inner-content">
                                                    {detail.icon}
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