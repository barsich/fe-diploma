import Train from '../RoutesMainTickets/TrainList/Train';

function RoutesMainVerification() {
  return (
    <main className="routes-main">
      <div className="routes-main__verification">
        <div className="routes-main__verification__train">
          <div className="routes-main__verification__header">
            <span>Поезд</span>
          </div>
          <div className="routes-main__verification__body">
            {/* TODO передать нужный поезд */}
            <Train pageType={'verification'} />
          </div>
        </div>
        <div className="routes-main__verification__passengers">
          <div className="routes-main__verification__header">
            <span>Пассажиры</span>
          </div>
          <div className="routes-main__verification__body">
            <div className="routes-main__verification__passengers__list">
              {/* TODO отдельный компонент */}
              <div className="routes-main__verification__passengers__list__item">
                <div className="routes-main__verification__passengers__list__item__ticket-type">
                  <img src="" alt="" />
                  <span>Взрослый</span>
                </div>
                <div className="routes-main__verification__passengers__list__item__ticket-details">
                  <span className="routes-main__verification__passengers__list__item__ticket-details__full-name">
                    Мартынюк Ирина Эдуардовна
                  </span>
                  <span className="routes-main__verification__passengers__list__item__ticket-details__gender">
                    Пол женский
                  </span>
                  <span className="routes-main__verification__passengers__list__item__ticket-details__date-of-birth">
                    Дата рождения 17.02.1985
                  </span>
                  <span className="routes-main__verification__passengers__list__item__ticket-details__document">
                    Паспорт РФ 4204 380694
                  </span>
                </div>
              </div>
            </div>
            <div className="routes-main__verification__passengers__side-column">
              <div className="routes-main__verification__passengers__total-price">
                <span>Всего</span>
                <span>7 760</span>
              </div>
              <button className="routes-main__verification__change btn btn_black-border">
                Изменить
              </button>
            </div>
          </div>
        </div>
        <div className="routes-main__verification__payment">
          <div className="routes-main__verification__header">
            <span>Способ оплаты</span>
          </div>
          <div className="routes-main__verification__passengers__side-column">
            <button className="routes-main__verification__change btn btn_black-border">
              Изменить
            </button>
          </div>
          <div className="routes-main__verification__body"></div>
        </div>
      </div>
      <button className="routes-main__proceed-button btn btn_orange-white">Подтвердить</button>
    </main>
  );
}

export default RoutesMainVerification;
