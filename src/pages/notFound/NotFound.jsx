import React from 'react';
import {Link} from 'react-router-dom';
import {ReactSVG} from 'react-svg';
import {Button} from '../../components';
import header_img from '../../static/img/netflix-header.jpg';
import notFoundSvg from '../../static/icons/404.svg';
import './NotFound.scss';

const _classname = 'not_found_page';

export const NotFoundPage = () => (
  <div className={_classname}>
    <div className={`${_classname}__header`}>
      <div className={`${_classname}__img`}>
        <img src={header_img} alt="" />
      </div>
      <div className={`${_classname}__text`}>
        <h1>Простите, но такого адреса не существует!</h1>
      </div>
    </div>
    <div className={`${_classname}__content`}>
      <ReactSVG src={notFoundSvg} className={`${_classname}__icon`} />
      <Link to="/">
        <Button>Вернуться назад</Button>
      </Link>
    </div>
  </div>
);
