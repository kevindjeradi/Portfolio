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
    const [startFade, setStartFade] = useState(false);
    const [hadokenUrl, setHadokenUrl] = useState(hadoken);
    const [akumaUrl, setAkumaUrl] = useState(akuma);
    const [playHadoken] = useState(Math.random() < 0.5);
    const [areItemsSlidUp, setAreItemsSlidUp] = useState(false);
    const [punched, setPunched] = useState(false);
    const [displayedText, setDisplayedText] = useState('');

    const routeDetails = [
        { route: "/Bio", icon: <img className="home_gif" src={espion} alt="Bio" />, title: "Bio" },
        { route: "/Projects", icon: <img className="home_gif" src={ecrans} alt="ecran" />, title: "Mes Projets" },
        { route: "/Experiences", icon: <img className="home_gif" src={emploi} alt="Experience" />, title: "Mon Experience" }
    ];

    useEffect(() => {
        const fullText = "En tant que développeur passionné, je transforme mes idées en code, cherchant constamment à créer des solutions plus efficaces et innovantes.";
        let index = 0;
        
        if (isGifPlayed) {
            const intervalId = setInterval(() => {
                if (index <= fullText.length) {
                    setDisplayedText(fullText.substring(0, index));
                    index++;
                } else {
                    clearInterval(intervalId);
                }
            }, 50);
            return () => clearInterval(intervalId);
        } else {
            setDisplayedText('');
        }
    }, [isGifPlayed]);

    useEffect(() => {
        if (punched) {
                setAreItemsSlidUp(true);
        }
    }, [punched]);

    useEffect(() => {
        setHadokenUrl(`${hadoken}?${new Date().getTime()}`);
        setAkumaUrl(`${akuma}?${new Date().getTime()}`);
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 900) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    useEffect(() => {
        const gifDuration = playHadoken ? 3420 : 2500;
        const fadeAnimationDuration = gifDuration - 500;

        const timerId = setTimeout(() => {
            setIsGifPlayed(true);
        }, gifDuration);

        const fadeTimerId = setTimeout(() => {
            setStartFade(true);
        }, fadeAnimationDuration);

        return () => clearTimeout(timerId, fadeTimerId);
    }, [playHadoken]);

    useEffect(() => {
        const Duration = 1500;
        const punchTimerId = setTimeout(() => {
            setPunched(true);
        }, Duration);
        return () => clearTimeout(punchTimerId);

    }, [playHadoken]);

    return (
        <>
            <div style={{ display: 'grid', gridTemplateRows: '64px 1fr auto', height: '100vh' }}>
                <CustomAppBar />
                <Grid 
                    className={`firstGrid ${playHadoken && isGifPlayed ? 'scale-in-right' : ''}`} 
                    container spacing={2} 
                    alignItems="center" 
                    style={{ height: '100%' }}
                >
                    <Grid item xs={12} sm={3} style={{ display: 'flex', justifyContent: 'center' }}>
                        {!isGifPlayed && playHadoken && (
                            <div className={`ryu-overlay ${startFade ? 'fade-out' : ''}`}  style={{ backgroundImage: `url(${hadokenUrl})` }}></div>
                        )}
                        {!isGifPlayed && !playHadoken && (
                            <div className="akuma-container" style={{ backgroundImage: `url(${akumaUrl})` }}>
                            </div>
                        )}
                        {isGifPlayed && (
                            <div className={`inner-content ${areItemsSlidUp && !playHadoken ? 'bounce-up-item' : ''}`}
                                style={{ visibility: playHadoken || areItemsSlidUp ? 'visible' : 'hidden' }}>
                                <CustomImageAvatar borderRadius="10px" size={200} imgPath={avatar} className="centered-avatar" />
                                <Typography className="inner-title" variant="h6" style={{ fontWeight: 'bold' }}>
                                    Kevin Djeradi
                                </Typography>
                            </div>
                        )}
                    </Grid>
                    <Grid item xs={12} sm={9} className={`text-center-on-small`}>
                        {isGifPlayed && (
                            <Typography variant="h4" 
                                style={{ color: '#B1B1B1', textJustify: 'inter-word', visibility: playHadoken || areItemsSlidUp ? 'visible' : 'hidden' }}
                                className={`${areItemsSlidUp && !playHadoken ? 'bounce-up-item' : ''}`}
                            >
                                {displayedText}<span className="typing-cursor">|</span>
                            </Typography>
                        )}
                    </Grid>
                </Grid>
                <div style={{ padding: '0 24px' }}>
                    <Grid container spacing={3} style={{ alignItems: 'flex-end', visibility: playHadoken ? isGifPlayed ? 'visible' : 'hidden' : punched ? 'visible' : 'hidden'}}
                        className={`${playHadoken && isGifPlayed ? 'scale-in-right' : ''}`}
                    >
                        {routeDetails.map((detail, index) => (
                            <Grid 
                                item xs={12} sm={12} md={4} 
                                key={index}
                                id={index === routeDetails.length - 1 ? 'last-grid-item' : undefined}
                                style={{ animationDelay: `${(routeDetails.length - 1 - index) * 0.3}s` }}
                                className={!playHadoken && punched ? 'slide-up-item' : ''}
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