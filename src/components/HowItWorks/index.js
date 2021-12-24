import React from 'react';
import images from '../../images';
import Wrapper from '../Wrapper';

function HowItWorks() {
  return (
    <div className="how-it-works">
      <Wrapper>
        <div className="how-it-works__header">
          <h2 className="how-it-works__title homepage-title">как это работает</h2>
          <button className="how-it-works__learn-more btn btn_white-border">Узнать больше</button>
        </div>
        <div className="how-it-works__body">
          <div className="how-it-works__body__card">
            <img
              className="how-it-works__body__card__image"
              src={images.howitworks.first}
              alt="Удобный заказ на сайте"
            />
            <p className="how-it-works__body__card__desc">
              Удобный заказ
              <br />
              на сайте
            </p>
          </div>
          <div className="how-it-works__body__card">
            <img
              className="how-it-works__body__card__image"
              src={images.howitworks.second}
              alt="Нет необходимости ехать в офис"
            />
            <p className="how-it-works__body__card__desc">Нет необходимости ехать в офис</p>
          </div>
          <div className="how-it-works__body__card">
            <img
              className="how-it-works__body__card__image"
              src={images.howitworks.third}
              alt="Огромный выбор направлений"
            />
            <p className="how-it-works__body__card__desc">Огромный выбор направлений</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default HowItWorks;
