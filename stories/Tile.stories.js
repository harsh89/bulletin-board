import React from 'react';
import Tile from '../src/components/tile/tile.jsx';
import { storiesOf } from '@storybook/react';

const tile = {
    title: 'First bulletin',
    description: 'For bengaluru location'
}

storiesOf('Tile', module)
  .add('default', () => <Tile tile={tile} />)