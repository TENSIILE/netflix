import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

export const Header = styled.div`
  position: relative;
`;

export const ImageBlock = styled.div`
  width: 100%;
  height: 300px;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 10px ${props => props.theme.colors.color_main};
  transform: translate(-50%, -50%);
`;

export const Content = styled.div`
  a {
    width: max-content;
  }
`;

export const Icon = styled.div`
  position: relative;
  width: max-content;

  svg {
    width: 350px;
    height: 350px;
    fill: ${props => props.theme.colors.color_main};
  }
`;
