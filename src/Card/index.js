import {useRef} from 'react';

import Container from './components/Container';
import Overlay from './components/Overlay';

const Card = () => {
  const node = useRef(null);

  return (
    <Container ref={node}>
      <Overlay>

      </Overlay>
    </Container>
  );
}

export default Card;
