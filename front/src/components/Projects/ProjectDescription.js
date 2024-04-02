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

        case 'Ksports':
            return (
                <div>
                    <p>Un cahier d'entraînement complet pour la musculation.</p>
                    <p>Plusieurs modes de couleurs pour l'application</p>
                    <p>Possibilité de créer son compte / se connecter</p>
                    <p>Planifier des entraînements, recevoir des notifications à la fin de vos temps de repos</p>
                    <p>Créer un profil, Créer des entrainements, Ajouter des exercices, Retrouver ses statistiques détaillées pour chaque exercice et chaque entraînement.</p>
                    <p>Ajouter des amis via qr code, récupérer l'entrainement d'un ami et l'ajouter a la liste de ses entrainements.</p>
                </div>
            );

            case 'Kreader':
                return (
                    <div>
                        <p>Une application de lecture.</p>
                        <p>Plusieurs modes de couleurs pour l'application</p>
                        <p>Possibilité de créer son compte / se connecter</p>
                        <p>Rechercher et ajouter des lightnovels parmi un large catalogue, ajouter des favoris</p>
                        <p>Télécharger les chapitres pour une lecture hors connexion, Reprendre la lecture exactement ou vous etiez et ce peu importe le chapitre choisi</p>
                        <p>Historique complet de vos lectures à travers le temps</p>
                        <p>Ajouter des amis via qr code</p>
                    </div>
                );

        case 'Budget Manager':
            return (
                <div>
                    <p>Un site de gestion de son budget.</p>
                    <p>Possibilité de créer son compte / se connecter</p>
                    <p>Permet de visualiser ses dépenses et ses entrées</p>
                    <p>Catégoriser ses dépenses et ses entrées et voir son solde restant</p>
                    <p>Multiples graphiques et récapitulatifs</p>
                </div>
            );

            case 'Songer':
                return (
                    <div>
                        <p>Une application de découverte et de recommandation de musiques.</p>
                        <p>Possibilité de créer son compte / se connecter</p>
                        <p>Permet de swiper entre de nombreuses musiques, d'écouter un extrait et de les ajouter à ses differentes playlists spotify</p>
                        <p>Possibilité de selectionner les genres de musique proposés pour affiner les recommandations</p>
                    </div>
                );

                case 'Redditech':
                    return (
                        <div>
                            <p>Une application mobile pour reddit utilisant l'API Reddit (qui était gratuite à l'époque).</p>
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