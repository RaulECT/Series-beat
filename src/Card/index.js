import {useRef, useEffect} from 'react';

import Container from './components/Container';
import Overlay from './components/Overlay';
import Info from './components/Info';

const Card = ({data, size}) => {
  const node = useRef(null);

  useEffect(() => {
    if (node) {
      node.current.style.backgroundImage = `url(${data.imageUrl})`;
      node.current.style.width = `${size}px`;
      node.current.style.height = `${size}px`;
    }
  });

  return (
    <Container
      ref={node}
      className="card"
    >
      <Overlay>
        <Info>
          <strong>{data.name}</strong>
        </Info>
      </Overlay>
    </Container>
  );
}

export default Card;