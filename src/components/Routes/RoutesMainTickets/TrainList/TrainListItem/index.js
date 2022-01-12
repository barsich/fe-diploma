import React from 'react';
import images from '../../../../../images';

function TrainListItem() {
  return (
    <div className="routes-main__train-list__item train">
      <div className="train__info">
        <div className="train__info__header">
          {/* FIXME change img to svg */}
          <img className="train__info__icon" src={images.train.white} />
          <span className="train__info__train-number">116С</span>
        </div>
        <div className="train__info__footer">
          <span className="train__info__city-start">Адлер →</span>
          <span className="train__info__city-from">Москва →</span>
          <span className="train__info__city-to">Санкт-Петербург</span>
        </div>
      </div>
      <div className="train__directions">
        <div className="train__directions__there train__directions__row">
          <div className="train__directions__from">
            <span className="train__directions__time">00:10</span>
            <span className="train__directions__city">Москва</span>
            <span className="train__directions__railway-stantion">Курский вокзал</span>
          </div>
          <div className="train__directions__duration">
            <span className="train__directions__duration__time duration-time_there">9 : 42</span>
          </div>
          <div className="train__directions__to">
            <span className="train__directions__time">09:52</span>
            <span className="train__directions__city">Санкт-Петербург</span>
            <span className="train__directions__railway-stantion">Ладожский вокзал</span>
          </div>
        </div>
        <div className="train__directions__back train__directions__row">
          <div className="train__directions__to">
            <span className="train__directions__time">00:10</span>
            <span className="train__directions__city">Москва</span>
            <span className="train__directions__railway-stantion">Курский вокзал</span>
          </div>
          <div className="train__directions__duration">
            <span className="train__directions__duration__time duration-time_back">9 : 42</span>
          </div>
          <div className="train__directions__from">
            <span className="train__directions__time">09:52</span>
            <span className="train__directions__city">Санкт-Петербург</span>
            <span className="train__directions__railway-stantion">Ладожский вокзал</span>
          </div>
        </div>
      </div>
      <div className="train__options">
        <div className="train__options__seats">
          <div className="train__options__seats__fourth-class">
            <span className="train__options__seats__type">Сидячий</span>
            <span className="train__options__seats__amount">88</span>
            <span className="train__options__seats__price">
              от <span>1 920</span>
            </span>
          </div>
          <div className="train__options__seats__third-class">
            <span className="train__options__seats__type">Плацкарт</span>
            <span className="train__options__seats__amount">88</span>
            <span className="train__options__seats__price">
              от <span>10 920</span>
            </span>
          </div>
          <div className="train__options__seats__second-class">
            <span className="train__options__seats__type">Купе</span>
            <span className="train__options__seats__amount">88</span>
            <span className="train__options__seats__price">
              от <span>20 920</span>
            </span>
          </div>
          <div className="train__options__seats__first-class">
            <span className="train__options__seats__type">Люкс</span>
            <span className="train__options__seats__amount">88</span>
            <span className="train__options__seats__price">
              от <span>50 920</span>
            </span>
          </div>
        </div>
        <ul className="train__options__seats__services-list">
          <li className="train__options__seats__services-list__item train-options__wi-fi">Wi-Fi</li>
          <li className="train__options__seats__services-list__item train-options__express">
            Экспресс
          </li>
          <li className="train__options__seats__services-list__item train-options__lunch">Обед</li>
        </ul>
        <button className="train__options__proceed-ordering btn btn_orange-white">
          Выбрать места
        </button>
      </div>
    </div>
  );
}

export default TrainListItem;
