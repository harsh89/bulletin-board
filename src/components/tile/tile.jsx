import React from 'react';
import './tile.scss';

const Tile = ({tile: {title}}) => {
    return (
        <div className="tile">
            <span className="tile__title">
                {title}
            </span>
        </div>
    )
}

export default Tile;

