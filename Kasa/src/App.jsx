import React, { useEffect, useState } from 'react';
import Card from './components/Card';
import './styles/app.css';

function App() {
  const [logements, setLogements] = useState([]);

  useEffect(() => {
    const fetchLogements = async () => {
      try {
        const response = await fetch('./logements.json');
        if (!response.ok) {
          throw new Error('Problème réseau');
        }
        const data = await response.json();
        setLogements(data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données de logements:', error);
      }
    };
    
    fetchLogements();
  }, []);

  return (
    <div className="card-container">
      {logements.map((element, index) => (
        <Card key={index} element={element} />
      ))}
    </div>
  );
}

export default App;