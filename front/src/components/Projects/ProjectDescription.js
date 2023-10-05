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

        case 'Mobile Shop':
            return (
                <div>
                    <p>Application mobile de mise en vente de produits construite avec Flutter et NodeJS.</p>
                    <p>Cette application permet de :</p>
                    <p>Créer son compte / Se connecter</p>
                    <p>Ajouter des articles à son panier</p>
                    <p>Voir et ajouter du solde à son compte</p>
                    <p>Scanner le code barre d'un produit afin d'afficher la fiche produit associée et de l'ajouter à son panier</p>
                    <p>Ajouter et visualiser des cartes bancaire</p>
                </div>
            );

        default:
            return <p>Ceci est une description.</p>;
    }
}

export default ProjectDescription;