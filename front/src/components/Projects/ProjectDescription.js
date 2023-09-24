// ProjectDescription.js

import React from 'react';

function ProjectDescription({ item }) {
    if (!item) {
        return null;
    }

    switch (item.title) {
        case 'Hakedj.be':
            return (
                <div>
                    <p>Le site sur lequel vous vous trouvez.</p>
                    <p>Site présentant un développeur exceptionnel et un humain encore meilleur.</p>
                    <p>(Oui je me suçe, et alors ?)</p>
                    
                </div>
            );

        case 'Projet 2':
            return (
                <div>
                    <p>This is the description for Projet 2.</p>
                </div>
            );

        default:
            return <p>Ceci est une description.</p>;
    }
}

export default ProjectDescription;