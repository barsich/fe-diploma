import images from '../../../images';
import Train from '../RoutesMainTickets/TrainList/Train';

function RoutesMainVerification() {
  return (
    <main className="routes-main">
      <div className="routes-verification">
        <div className="routes-verification__item routes-verification__train">
          <div className="routes-verification__header">
            <span>Поезд</span>
          </div>
          <div className="routes-verification__body">
            {/* TODO передать нужный поезд */}
            <Train pageType={'verification'} />
          </div>
        </div>
        <div className="routes-verification__item routes-verification__passenger">
          <div className="routes-verification__header">
            <span>Пассажиры</span>
          </div>
          <div className="routes-verification__body">
            <div className="routes-verification__passengers-list">
              {/* TODO отдельный компонент */}
              <div className="routes-verification__passenger">
                <div className="routes-verification__ticket-type">
                  <img src={images.passenger.round} alt="" />
                  <span>Взрослый</span>
                </div>
                <div className="routes-verification__ticket-details">
                  <span className="routes-verification__full-name">
                    Мартынюк Ирина Эдуардовна
                  </span>
                  <span className="routes-verification__gender">
                    Пол женский
                  </span>
                  <span className="routes-verification__date-of-birth">
                    Дата рождения 17.02.1985
                  </span>
                  <span className="routes-verification__document">
                    Паспорт РФ 4204 380694
                  </span>
                </div>
              </div>
            </div>
            <div className="routes-verification__side-column">
              <div className="routes-verification__total-price">
                <span>Всего</span>
                <span>
                  7 760
                  <svg
                    width="20"
                    height="24"
                    viewBox="0 0 16 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.00045 11.4048C4.00045 12.0432 4.00045 12.669 4.00045 13.3023C5.66463 13.3023 7.32349 13.3023 8.99034 13.3023C8.99034 13.9382 8.99034 14.5665 8.99034 15.2049C7.32882 15.2049 5.6673 15.2049 4.00045 15.2049C4.00045 16.4742 4.00045 17.7333 4.00045 19C3.33104 19 2.66963 19 1.99756 19C1.99756 17.7384 1.99756 16.4767 1.99756 15.21C1.32815 15.21 0.669408 15.21 0.00266697 15.21C0.00266697 14.5741 0.00266697 13.9458 0.00266697 13.3074C0.664074 13.3074 1.32548 13.3074 1.98956 13.3074C1.98956 12.6715 1.98956 12.0457 1.98956 11.4099C1.32815 11.4099 0.666741 11.4099 0 11.4099C0 10.7714 0 10.1431 0 9.50726C0.661407 9.50726 1.32281 9.50726 1.99222 9.50726C1.99222 6.33794 1.99222 3.17623 1.99222 0.00944994C2.03223 0.00691651 2.0589 0.00438309 2.08823 0.00438309C4.7552 0.00438309 7.42216 -0.00828404 10.0891 0.00944994C11.628 0.0195836 12.9668 0.554136 14.0922 1.55231C15.0364 2.38834 15.6444 3.41184 15.8844 4.61775C16.2178 6.29741 15.8284 7.83013 14.735 9.18805C13.9856 10.1203 13.0068 10.7638 11.8333 11.1312C11.2599 11.3111 10.6705 11.4048 10.0678 11.4048C8.08624 11.4073 6.10735 11.4048 4.12579 11.4073C4.08579 11.4048 4.04579 11.4048 4.00045 11.4048ZM4.00311 1.90445C4.00311 4.44548 4.00311 6.97383 4.00311 9.50473C4.03245 9.50473 4.05645 9.50473 4.08046 9.50473C6.08068 9.50473 8.0809 9.50979 10.0811 9.49966C10.3905 9.49712 10.7079 9.45406 11.0066 9.38059C13.1215 8.84857 14.3776 6.8725 13.8976 4.85336C13.4868 3.13063 11.8707 1.90445 10.0091 1.90445C8.0489 1.90445 6.08868 1.90445 4.12846 1.90445C4.08846 1.90445 4.04845 1.90445 4.00311 1.90445Z"
                      fill="#928F94"
                    ></path>
                  </svg>
                </span>
              </div>
              <button className="routes-verification__change-button btn btn_black-border">
                Изменить
              </button>
            </div>
          </div>
        </div>
        <div className="routes-verification__item routes-verification__payment">
          <div className="routes-verification__header">
            <span>Способ оплаты</span>
          </div>
          <div className="routes-verification__body">
            <div className="routes-verification__payment-type">
              <span>Наличными</span>
            </div>
            <div className="routes-verification__side-column">
              <button className="routes-verification__change-button btn btn_black-border">
                Изменить
              </button>
            </div>
          </div>
          <div className="routes-verification__body"></div>
        </div>
      </div>
      <button className="routes-main__proceed-button btn btn_orange-white">Подтвердить</button>
    </main>
  );
}

export default RoutesMainVerification;
