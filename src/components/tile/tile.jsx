import React from 'react';

const Tile = ({tile: {title, description}}) => {
    return (
        <div>
            <span>
                {title}
            </span>
            <span>
                {description}
            </span>
        </div>
    )
}

export default Tile;

