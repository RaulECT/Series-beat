import React, { useRef } from 'react';

import Main from './components/Main';

const Recomendations = () => {
  const wrapper = useRef(null);

  return (
    <Main ref={wrapper}>
      holi
    </Main>
  );
};

export default Recomendations;