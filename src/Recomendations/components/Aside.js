import styled from "styled-components";

const Aside = styled.aside`
  --maxItemsPerRow: ${props => props.maxItemsPerRow};
  --size: ${props => props.size};
  --width: ${props => props.width};
  --height: ${props => props.height};
  display: grid;
  grid-template-columns: repeat(var(--maxItemsPerRow), var(--size));
  grid-template-rows: repeat(mar(--maxItemsPerRow), var(--size));
  position: relative;
  color: white;
  width: var(--width);
  height: var(--height);
  transform-style: preserve-3d;
  cursor: grab;
  &:active {
    cursor: grabbing;
  }
`;

export default Aside;