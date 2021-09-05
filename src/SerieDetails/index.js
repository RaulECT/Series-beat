import styled from 'styled-components';
import {Dialog} from '@reach/dialog';
import "@reach/dialog/styles.css";

const DialogStyled = styled(Dialog)`
  --color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: rgba(0,0,0, 0.9);

  .header {
    display: flex;
    flex-direction: row-reverse;
    margin-bottom: 1rem;
  }

  .close-button {
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--color);
  }

  .serie-details {
    display: flex;
    flex-direction: column;
  }

  .serie-details--cover {
    max-width: 100%;
  }

  .serie-details h1 {
    color: var(--color);
  }
`

const SerieDetails = ({serie, isOpen, onClose}) => {
  return (
    <DialogStyled
      isOpen={isOpen}
      onDismiss={onClose}
    >
      <section className="header">
        <span
          className="close-button"
          aria-hidden
          onClick={onClose}
        >
          x
        </span>
      </section>

      <section className="serie-details">
        <img
          className="serie-details--cover"
          src={serie.imageUrl}
          alt="serie cover"
        />
        <h1>{serie.name}</h1>
      </section>
    </DialogStyled>
  );
};

export default SerieDetails;
