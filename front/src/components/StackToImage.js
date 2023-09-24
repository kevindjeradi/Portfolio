// StackToImage.js

import React from 'react';
import cssImage from 'images/stack/css.png';
import firebaseImage from 'images/stack/firebase.png';
import flutterImage from 'images/stack/flutter.png';
import htmlImage from 'images/stack/html.png';
import javascriptImage from 'images/stack/javascript.png';
import laravelImage from 'images/stack/laravel.png';
import mongodbImage from 'images/stack/mongodb.png';
import nodeImage from 'images/stack/node.png';
import postgresqlImage from 'images/stack/postgresql.png';
import reactImage from 'images/stack/react.png';

const imageContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
};

const singleImageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
    padding: '10px',
    borderRadius: '5px',
    border: '2px solid #97B5C7',
};

const imageStyle = {
    height: '50px',
    marginBottom: '5px',
};

function StackToImage({ stack }) {
    if (!stack || stack.length === 0) {
        return null;
    }

    return (
        <div style={imageContainerStyle}>
            {stack.map(tech => {
                let imagePath, altText;
                switch (tech) {
                    case 'CSS':
                        imagePath = cssImage;
                        altText = "CSS";
                        break;
                    case 'Firebase':
                        imagePath = firebaseImage;
                        altText = "Firebase";
                        break;
                    case 'Flutter':
                        imagePath = flutterImage;
                        altText = "Flutter";
                        break;
                    case 'HTML':
                        imagePath = htmlImage;
                        altText = "HTML";
                        break;
                    case 'Javascript':
                        imagePath = javascriptImage;
                        altText = "Javascript";
                        break;
                    case 'Laravel':
                        imagePath = laravelImage;
                        altText = "Laravel";
                        break;
                    case 'MongoDb':
                        imagePath = mongodbImage;
                        altText = "MongoDb";
                        break;
                    case 'NodeJs':
                        imagePath = nodeImage;
                        altText = "NodeJs";
                        break;
                    case 'PostgreSQL':
                        imagePath = postgresqlImage;
                        altText = "PostgreSQL";
                        break;
                    case 'React':
                        imagePath = reactImage;
                        altText = "React";
                        break;
                    default:
                        return null;
                }
                return (
                    <div key={tech} style={singleImageStyle}>
                        <img src={imagePath} alt={altText} style={imageStyle} />
                        <span>{altText}</span>
                    </div>
                );
            })}
        </div>
    );
}

export default StackToImage;