import React, { useState, useEffect, useCallback, useRef, createRef } from 'react';
import 'style/Bio.css';
import avatar from 'images/bio/Avatar_heading_to_school.png'
import avatar2 from 'images/bio/Avatar_heading_to_school2.png'
import doctor from 'images/bio/doctor.png'
import avatar_sad from 'images/bio/avatar_sad.png'
import avatar_sad2 from 'images/bio/avatar_sad2.png'
import waiter from 'images/bio/waiter.png'
import eboueur from 'images/bio/eboueur.png'
import barman from 'images/bio/barman.png'
import teleconseille from 'images/bio/teleconseiller.png'
import deliveryman from 'images/bio/deliveryman.png'
import employe_polyvalent from 'images/bio/employe_polyvalent.png'
import deliveryman2 from 'images/bio/deliveryman2.png'
import life from 'images/bio/life.png'
import deliveryman_inverted from 'images/bio/deliveryman_inverted.png'
import deliveryman_thinking from 'images/bio/deliveryman_thinking.png'
import avatar_tired from 'images/bio/avatar_tired.png'
import avatar_tired2 from 'images/bio/avatar_tired2.png'
import avatar_tired3 from 'images/bio/avatar_tired3.png'
import avatar_thinking from 'images/bio/avatar_thinking.png'
import avatar_back_to_school from 'images/bio/Avatar_heading_back_to_school.png'
import avatar_back_to_school2 from 'images/bio/Avatar_heading_back_to_school2.png'
import avatar_diploma from 'images/bio/avatar_diploma.png'
import avatar_working from 'images/bio/avatar_working.png'
import avatar_working2 from 'images/bio/avatar_working2.png'


