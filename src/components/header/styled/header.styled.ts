import styled from 'styled-components';
import header_img from '@/static/img/netflix-header.jpg';

export const Container = styled.div`
  position: relative;
  width: 100%;
  background: url(${header_img});
  background-repeat: no-repeat;
  background-size: cover;
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
  }
`;

export const Nav = styled.div`
  position: relative;
  width: 100%;
`;

export const Title = styled.p`
  margin: 0;
  font-weight: bold;
  color: ${props => props.theme.colors.main_color};
`;

export const Body = styled.div`
  position: relative;
  margin-top: 3.5em;
`;

export const InputField = styled.div`
  h3 {
    text-transform: uppercase;
    color: #fff;
    font-weight: normal;
  }
`;

export const Footer = styled.div`
  position: relative;
  margin-top: 1.5em;
`;
