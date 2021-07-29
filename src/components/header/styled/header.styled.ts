import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 2em 10rem;

  &::before {
    content: '';
    position: absolute;
    display: block;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    z-index: 1;
  }
`;

export const ImageContainer = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Nav = styled.div`
  position: relative;
  width: 100%;
  z-index: 2;
`;

export const Title = styled.p`
  margin: 0;
  font-weight: bold;
  color: ${props => props.theme.colors.color_main};
  z-index: 2;
`;

export const Body = styled.div`
  position: relative;
  margin-top: 3.5em;
  z-index: 2;
`;

export const InputField = styled.div`
  h3 {
    text-transform: uppercase;
    color: #fff;
    font-weight: normal;
    z-index: 2;
  }
`;

export const Footer = styled.div`
  position: relative;
  margin-top: 1.5em;
  z-index: 2;
`;
