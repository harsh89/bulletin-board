import React from 'react';
import Tile from '../../components/tile/tile.jsx';

const tile = {
    title: 'First bulletin',
    description: 'For bengaluru location'
}

const HomePage = () => {
    return (
        <div>
          <p>You are at the home page</p>
          <button>
            Click me
          </button>
          <Tile tile = {tile}> </Tile>
        </div>
      );
}

export default HomePage;
