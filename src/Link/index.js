import styled from 'styled-components';

import Icon from './components/Icon';

const LinkStyled = styled.a`
  position: relative;
  z-index: 100;

  .icon {
    width: 15px;
    fill: #fff;
  }
`

const Link = ({link}) => {
  const type = link ? Object.keys(link)[0] : 'other';

  return (
    <LinkStyled
      href={link[type]}
      target="_blank"
    >
      <Icon type={type} />
    </LinkStyled>
  );
};

export default Link;
