import React from 'react';
import Tile from '../../components/tile/tile.jsx';
import './topics.scss';

const topics = [
    {
        id: 1,
        title: 'Hot sale'
    },
    {
        id: 2,
        title: 'Lost and found'
    },
    {
        id: 3,
        title: 'Entertainment'
    }
]

const HomePage = () => {
    return (
        <div className="topics">
          <h2 className="topics__title">You are at the topics page</h2>
          <h4 className="topics__region">Choose your topic</h4>
          {
              topics.map((tile) => {
                  return <Tile tile = {tile} key={tile.id}/>
              })
          }
        </div>
      );
}

export default HomePage;
