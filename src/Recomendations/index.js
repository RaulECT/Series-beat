import React, { useRef } from 'react';

import {fakeSeries} from './fakeSeries';

import Main from './components/Main';

const Recomendations = () => {
  const wrapper = useRef(null);
  const currentSize = 150;
  const maxItemsPerRow = 13;

  return (
    <Main ref={wrapper}>
      holi
    </Main>
  );
};

export default Recomendations;