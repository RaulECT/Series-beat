import styled from "styled-components";

const Container = styled.div`
  display: flex;
  top: 0;
  left: 0;
  position: relative;
  background-size: cover;
  border-radius: 0.25rem;
  overflow: hidden;
  will-change: transform;
  border: none;
  box-shadow: 0px 0px 5px 4px rgba(0, 0, 0, 0.3);
  &.show-overlay .overlay {
    opacity: 1;
  }
`;

export default Container;