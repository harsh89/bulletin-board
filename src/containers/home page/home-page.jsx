import React from 'react';
import Tile from '../../components/tile/tile.jsx';
import './home-page.scss';

const locations = [
    {
        id: 1,
        title: 'Bengaluru'
    },
    {
        id: 2,
        title: 'Hyderabad'
    },
    {
        id: 3,
        title: 'Mumbai'
    }
]

const HomePage = () => {
    return (
        <div className="homepage">
          <h2 className="homepage__title">You are at the home page</h2>
          <h4 className="homepage__region">Choose your region</h4>
          {
              locations.map((tile) => {
                  return <Tile tile = {tile} key={tile.id}/>
              })
          }
        </div>
      );
}

export default HomePage;
