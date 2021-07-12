import React from 'react';
import {Link} from 'react-router-dom';
import {ReactSVG} from 'react-svg';
import styled from 'styled-components';
import {Button} from '@/components';
import header_img from '@/static/img/netflix-header.jpg';
import notFoundSvg from '@/static/icons/404.svg';

const notFoundPageClassName = 'not_found_page';

export const NotFoundPage: React.FC = () => (
  <NotFoundPageStyle className={notFoundPageClassName}>
    <div className={`${notFoundPageClassName}__header`}>
      <div className={`${notFoundPageClassName}__img`}>
        <img src={header_img} alt="" />
      </div>
      <div className={`${notFoundPageClassName}__text`}>
        <h1>Простите, но такого адреса не существует!</h1>
      </div>
    </div>
    <div className={`${notFoundPageClassName}__content`}>
      <ReactSVG src={notFoundSvg} className={`${notFoundPageClassName}__icon`} />
      <Link to="/">
        <Button>Вернуться назад</Button>
      </Link>
    </div>
  </NotFoundPageStyle>
);

const NotFoundPageStyle = styled.div`
  position: relative;
  overflow: hidden;

  .${notFoundPageClassName}__header {
    position: relative;
  }

  .${notFoundPageClassName}__img {
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
  }

  .${notFoundPageClassName}__text {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    color: #fff;
    text-shadow: 0 0 10px ${props => props.theme.colors.main_color};
    transform: translate(-50%, -50%);
  }

  .${notFoundPageClassName}__content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    .${notFoundPageClassName}__icon {
      position: relative;
      width: max-content;

      svg {
        width: 350px;
        height: 350px;
        fill: ${props => props.theme.colors.main_color};
      }
    }

    a {
      width: max-content;
    }
  }
`;
