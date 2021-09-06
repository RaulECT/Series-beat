import React, { useRef, useEffect } from 'react';
import BetterScroll from '@better-scroll/core';

import fakeSeries from './fakeSeries';
import useLayout from '../hooks/useLayout';

import Main from './components/Main';
import Aside from './components/Aside';
import Card from '../Card';

const Recomendations = () => {
  const {getCenter, distanceBetweenPoints} = useLayout();
  const wrapper = useRef(null);
  const currentSize = 200;
  const maxItemsPerRow = 13;

  useEffect(() => {
    if (wrapper) {
      const cards = Array.from(wrapper.current.querySelectorAll('.card'));
      const origin = getCenter(document.body);
      const offset = currentSize / 2;
      const bsScroll = new BetterScroll(wrapper.current, {
        freeScroll: true,
        scrollX: true,
        scrollY: true,
        probeType: 3,
      });
      
      bsScroll.scroller.scrollToElement(cards[Math.floor(cards.length / 2)], 1000, offset, offset);

      bsScroll.on('scroll', () => {
        const distances = cards.map((card) => {
          const rect = card.getBoundingClientRect();
          const coords = {
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2
          };
          const distance = distanceBetweenPoints(origin, coords);
          const delta = 2 - distance / (currentSize * 1.65);
          const limitDelta = Math.max(delta, 1);
          const zIndex = Math.ceil(limitDelta * 100);

          return {delta: limitDelta, zIndex};
        });

        cards.forEach((card, index) => {
          const {delta, zIndex} = distances[index]

          card.style.transform = `scale3d(${delta}, ${delta}, ${delta})`;
          delta > 1.5 ? card.classList.add('show-overlay') : card.classList.remove('show-overlay');
          card.style.zIndex = zIndex.toString();
        });
      });
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
        {fakeSeries.map((serie) =>
          <Card 
            key={serie.id}
            data={serie}
            size={currentSize}
          />)}
      </Aside>
    </Main>
  );
};

export default Recomendations;