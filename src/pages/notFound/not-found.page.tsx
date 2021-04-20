import React from 'react';
import {Link} from 'react-router-dom';
import {ReactSVG} from 'react-svg';
import {Button} from '../../components';
import header_img from '../../static/img/netflix-header.jpg';
import notFoundSvg from '../../static/icons/404.svg';
import './not-found.scss';

const notFoundPageClassName = 'not_found_page';

export const NotFoundPage: React.FC = () => (
  <div className={notFoundPageClassName}>
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
  </div>
);
