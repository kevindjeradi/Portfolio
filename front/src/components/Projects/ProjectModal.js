// ProjectModal.js

import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import ProjectDescription from 'components/Projects/ProjectDescription';
import StackToImage from 'components/StackToImage';
import SocialButton from 'components/SocialButton';

const childElementMargin = {
    marginBottom: '30px',
};

const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: 1, // take up all available space
    position: 'relative', // set a context for the absolute positioning of the tags
};

const socialAndTagsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '@media (max-width: 600px)': {
        flexDirection: 'column',
        alignItems: 'center',
    },
};


const socialButtonStyle = {
    margin: '0 10px',
    '@media (max-width: 600px)': {
        marginBottom: '20px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
};


const tagsContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 10px',
    '@media (max-width: 600px)': {
        width: '100%',
        justifyContent: 'center',
    },
};


const tagStyle = {
    display: 'inline-block',
    padding: '5px 10px',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '90vh', // 90% of the viewport height
    overflowY: 'auto', // Enable vertical scrolling
    border: '2px solid #97B5C7',
    color: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // subtle shadow for depth
    backdropFilter: 'blur(10px)', // this will give the frosted glass effect
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // semi-transparent white
    pt: 2,
    px: 4,
    pb: 3,
};

function ProjectModal({ open, handleClose, item }) {
    // Access the current theme
    const theme = useTheme();

    // Determine screen size
    const isXs = useMediaQuery(theme.breakpoints.down('xs'));
    const isSm = useMediaQuery(theme.breakpoints.down('sm'));

    if (!item) {
        return null;
    }

    // Adjust modal width based on screen size
    const modalWidth = isXs ? '90%' : isSm ? '70%' : 500;

    return (
        <Backdrop open={open} sx={{ backdropFilter: 'blur(3px)', backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                closeAfterTransition // This ensures the modal closes after the transition ends
            >
                <Fade in={open} timeout={300}>
                    <Box sx={{ ...style, width: modalWidth, display: 'flex', flexDirection: 'column' }}>
                        <div style={contentContainerStyle}>
                            <h2 id="parent-modal-title" style={{ textAlign: 'center' }}>{item.title}</h2>
                            <div style={childElementMargin}>
                                <StackToImage stack={item.stack} />
                            </div>
                            <img
                                src={`${item.img}?w=350&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=350&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                                style={{
                                    width: '100%',
                                    maxHeight: '450px',
                                    objectFit: 'contain',
                                    marginBottom: '20px'
                                }}
                            />
                            <div style={childElementMargin}>
                                <ProjectDescription item={item} />
                            </div>
                            <div style={socialAndTagsContainerStyle}>
                                <div style={socialButtonStyle}>
                                    <SocialButton
                                        position="left"
                                        svgPath={<path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"/>}
                                        linkColor="black"
                                        hoverBackgroundColor="black"
                                        hoverColor="white"
                                        href={item.github}
                                    />
                                </div>
                                <div style={tagsContainerStyle}>
                                    {item.tags.map((tag, index) => (
                                        <span key={index} style={tagStyle}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </Backdrop>
    );
}

export default ProjectModal;