import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import Button from '@mui/material/Button';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { v4 as uuidv4 } from 'uuid';
import '../style/projectList.css';


export default function ProjectsList() {
  const [activeTags, setActiveTags] = React.useState([]);
  const [numCols, setNumCols] = React.useState(3); // Initial number of columns

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
    // Check if the tag is already active
    if (activeTags.includes(tag)) {
      // Remove the tag if it's active
      setActiveTags(activeTags.filter((t) => t !== tag));
    } else {
      // Add the tag if it's not active
      setActiveTags([...activeTags, tag]);
    }
  };

  const isTagActive = (tag) => activeTags.includes(tag);

  const buttonListStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:'40 px'
  };

  const buttonStyle = {
    backgroundColor: 'white',
    color: '#A2A0A0',
    margin: '0 20px 10px 20px'
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#97B5C7', // Change this to the desired color
    color: '#ffffff',
    fontWeight: 'bold'
  };

  const filteredItems = itemData.filter((item) => {
    // Check if all selected tags are present in the item's tags
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
      </div>

      <ImageList cols={numCols} gap={36}>
        {filteredItems.map((item) => (
          <ImageListItem key={uuidv4()} style={{borderRadius:'10px', padding: '30px', backgroundColor: '#EEF4F8', color: '#648AA0'}}>
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
              subtitle={<span>{item.author}</span>}
              position="below"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Projet 1',
    author: '@bkristastucchio',
    tags: ['Professionnel', 'Front'],
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Projet 2',
    author: '@rollelflex_graphy726',
    tags: ['Personnel', 'Back'],
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Projet 3',
    author: '@helloimnik',
    tags: ['Front'],
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Projet 4',
    author: '@helzefzfzoimnik',
    tags: ['Back'],
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Projet 5',
    author: '@bkristastucchio',
    tags: ['Front'],
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Projet 6',
    author: '@rollelflex_graphy726',
    tags: ['Back'],
  },
];
