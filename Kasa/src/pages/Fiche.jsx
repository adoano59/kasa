import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Collapse from '../components/Collapse';
import '../styles/fiche.css'
import Tags from '../components/Tags';
import Error from '../components/Error';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Rate from '../components/Rate';


function Fiche() {
    let { id } = useParams();
    const [logement, setLogement] = useState(null);
    const navigate = useNavigate();
    const [carosselId, setCarosselId] = useState(0);
    useEffect(() => {
        const fetchLogements = async () => {
            try {
                const response = await fetch('../logements.json');
                if (!response.ok) {
                    throw new Error('Problème réseau');
                }
                const data = await response.json();
                const logement = data.find((el) => el.id == id);
                if (!logement) {
                    navigate("/notfound");
                }
                setLogement(logement);
            } catch (error) {
                console.error('Erreur lors de la récupération des données de logements:', error);
            }
        };

        fetchLogements();
    }, [id, navigate]);
    function Rightcarossel() {
        if (carosselId + 1 == logement.pictures.length) {
            setCarosselId(0)

        } else {
            setCarosselId(carosselId + 1)
        }
    }
    function Leftcarossel() {
        if (carosselId - 1 == -1) {
            setCarosselId(logement.pictures.length - 1)

        } else {
            setCarosselId(carosselId - 1)
        }
    }
    if (!logement) {
        return (<Error />);
    }

    return (
        <>
            <div className='cardFiche'>
                <div className='carossel-content'>
                    <img className='imgFiche' src={logement.pictures[carosselId]} alt={logement.title} />
                    <button className='btnCarosselLeft' onClick={Leftcarossel}>
                        <FontAwesomeIcon className='chevronCarossel' icon={faChevronLeft} />
                    </button>
                    <button className='btnCarosselRight' onClick={Rightcarossel}>
                        <FontAwesomeIcon className='chevronCarossel' icon={faChevronRight} />
                    </button>
                </div>
                <div className='cardContent'>


                    <div className='titleHome'>
                        {logement.title}
                    </div>
                    <div className='locationHome'>{logement.location}</div>

                    <div className='host'>
                        <div className='hostName'>{logement.host.name}</div>
                        <div className='hostPhoto'>
                            <img src={logement.host.picture} alt={logement.host.name} />
                        </div>
                    </div>


                    <div className='tag'>
                        {logement.tags.map((tag, index) => (
                            <Tags key={index} element={tag} />
                        ))}
                    </div>
                    <div className='rate'>
                        <Rate rating={logement.rating} />
                    </div>

                    <div className='ficheDetails1'>
                        <Collapse titleDetails="Description" details={logement.description} />
                    </div>

                    <div className='ficheDetails2'>
                        <Collapse titleDetails="Equipements" details={logement.equipments} />
                    </div>

                </div>
            </div>
        </>
    );
}

export default Fiche;