const Bio = () => {
    const [visiblePanelCount, setVisiblePanelCount] = useState(1); // starts with 1 panel visible
    const panelRefs = useRef([]);

    const panels = [
        <div className="panel">
                <p className="text topLeft">2014</p>
                <p className="text bottomRight">Kevin rejoint Epitech et apprend à développer</p>
                <img src={avatar} alt="Description" style={{ width: '220px', position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topLeft">Au fil de son cursus</p>
                <p className="text bottomRight">il se rend compte qu'il aime vraiment coder</p>
                <img src={avatar2} alt="Description" style={{ width: '230px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topLeft">2015</p>
                <p className="speech" style={{ top: '10%', left: '10%'}}>Votre tante est gravement malade</p>
                <p className="text bottomCenter">Une nouvelle fait basculer sa vie</p>
                <img src={doctor} alt="Description" style={{ width: '150px', position: 'absolute', top: '65%', left: '15%', transform: 'translate(-50%, -50%)' }} />
                <img src={avatar_sad} alt="Description" style={{ width: '170px', position: 'absolute', top: '55%', left: '80%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topLeft">Il doit arrêter ses études pour travailler</p>
                <p className="text bottomRight">Des jobs alimentaires pour aider sa famille</p>
                <img src={avatar_sad2} alt="Description" style={{ width: '180px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topLeft">2015 - 2016 ...</p>
                <p className="text topRight">Serveur, éboueur, Barman ...</p>
                <p className="text bottomCenter">Déménageur, équipier polyvalent...</p>
                <img src={waiter} alt="Description" style={{ width: '160px', position: 'absolute', top: '55%', left: '15%', transform: 'translate(-50%, -50%)' }} />
                <img src={barman} alt="Description" style={{ width: '150px', position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                <img src={eboueur} alt="Description" style={{ width: '200px', position: 'absolute', top: '60%', left: '85%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topLeft">2018 - 2019 ...</p>
                <p className="text topRight">Téléconseiller, livreur et petits boulots</p>
                <p className="text bottomRight">Il découvre l'absence de choix que la vie impose</p>
                <img src={teleconseille} alt="Description" style={{ width: '200px', position: 'absolute', top: '50%', left: '70%', transform: 'translate(-50%, -50%)' }} />
                <img src={deliveryman} alt="Description" style={{ width: '220px', position: 'absolute', top: '50%', left: '20%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topLeft">Le temps passe et Kevin s'habitue à ce quotidien</p>
                <p className="text bottomRight">où il ne ressent ni le choix ni la possibilté d'avancer</p>
                <img src={employe_polyvalent} alt="Description" style={{ width: '160px', position: 'absolute', top: '50%', left: '20%', transform: 'translate(-50%, -50%)' }} />
                <img src={deliveryman2} alt="Description" style={{ width: '200px', position: 'absolute', top: '50%', left: '70%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topLeft">Mais la vie n'avait pas fini de l'éprouver</p>
                <p className="text bottomRight">Car, comme on le sait, un problème arrive rarement seul</p>
                <img src={life} alt="Description" style={{ width: '180px', position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                <img src={life} alt="Description" style={{ width: '80px', position: 'absolute', top: '35%', left: '15%', transform: 'translate(-50%, -50%)' }} />
                <img src={life} alt="Description" style={{ width: '110px', position: 'absolute', top: '30%', left: '85%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topLeft">2020s</p>
                <p className="speech" style={{ left: '15%'}}>Votre mère est atteinte d'une maladie incurable et extrêmement rare qui s'attaque à tous ses organes</p>
                <p className="text bottomRight">Les premiers organes détruits ont été les reins, l'obligeant à subir des dialyses tous les 2 jours</p>
                <img src={doctor} alt="Description" style={{ width: '120px', position: 'absolute', top: '50%', left: '15%', transform: 'translate(-50%, -50%)' }} />
                <img src={deliveryman_inverted} alt="Description" style={{ width: '150px', position: 'absolute', top: '55%', left: '70%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topLeft">Son quotidien se retrouve à nouveau bouleversé</p>
                <p className="text bottomRight">Il se questionne sur sa vie, son futur</p>
                <img src={deliveryman_thinking} alt="Description" style={{ width: '230px', position: 'absolute', top: '52%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topLeft">Et comme la vie ne voulait pas les laisser tranquille</p>
                <p className="speech" style={{ top: '12%', left: '20%'}}>Votre père est atteint d'un cancer</p>
                <p className="text bottomRight">Encore une fois, un mauvaise nouvelle fait son apparition</p>
                <img src={doctor} alt="Description" style={{ width: '120px', position: 'absolute', top: '55%', left: '20%', transform: 'translate(-50%, -50%)' }} />
                <img src={avatar_tired} alt="Description" style={{ width: '140px', position: 'absolute', top: '55%', left: '70%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topLeft">A ce moment là, autant se dire que Kevin commençait à perdre espoir</p>
                <p className="text bottomRight">Mais il ne pouvait pas (trop) se laisser aller, ses proches comptaient sur lui</p>
                <img src={avatar_tired2} alt="Description" style={{ width: '160px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topLeft">La vie continua ainsi pendant plusieurs mois</p>
                <p className="text bottomRight">La santé de ses parents continuaient de se dégrader</p>
                <img src={avatar_tired3} alt="Description" style={{ width: '160px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topLeft">N'ayant pas le choix que de se rendre compte que leur temps était compté</p>
                <p className="text bottomRight">Kevin voulu les rendre fiers avant qu'il ne soit trop tard</p>
                <img src={avatar_thinking} alt="Description" style={{ width: '160px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topLeft">Il se réinscrit alors à l'école, à Epitech une nouvelle fois</p>
                <p className="text bottomRight">Mais cette fois ci dans leur cursus en alternance</p>
                <img src={avatar_back_to_school} alt="Description" style={{ width: '160px', position: 'absolute', top: '48%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topLeft">Mais 7 longues annéees ont passées</p>
                <p className="text bottomRight">Il n'est plus habitué ni à coder, ni à l'école</p>
                <img src={avatar_back_to_school2} alt="Description" style={{ width: '170px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topLeft">Cependant il réussi à s'accrocher et à valider sa 3ème année et son diplome</p>
                <p className="text bottomRight">Mais l'état de ses parents s'est encore aggravé</p>
                <img src={avatar_diploma} alt="Description" style={{ width: '170px', position: 'absolute', top: '53%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topCenter">Le même été Kevin perd son père</p>
                <img src={avatar_tired2} alt="Description" style={{ width: '190px', position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topCenter">Deux mois plus tard c'est sa mère qui s'éteint</p>
                <img src={avatar_tired3} alt="Description" style={{ width: '190px', position: 'absolute', top: '60%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel"></div>,
            <div className="panel"></div>,
            <div className="panel"></div>,
            <div className="panel">
                <p className="text topLeft">Il continue de s'accrocher, pour sa famille</p>
                <p className="text bottomRight">Pour ses parents, se disant qu'il les rendra fiers</p>
                <img src={avatar_back_to_school2} alt="Description" style={{ width: '160px', position: 'absolute', top: '45%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topLeft">Pour ses soeurs, pour son frère</p>
                <p className="text bottomRight">Il arrive à ne pas craquer</p>
                <img src={avatar_working} alt="Description" style={{ width: '190px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>,
            <div className="panel">
                <p className="text topCenter">Aujourd'hui, en 2023, Kevin est en 5ème année et compte bien valider son année</p>
                <p className="text bottomRight">FIN</p>
                <img src={avatar_working2} alt="Description" style={{ width: '150px', position: 'absolute', top: '68%', left: '50%', transform: 'translate(-50%, -50%)' }} />
            </div>,
    ];

    panelRefs.current = panels.map((_, i) => panelRefs.current[i] ?? createRef());

    const scrollToPanel = (index) => {
        if (panelRefs.current[index]) {
            panelRefs.current[index].scrollIntoView({
                behavior: 'smooth',
                block: 'nearest'
            });
        }
    };

    const showNextPanel = useCallback(() => {
        setVisiblePanelCount(prevCount => Math.min(prevCount + 1, panels.length));
        scrollToPanel(visiblePanelCount);
    }, [panels.length, visiblePanelCount]);

    const hideLastPanel = useCallback(() => {
        setVisiblePanelCount(prevCount => (prevCount > 1 ? prevCount - 1 : prevCount));
        scrollToPanel(visiblePanelCount - 2); // Adjust index to scroll to the correct panel
    }, [visiblePanelCount]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight') {
                showNextPanel();
            } else if (e.key === 'ArrowLeft') {
                hideLastPanel();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [showNextPanel, hideLastPanel]);

    useEffect(() => {
        const timer = setTimeout(() => {
            showNextPanel();
        }, 3000); // 3 seconds

        return () => clearTimeout(timer);
    }, [visiblePanelCount, showNextPanel]);

    return (
        <article className="comic">
            {panels.map((panel, index) => {
                const panelClassName = index < visiblePanelCount ? "panel panel-appear" : "panel panel-disappear";
                return React.cloneElement(panel, { 
                    className: panelClassName, 
                    key: index, 
                    ref: el => panelRefs.current[index] = el // Assign ref to the panel
                });
            })}
            <div className="arrow-buttons">
                <button className="navigation-button" onClick={hideLastPanel}>←</button>
                <button className="navigation-button" onClick={showNextPanel}>→</button>
            </div>
        </article>
    );
};

export default Bio;