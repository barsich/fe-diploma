import moment from 'moment';
import React from 'react';
import images from '../../../../../images';

function Train({ route, pageType }) {
  const { arrival, departure } = route;
  console.log(departure);

  return (
    <div className="train">
      <div className="train__info">
        <div className="train__header">
          {/* FIXME change img to svg */}
          <img className="train__icon" src={images.train.white} alt="" />
          <span className="train__number">{departure.train.name}</span>
        </div>
        <div className="train__footer">
          <span className="train__departure-from">{departure.from.city.name} →</span>
          <span className="train__departure-to">{departure.to.city.name}</span>
        </div>
      </div>
      <div className="train__directions">
        <div className=" train-directions__row">
          <div className="train-directions__from">
            <span className="train-directions__time">
              {moment(departure.from.datetime * 1000).format('HH:mm')}
            </span>
            <span className="train-directions__city">{departure.from.city.name}</span>
            <span className="train-directions__railway-stantion">
              {departure.from.railway_station_name}
            </span>
          </div>
          <div className="train-directions__duration">
            <span className="train-directions__duration-time duration-time_there">
              {moment({}).seconds(departure.duration).format('HH : mm')}
            </span>
          </div>
          <div className="train-directions__to">
            <span className="train-directions__time">
              {moment(departure.to.datetime * 1000).format('HH:mm')}
            </span>
            <span className="train-directions__city">{departure.to.city.name}</span>
            <span className="train-directions__railway-stantion">
              {departure.to.railway_station_name}
            </span>
          </div>
        </div>
        {arrival && (
          <div className="train-directions__row">
            <div className="train-directions__to">
              <span className="train-directions__time">
                {moment(arrival.from.datetime * 1000).format('HH:mm')}
              </span>
              <span className="train-directions__city">{arrival.from.city.name}</span>
              <span className="train-directions__railway-stantion">
                {arrival.from.railway_station_name}
              </span>
            </div>
            <div className="train-directions__duration">
              <span className="train-directions__duration-time duration-time_back">
                {moment({}).seconds(arrival.duration).format('HH : mm')}
              </span>
            </div>
            <div className="train-directions__from">
              <span className="train-directions__time">
                {moment(arrival.to.datetime * 1000).format('HH:mm')}
              </span>
              <span className="train-directions__city">{departure.to.city.name}</span>
              <span className="train-directions__railway-stantion">
                {arrival.to.railway_station_name}
              </span>
            </div>
          </div>
        )}
      </div>
      <div className="train__options">
        <div className="train-options__seats">
          {departure.have_fourth_class && (
            <div className="train-options__seat train-options__seat_fourth-class">
              <span className="train-options__seat-type">Сидячий</span>
              <span className="train-options__seats-amount">{departure.available_seats_info.fourth}</span>
              <span className="train-options__seat-price">
                от <span>{departure.price_info.fourth.bottom_price.toLocaleString('ru-RU')}</span>
              </span>
            </div>
          )}
          {departure.have_third_class && (
            <div className="train-options__seat train-options__seat_third-class">
              <span className="train-options__seat-type">Плацкарт</span>
              <span className="train-options__seats-amount">{departure.available_seats_info.third}</span>
              <span className="train-options__seat-price">
                от <span>{departure.price_info.third.side_price.toLocaleString('ru-RU')}</span>
              </span>
            </div>
          )}
          {departure.have_second_class && (
            <div className="train-options__seat train-options__seat_second-class">
              <span className="train-options__seat-type">Купе</span>
              <span className="train-options__seats-amount">{departure.available_seats_info.second}</span>
              <span className="train-options__seat-price">
                от <span>{departure.price_info.second.bottom_price.toLocaleString('ru-RU')}</span>
              </span>
            </div>
          )}
          {departure.have_first_class && (
            <div className="train-options__seat train-options__seat_first-class">
              <span className="train-options__seat-type">Люкс</span>
              <span className="train-options__seats-amount">{departure.available_seats_info.first}</span>
              <span className="train-options__seat-price">
                от <span>{departure.price_info.first.bottom_price.toLocaleString('ru-RU')}</span>
              </span>
            </div>
          )}
        </div>
        <ul className="train-options__services">
          <li className="train-options__service train-options__wi-fi">Wi-Fi</li>
          <li className="train-options__service train-options__express">Экспресс</li>
          <li className="train-options__service train-options__lunch">Обед</li>
        </ul>
        {pageType === 'routes' && (
          <button className="train-options__proceed-ordering btn btn_orange-white">
            Выбрать места
          </button>
        )}
        {pageType === 'verification' && (
          <button className="routes-verification__change-button btn btn_black-border">
            Изменить
          </button>
        )}
      </div>
    </div>
  );
}

export default Train;
