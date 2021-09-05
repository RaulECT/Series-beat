import React, { useRef, useEffect } from 'react';
import BetterScroll from '@better-scroll/core';

import {fakeSeries} from './fakeSeries';

import Main from './components/Main';
import Aside from './components/Aside';
import Card from '../Card';

const Recomendations = () => {
  const wrapper = useRef(null);
  const currentSize = 200;
  const maxItemsPerRow = 13;

  useEffect(() => {
    if (wrapper) {
      const cards = Array.from(wrapper.current.querySelectorAll('.card'));
      console.log('[cards]', cards);
    }
  });

  return (
    <Main ref={wrapper}>
      <Aside
        maxItemsPerRow={maxItemsPerRow}
        itemsSize={currentSize}
        customWidth={currentSize * maxItemsPerRow}
        customHeight={Math.ceil(fakeSeries.length / maxItemsPerRow) * currentSize}
      >
        {fakeSeries.map((serie) => <Card key={serie.id} data={serie} size={currentSize} />)}
      </Aside>
    </Main>
  );
};

export default Recomendations;