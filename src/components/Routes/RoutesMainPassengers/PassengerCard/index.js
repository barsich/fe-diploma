import React from 'react';

function PassengerCard() {
  return (
    <>
      <div className="routes-main__passenger-card">
        <div className="routes-main__passenger-card__header">
          <span className="routes-main__passenger-card__header__title">Пассажир 1</span>
          <button className="routes-main__passenger-card__header__delete-button btn">×</button>
        </div>
        <div className="routes-main__passenger-card__body">
          <div className="routes-main__passenger-card__personal-info">
            {/* TODO custom select */}
            <div className="select-wrapper">
              <select className="routes-main__passenger-card__personal-info__age">
                <option>Взрослый</option>
                <option>Детский</option>
              </select>
            </div>
            <div className="routes-main__passenger-card__personal-info__full-name">
              <label>
                Фамилия <br />
                <input type="text" name="surname" required={true} />
              </label>
              <label>
                Имя <br />
                <input type="text" name="name" required={true} />
              </label>
              <label>
                Отчество <br />
                <input type="text" name="patronymic" required={true} />
              </label>
            </div>
            <div className="routes-main__passenger-card__personal-info__gender-and-dob">
              <div className="routes-main__passenger-card__personal-info__gender">
                <span className="routes-main__passenger-card__personal-info__gender__title">
                  Пол
                </span>
                <br />
                <input type="radio" name="gender" id="gender-male" required={true} />
                <label htmlFor="gender-male">М</label>
                <input type="radio" name="gender" id="gender-female" />
                <label htmlFor="gender-female">Ж</label>
              </div>
              <label className="routes-main__passenger-card__personal-info__date-of-birth">
                Дата рождения <br />
                <input type="date" name="date-of-birth" required={true} />
              </label>
            </div>
            <div className="routes-main__passenger-card__personal-info__limited-mobility">
              <input type="checkbox" name="limited-mobility" id="limited-mobility" />
              <label htmlFor="limited-mobility">ограниченная подвижность</label>
            </div>
          </div>
          <div className="routes-main__passenger-card__document">
            <label>
              Тип документа <br />
              {/* TODO custom select */}
              <select className="routes-main__passenger-card__document__type">
                <option>Паспорт РФ</option>
                <option>Свидетельство о рождении</option>
              </select>
            </label>
            <label>
              Серия <br />
              <input
                type="text"
                name="surname"
                maxLength={4}
                id="passport-series"
                required={true}
              />
            </label>
            <label>
              Номер <br />
              <input type="text" name="name" maxLength={6} id="passport-number" required={true} />
            </label>
          </div>
          {/* <div className="routes-main__passenger-card__footer routes-main__passenger-card__footer_correct"> */}
          <div className="routes-main__passenger-card__footer">
            {/* <p className="routes-main__passenger-card__footer__message">
              Номер свидетельства о рожденни указан некорректно
              <br />
              Пример: <span>VIII ББ 123456</span>
            </p>
            <p className="routes-main__passenger-card__footer__message">Готово</p> */}
            <button className="routes-main__passenger-card__footer__next-passenger-button btn btn_black-border">
              Следующий пассажир
            </button>
          </div>
        </div>
      </div>

      <div className="routes-main__passenger-card routes-main__passenger-card_closed">
        <div className="routes-main__passenger-card__header">
          <span className="routes-main__passenger-card__header__title">Пассажир 2</span>
          <button className="routes-main__passenger-card__header__delete-button btn">×</button>
        </div>
      </div>

      <div className="routes-main__add-passenger">
        <span className="routes-main__add-passenger__title">Добавить пассажира</span>
        <button className="routes-main__add-passenger__add-button btn">×</button>
      </div>
    </>
  );
}

export default PassengerCard;
