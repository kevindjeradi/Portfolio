import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { v4 as uuidv4 } from 'uuid';
import useMouseFocus from 'utils/UseMouseFocus';
import 'style/ProjectList.css';
import ProjectModal from 'components/Projects/ProjectModal';

export default function ProjectsList() {
  const [activeTags, setActiveTags] = React.useState([]);
  const [numCols, setNumCols] = React.useState(3); // Initial number of columns
  const [open, setOpen] = React.useState(false); // State for modal
  const [selectedItem, setSelectedItem] = React.useState(null);

  // Remove blue accessibilty outline on modals
  useMouseFocus();

  const handleItemOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateCols = () => {
    if (window.innerWidth >= 992) {
      setNumCols(3);
    } else if (window.innerWidth >= 768) {
      setNumCols(2);
    } else {
      setNumCols(1);
    }
  };

  React.useEffect(() => {
    // Add event listener to update columns on resize
    window.addEventListener('resize', updateCols);
    // Initialize columns
    updateCols();
    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateCols);
    };
  }, []);

  const handleTagClick = (tag) => {
    if (activeTags.includes(tag)) {
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      setActiveTags([...activeTags, tag]);
    }
  };

  const isTagActive = (tag) => activeTags.includes(tag);

  const buttonListStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '40px',
    maxWidth: '800px',
    margin: '0 auto',
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: '#A2A0A0',
    margin: '0 20px 10px 20px'
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#97B5C7',
    color: '#ffffff',
    fontWeight: 'bold'
  };

  const filteredItems = itemData.filter((item) => {
    return activeTags.length === 0 || activeTags.every((tag) => item.tags.includes(tag));
  });

  return (
    <div>
      <div style={buttonListStyle}>
        <Button
          style={isTagActive('Professionnel') ? activeButtonStyle : buttonStyle}
          onClick={() => handleTagClick('Professionnel')}
        >
          Professionnel
        </Button>
        <Button
          style={isTagActive('Personnel') ? activeButtonStyle : buttonStyle}
          onClick={() => handleTagClick('Personnel')}
        >
          Personnel
        </Button>
        <Button
          style={isTagActive('Front') ? activeButtonStyle : buttonStyle}
          onClick={() => handleTagClick('Front')}
        >
          Front
        </Button>
        <Button
          style={isTagActive('Back') ? activeButtonStyle : buttonStyle}
          onClick={() => handleTagClick('Back')}
        >
          Back
        </Button>
        <Button
          style={isTagActive('Mobile') ? activeButtonStyle : buttonStyle}
          onClick={() => handleTagClick('Mobile')}
        >
          Mobile
        </Button>
      </div>

      <ImageList cols={numCols} gap={36}>
        {filteredItems.map((item) => (
          <ImageListItem
            key={uuidv4()}
            className="imageListItem"
            style={{borderRadius:'10px', padding: '30px', backgroundColor: '#F4F3F1', color: '#648AA0'}}
            onClick={() => handleItemOpen(item)}
          >
            <img
              src={`${item.img}?w=350&fit=crop&auto=format`}
              srcSet={`${item.img}?w=350&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <div
              style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                background: 'rgba(255, 255, 255, 0.6)',
                color: '#A2A0A0',
                padding: '4px 8px',
                fontSize: '12px',
              }}
            >
              {item.tags.join(', ')}
            </div>
            <ImageListItemBar
              title={item.title}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
      {selectedItem && <ProjectModal open={open} handleClose={handleClose} item={selectedItem} />}
    </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Hakedj.be',
    stack: ['React', 'Mui', 'NodeJs', 'MongoDb'],
    tags: ['Personnel', 'Front', 'Back'],
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Projet 2',
    stack: ['NodeJs', 'MongoDb', 'Express'],
    tags: ['Personnel', 'Back'],
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Projet 3',
    stack: ['HTML', 'CSS', 'Javascript'],
    tags: ['Front'],
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Projet 4',
    stack: ['Laravel', 'PostgreSQL'],
    tags: ['Back', 'Professionnel'],
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Projet 5',
    stack: ['Flutter', 'Firebase'],
    tags: ['Front', 'Mobile'],
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Projet 6',
    stack: ['Flutter', 'NodeJs', 'Express', 'Firebase'],
    tags: ['Front', 'Back', 'Mobile'],
  },
];