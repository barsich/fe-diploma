import React from 'react';

function TrainListItem() {

  // TODO символ рубля
  return (
    <div className="routes-main__train-list__item train">
      <div className="train__info">
        <image className="train__info__icon" />
        <span className="train__info__train-number">116С</span>
        <span className="train__info__city-start">Адлер →</span>
        <span className="train__info__city-from">Москва →</span>
        <span className="train__info__city-to">Санкт-Петербург</span>
      </div>
      <div className="train__directions">
        <div className="train__directions__there">
          <div className="train__directions__there__from">
            <span className="train__directions__there__from__time">00:10</span>
            <span className="train__directions__there__from__city">Москва</span>
            <span className="train__directions__there__from__railway-stantion">Курский вокзал</span>
          </div>
          <div className="train__directions__there__duration">
            <span className="train__directions__there__duration__time">9 : 42</span>
            {/* <span className="train__directions__there__duration__icon"></span> */}
          </div>
          <div className="train__directions__there__to">
            <span className="train__directions__there__to__time">09:52</span>
            <span className="train__directions__there__to__city">Санкт-Петербург</span>
            <span className="train__directions__there__to__railway-stantion">Ладожский вокзал</span>
          </div>
        </div>
        <div className="train__directions__back">
          <div className="train__directions__back__to">
            <span className="train__directions__back__to__time">00:10</span>
            <span className="train__directions__back__to__city">Москва</span>
            <span className="train__directions__back__to__railway-stantion">Курский вокзал</span>
          </div>
          <div className="train__directions__back__duration">
            <span className="train__directions__back__duration__time">9 : 42</span>
            {/* <span className="train__directions__back__duration__icon"></span> */}
          </div>
          <div className="train__directions__back__from">
            <span className="train__directions__back__from__time">09:52</span>
            <span className="train__directions__back__from__city">Санкт-Петербург</span>
            <span className="train__directions__back__from__railway-stantion">Ладожский вокзал</span>
          </div>
        </div>
      </div>
      <div className="train__options">
        <table className="train__options__seats">
          <tr className="train__options__seats__seating">
            <td className="train__options__seats__type">Сидячий</td>
            <td className="train__options__seats__amount">88</td>
            <td className="train__options__seats__price">от 1 920 Р</td>
          </tr>
          <tr className="train__options__seats__reserved-seat">
            <td className="train__options__seats__type">Плацкарт</td>
            <td className="train__options__seats__amount">88</td>
            <td className="train__options__seats__price">от 10 920 Р</td>
          </tr>
          <tr className="train__options__seats__coupe">
            <td className="train__options__seats__type">Купе</td>
            <td className="train__options__seats__amount">88</td>
            <td className="train__options__seats__price">от 20 920 Р</td>
          </tr>
          <tr className="train__options__seats__lux">
            <td className="train__options__seats__type">Люкс</td>
            <td className="train__options__seats__amount">88</td>
            <td className="train__options__seats__price">от 50 920 Р</td>
          </tr>
        </table>
        <ul className="train__options__seats__services-list">
          <li className="train__options__seats__services-list__item">Wi-Fi</li>
          <li className="train__options__seats__services-list__item">Экспресс</li>
          <li className="train__options__seats__services-list__item">Обед</li>
        </ul>
        <button className="train__options__proceed-ordering btn btn_orange-white">Выбрать места</button>
      </div>
    </div>
  );
}

export default TrainListItem;
