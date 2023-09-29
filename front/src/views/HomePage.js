import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Paper, Grid } from '@mui/material';
import avatar from 'images/portrait.jpg';
import emploi from 'images/icones/emploi.gif';
import espion from 'images/icones/espion.gif';
import ecrans from 'images/icones/ecrans.gif';
import hadoken from 'images/gifs/hadoken.gif';
import akuma from 'images/gifs/akuma.gif';
import CustomImageAvatar from 'components/CustomImageAvatar';
import CustomAppBar from 'components/CustomAppBar';
import 'style/HomePage.css';

function HomePage() {
    const [isGifPlayed, setIsGifPlayed] = useState(false);
    const [hadokenUrl, setHadokenUrl] = useState(hadoken);
    const [showAkuma, setShowAkuma] = useState(false);
    const [akumaUrl, setAkumaUrl] = useState(akuma);
    const [showTypography, setShowTypography] = useState(false);
    const [showGrid, setShowGrid] = useState(false);
    
    useEffect(() => {
        setHadokenUrl(`${hadoken}?${new Date().getTime()}`);
        setAkumaUrl(`${akuma}?${new Date().getTime()}`);
    }, []);

    useEffect(() => {
      const timerId = setTimeout(() => {
        setShowTypography(true);
      }, 3500); // 3.5 seconds
  
      return () => clearTimeout(timerId); // Clear the timer when the component is unmounted
    }, []);

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

    useEffect(() => {
        const gifDuration = 5640; // Duration of the first GIF in milliseconds
        const timerId = setTimeout(() => {
            setIsGifPlayed(true);
            setShowAkuma(true); // Start the second GIF when the first one has finished
        }, gifDuration);

        return () => clearTimeout(timerId);
    }, []);

    useEffect(() => {
        if (showAkuma) {
            const akumaDuration = 2500; // actual duration of the second GIF in milliseconds
            const punchHappening = 1700; // actual duration of the second GIF in milliseconds

            const gifTimerId = setTimeout(() => {
                setShowAkuma(false); // Hide the second gif after it has been played
            }, akumaDuration);

            const punchTimerId = setTimeout(() => {
                setShowGrid(true); // Start the grid items animation when the punch lands
            }, punchHappening);

            return () => clearTimeout(gifTimerId, punchTimerId);
        }
    }, [showAkuma]);

    const routeDetails = [
        { route: "/Bio", icon: <img className="home_gif" src={espion} alt="Bio" />, title: "Bio" },
        { route: "/Projects", icon: <img className="home_gif" src={ecrans} alt="ecran" />, title: "Mes Projets" },
        { route: "/Experience", icon: <img className="home_gif" src={emploi} alt="Experience" />, title: "Mon Experience" }
    ];

    return (
        <>
            <div style={{ display: 'grid', gridTemplateRows: '64px 1fr auto', height: '100vh' }}>
                <CustomAppBar />
                <Grid className="firstGrid" container spacing={2} alignItems="center" style={{ height: '100%' }}>
                    <Grid item xs={12} sm={3} style={{ display: 'flex', justifyContent: 'center' }}>
                        {!isGifPlayed && (
                            <div className="gif-overlay" style={{ backgroundImage: `url(${hadokenUrl})` }}></div>
                        )}
                        {showAkuma && (
                            <div className="second-gif-container">
                                <img src={akumaUrl} alt="akuma" />
                            </div>
                        )}
                        {isGifPlayed && (
                            <div className={`inner-content specific-inner-content ${isGifPlayed ? 'slideDownSpecificInnerContent' : ''}`}>
                                <CustomImageAvatar borderRadius="10px" size={200} imgPath={avatar} className="centered-avatar" />
                                <Typography className="inner-title" variant="h6" style={{ fontWeight: 'bold' }}>
                                    Kevin Djeradi
                                </Typography>
                            </div>
                        )}
                    </Grid>

                    <Grid item xs={12} sm={9} className="text-center-on-small">
                        {showTypography && (
                            <Typography variant="h4" style={{ color: '#B1B1B1', textJustify: 'inter-word' }}>
                                En tant que développeur passionné,
                                je transforme mes idées en code,
                                cherchant constamment à créer des solutions plus efficaces et innovantes.
                            </Typography>
                        )}
                    </Grid>
                </Grid>

                <div style={{ padding: '0 24px' }}>
                <Grid container spacing={3} style={{ alignItems: 'flex-end', visibility: showGrid ? 'visible' : 'hidden' }}>
                        {routeDetails.map((detail, index) => (
                            <Grid 
                            item xs={12} sm={12} md={4} 
                            key={index}
                            id={index === routeDetails.length - 1 ? 'last-grid-item' : undefined} // Assign id to the last item
                            style={{ animationDelay: `${(routeDetails.length - 1 - index) * 0.3}s` }} // 0.5s delay between each item
                            className={showGrid ? 'slide-up-item' : ''}
                        >
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
                                                    <Typography className="hoverable-title" variant="h6" style={{ color: '#B1B1B1' }}>
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