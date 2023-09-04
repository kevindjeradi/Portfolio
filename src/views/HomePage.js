import React from 'react';
import {
  Grid,
  Paper,
  List,
  ListItem,
  Link,
  Slide,
} from '@mui/material';
import CustomImageAvatar from '../components/CustomImageAvatar';
import SwipeableTextMobileStepper from '../components/SwipeableTextMobileStepper.js';
import '../style/HomePage.css';
import avatar from '../images/photo.jpg';

function HomePage() {
  return (
    <div className="HomePage">
      <header className="HomePage-header">

        <div className="center-container">
          <CustomImageAvatar size={200} imgPath={avatar} className="centered-avatar" />
          <div className="content">
              <h2>Kevin Djeradi</h2>
              <h2>Kevin Djeradi</h2>
            </div>
        </div>

        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={7} className="grid-left">
            <Paper sx={{backgroundColor:""}} elevation={0} className="avatar-container">
              <SwipeableTextMobileStepper></SwipeableTextMobileStepper>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={5} className="grid-right">
            <List component="nav" className="vertical-menu">
            <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={{ enter: 600, exit: 600 }}>
              <ListItem className="vertical-menu-item">
                <Link href="./Projects" underline="none" className='menu-text'>
                  Mes Projets</Link>
              </ListItem>
            </Slide>
            <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={{ enter: 600, exit: 600 }}>
              <ListItem className="vertical-menu-item">
                <Link href="#" underline="none" className='menu-text'>Menu Item 2</Link>
              </ListItem>
            </Slide>
            <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={{ enter: 600, exit: 600 }}>
              <ListItem className="vertical-menu-item">
                <Link href="#" underline="none" className='menu-text'>Menu Item 3</Link>
              </ListItem>
            </Slide>
              {/* Add more menu items as needed */}
            </List>
          </Grid>
        </Grid>
      </header>
    </div>
  );
}

export default HomePage;
