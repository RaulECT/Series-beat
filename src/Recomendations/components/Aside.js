import styled from "styled-components";

const Aside = styled.aside`
  --maxItemsPerRow: ${props => props.maxItemsPerRow};
  --size: ${props => props.itemsSize}px;
  --width: ${props => props.customWidth}px;
  --height: ${props => props.customHeight}px;
  display: grid;
  grid-template-columns: repeat(var(--maxItemsPerRow), var(--size));
  grid-template-rows: repeat(var(--maxItemsPerRow), var(--size));
  position: relative;
  color: white;
  width: var(--width);
  height: var(--height);
  transform-style: preserve-3d;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);
  transition-property: transform;
  transition-duration: 0ms;
  transform: translateX(-1000px) translateZ(1px);
`;

export default Aside;