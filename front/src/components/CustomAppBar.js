import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Typography, Button } from '@mui/material';
import accueil from 'images/icones/accueil.gif';

function CustomAppBar() {
    return (
        <AppBar position="static" color="inherit" elevation={0}>
            <Toolbar>
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <IconButton edge="start" color="inherit" aria-label="home">
                        <img style={{width: '30px', height: '30px', mixBlendMode: 'multiply'}} src={accueil} alt="Accueil" />
                    </IconButton>
                </Link>
                <Typography variant="h6" style={{ flexGrow: 1 }}></Typography>
                <Link to="/Contact" style={{ textDecoration: 'none', color: '#B1B1B1' }}>
                    <Button className="hoverable-btn" color="inherit" style={{ color: '#B1B1B1', textTransform: 'none' }}>
                        Contact
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
}

export default CustomAppBar;