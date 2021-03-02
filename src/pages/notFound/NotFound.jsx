import React from 'react';
import {Link} from 'react-router-dom';
import {ReactSVG} from 'react-svg';
import {Button} from '../../components';
import header_img from '../../static/img/netflix-header.jpg';
import notFoundSvg from '../../static/icons/404.svg';
import './NotFound.scss';

export const NotFoundPage = () => (
  <div className="not_found_page">
    <div className="not_found_page__header">
      <div className="not_found_page__img">
        <img src={header_img} alt="" />
      </div>
      <div className="not_found_page__text">
        <h1>Простите, но такого адреса не существует!</h1>
      </div>
    </div>
    <div className="not_found_page__content">
      <ReactSVG src={notFoundSvg} className="not_found_page__icon" />
      <Link to="/">
        <Button>Вернуться назад</Button>
      </Link>
    </div>
  </div>
);
