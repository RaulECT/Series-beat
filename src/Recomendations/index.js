import React, { useRef } from 'react';

import {fakeSeries} from './fakeSeries';

import Main from './components/Main';
import Aside from './components/Aside';

const Recomendations = () => {
  const wrapper = useRef(null);
  const currentSize = 150;
  const maxItemsPerRow = 13;

  return (
    <Main ref={wrapper}>
      <Aside
        maxItemsPerRow={maxItemsPerRow}
        size={currentSize}
        width={currentSize * maxItemsPerRow}
        height={Math.ceil(fakeSeries.length / maxItemsPerRow) * currentSize}
      >
        holi
      </Aside>
    </Main>
  );
};

export default Recomendations;