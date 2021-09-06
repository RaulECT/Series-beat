import styled from "styled-components";

const Overlay = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: 300ms ease opacity;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 0.5rem;
  font-size: 0.75rem;
  span {
    margin-top: 0.125rem;
    font-size: 0.5rem;
  }

  .links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .links .label {
    margin: 0 0 5px 0;
    color: #fff;
    font-size: 8px;
  }
`;

export default Overlay;
