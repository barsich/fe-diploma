function RouteDetails() {
  return (
    <aside className="routes-aside routes-aside_details">
      <div className="routes-aside__item">
        <h2 className="routes-aside__details-title">Детали поездки</h2>
      </div>
      <div className="routes-aside__direction-there routes-aside__item">
        <div className="routes-aside__direction-there__header routes-aside__item__header">
          <h3 className="routes-aside__title">Туда</h3>
          <span className="routes-aside__date">30.08.2018</span>
          <div className="routes-aside__item__header__collapse-button"></div>
        </div>
        <div className="routes-aside__details__item">
          <div className="routes-aside__details__item__row">
            <span className="routes-aside__details__item__row__title">№ Поезда</span>
            <span className="routes-aside__details__item__row__desc routes-aside__details__item__train-number">
              116С
            </span>
          </div>
          <div className="routes-aside__details__item__row">
            <span className="routes-aside__details__item__row__title">Направление</span>
            <span className="routes-aside__details__item__row__desc routes-aside__details__item__train-route routes-aside__details__item__column_right">
              Адлер
              <br />
              Санкт-Петербург
            </span>
          </div>
          <div className="routes-aside__details__item__row">
            <div className="routes-aside__details__train-from routes-aside__details__item__column_left">
              <span className="routes-aside__details__train-from__time">00:10</span>
              <span className="routes-aside__details__train-from__date">30.08.2018</span>
            </div>
            <div className="routes-aside__details__duration">
              <span className="routes-aside__details__duration__time duration-time_there">
                9 : 42
              </span>
            </div>
            <div className="routes-aside__details__train-to routes-aside__details__item__column_right">
              <span className="routes-aside__details__train-to__time">09:52</span>
              <span className="routes-aside__details__train-to__date">31.08.2018</span>
            </div>
          </div>
          <div className="routes-aside__details__item__row">
            <div className="routes-aside__details__train-from routes-aside__details__item__column_left">
              <span className="routes-aside__details__train-from__city">Москва</span>
              <span className="routes-aside__details__train-from__railway-stantion">
                Курский вокзал
              </span>
            </div>
            <div className="routes-aside__details__train-to routes-aside__details__item__column_right">
              <span className="routes-aside__details__train-to__city">Санкт-Петербург</span>
              <span className="routes-aside__details__train-to__railway-stantion">
                Ладожский вокзал
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="routes-aside__direction-back routes-aside__item">
        <div className="routes-aside__direction-back__header routes-aside__item__header">
          <h3 className="routes-aside__title">Обратно</h3>
          <span className="routes-aside__date">09.09.2018</span>
          <div className="routes-aside__item__header__collapse-button"></div>
        </div>
        <div className="routes-aside__details__item">
          <div className="routes-aside__details__item__row">
            <span className="routes-aside__details__item__row__title  routes-aside__details__item__column_left">
              № Поезда
            </span>
            <span className="routes-aside__details__item__row__desc routes-aside__details__item__column_right">
              116С
            </span>
          </div>
          <div className="routes-aside__details__item__row">
            <span className="routes-aside__details__item__row__title routes-aside__details__item__column_left">
              Направление
            </span>
            <span className="routes-aside__details__item__row__desc routes-aside__details__item__train-route routes-aside__details__item__column_right">
              Адлер
              <br />
              Санкт-Петербург
            </span>
          </div>
          <div className="routes-aside__details__item__row">
            <div className="routes-aside__details__train-to routes-aside__details__item__column_left">
              <span className="routes-aside__details__train-to__time">00:10</span>
              <span className="routes-aside__details__train-to__date">09.09.2018</span>
            </div>
            <div className="routes-aside__details__duration">
              <span className="routes-aside__details__duration__time duration-time_back">
                9 : 42
              </span>
            </div>
            <div className="routes-aside__details__train-from routes-aside__details__item__column_right">
              <span className="routes-aside__details__train-from__time">09:52</span>
              <span className="routes-aside__details__train-from__date">08.09.2018</span>
            </div>
          </div>
          <div className="routes-aside__details__item__row">
            <div className="routes-aside__details__train-to  routes-aside__details__item__column_left">
              <span className="routes-aside__details__train-to__city">Москва</span>
              <span className="routes-aside__details__train-to__railway-stantion">
                Курский вокзал
              </span>
            </div>
            <div className="routes-aside__details__train-from routes-aside__details__item__column_right">
              <span className="routes-aside__details__train-from__city">Санкт-Петербург</span>
              <span className="routes-aside__details__train-from__railway-stantion">
                Ладожский вокзал
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="routes-aside__passengers routes-aside__item">
        <div className="routes-aside__passengers__header routes-aside__item__header">
          <h3 className="routes-aside__title">Пассажиры</h3>
          <div className="routes-aside__item__header__collapse-button"></div>
        </div>
        <div className="routes-aside__details__item__row">
          <span className="routes-aside__passengers__title routes-aside__details__item__column_left">
            2 Взрослых
          </span>
          <span className="routes-aside__passengers__desc routes-aside__details__item__column_right">
            5 840
            <svg
              width="16"
              height="19"
              viewBox="0 0 16 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.00045 11.4048C4.00045 12.0432 4.00045 12.669 4.00045 13.3023C5.66463 13.3023 7.32349 13.3023 8.99034 13.3023C8.99034 13.9382 8.99034 14.5665 8.99034 15.2049C7.32882 15.2049 5.6673 15.2049 4.00045 15.2049C4.00045 16.4742 4.00045 17.7333 4.00045 19C3.33104 19 2.66963 19 1.99756 19C1.99756 17.7384 1.99756 16.4767 1.99756 15.21C1.32815 15.21 0.669408 15.21 0.00266697 15.21C0.00266697 14.5741 0.00266697 13.9458 0.00266697 13.3074C0.664074 13.3074 1.32548 13.3074 1.98956 13.3074C1.98956 12.6715 1.98956 12.0457 1.98956 11.4099C1.32815 11.4099 0.666741 11.4099 0 11.4099C0 10.7714 0 10.1431 0 9.50726C0.661407 9.50726 1.32281 9.50726 1.99222 9.50726C1.99222 6.33794 1.99222 3.17623 1.99222 0.00944994C2.03223 0.00691651 2.0589 0.00438309 2.08823 0.00438309C4.7552 0.00438309 7.42216 -0.00828404 10.0891 0.00944994C11.628 0.0195836 12.9668 0.554136 14.0922 1.55231C15.0364 2.38834 15.6444 3.41184 15.8844 4.61775C16.2178 6.29741 15.8284 7.83013 14.735 9.18805C13.9856 10.1203 13.0068 10.7638 11.8333 11.1312C11.2599 11.3111 10.6705 11.4048 10.0678 11.4048C8.08624 11.4073 6.10735 11.4048 4.12579 11.4073C4.08579 11.4048 4.04579 11.4048 4.00045 11.4048ZM4.00311 1.90445C4.00311 4.44548 4.00311 6.97383 4.00311 9.50473C4.03245 9.50473 4.05645 9.50473 4.08046 9.50473C6.08068 9.50473 8.0809 9.50979 10.0811 9.49966C10.3905 9.49712 10.7079 9.45406 11.0066 9.38059C13.1215 8.84857 14.3776 6.8725 13.8976 4.85336C13.4868 3.13063 11.8707 1.90445 10.0091 1.90445C8.0489 1.90445 6.08868 1.90445 4.12846 1.90445C4.08846 1.90445 4.04845 1.90445 4.00311 1.90445Z"
                fill="#928F94"
              />
            </svg>
          </span>
        </div>
        <div className="routes-aside__details__item__row">
          <span className="routes-aside__passengers__title routes-aside__details__item__column_left">
            1 Ребенок
          </span>
          <span className="routes-aside__passengers__desc routes-aside__details__item__column_right">
            1 920
            <svg
              width="16"
              height="19"
              viewBox="0 0 16 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.00045 11.4048C4.00045 12.0432 4.00045 12.669 4.00045 13.3023C5.66463 13.3023 7.32349 13.3023 8.99034 13.3023C8.99034 13.9382 8.99034 14.5665 8.99034 15.2049C7.32882 15.2049 5.6673 15.2049 4.00045 15.2049C4.00045 16.4742 4.00045 17.7333 4.00045 19C3.33104 19 2.66963 19 1.99756 19C1.99756 17.7384 1.99756 16.4767 1.99756 15.21C1.32815 15.21 0.669408 15.21 0.00266697 15.21C0.00266697 14.5741 0.00266697 13.9458 0.00266697 13.3074C0.664074 13.3074 1.32548 13.3074 1.98956 13.3074C1.98956 12.6715 1.98956 12.0457 1.98956 11.4099C1.32815 11.4099 0.666741 11.4099 0 11.4099C0 10.7714 0 10.1431 0 9.50726C0.661407 9.50726 1.32281 9.50726 1.99222 9.50726C1.99222 6.33794 1.99222 3.17623 1.99222 0.00944994C2.03223 0.00691651 2.0589 0.00438309 2.08823 0.00438309C4.7552 0.00438309 7.42216 -0.00828404 10.0891 0.00944994C11.628 0.0195836 12.9668 0.554136 14.0922 1.55231C15.0364 2.38834 15.6444 3.41184 15.8844 4.61775C16.2178 6.29741 15.8284 7.83013 14.735 9.18805C13.9856 10.1203 13.0068 10.7638 11.8333 11.1312C11.2599 11.3111 10.6705 11.4048 10.0678 11.4048C8.08624 11.4073 6.10735 11.4048 4.12579 11.4073C4.08579 11.4048 4.04579 11.4048 4.00045 11.4048ZM4.00311 1.90445C4.00311 4.44548 4.00311 6.97383 4.00311 9.50473C4.03245 9.50473 4.05645 9.50473 4.08046 9.50473C6.08068 9.50473 8.0809 9.50979 10.0811 9.49966C10.3905 9.49712 10.7079 9.45406 11.0066 9.38059C13.1215 8.84857 14.3776 6.8725 13.8976 4.85336C13.4868 3.13063 11.8707 1.90445 10.0091 1.90445C8.0489 1.90445 6.08868 1.90445 4.12846 1.90445C4.08846 1.90445 4.04845 1.90445 4.00311 1.90445Z"
                fill="#928F94"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="routes-aside__total-price routes-aside__item">
        <div className="routes-aside__details__item__row">
          <span className="routes-aside__total-price__title routes-aside__details__item__column_left">
            Итог
          </span>
          <span className="routes-aside__total-price__desc routes-aside__details__item__column_right">
            7 760
            <svg
              width="26"
              height="32"
              viewBox="0 0 16 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.00045 11.4048C4.00045 12.0432 4.00045 12.669 4.00045 13.3023C5.66463 13.3023 7.32349 13.3023 8.99034 13.3023C8.99034 13.9382 8.99034 14.5665 8.99034 15.2049C7.32882 15.2049 5.6673 15.2049 4.00045 15.2049C4.00045 16.4742 4.00045 17.7333 4.00045 19C3.33104 19 2.66963 19 1.99756 19C1.99756 17.7384 1.99756 16.4767 1.99756 15.21C1.32815 15.21 0.669408 15.21 0.00266697 15.21C0.00266697 14.5741 0.00266697 13.9458 0.00266697 13.3074C0.664074 13.3074 1.32548 13.3074 1.98956 13.3074C1.98956 12.6715 1.98956 12.0457 1.98956 11.4099C1.32815 11.4099 0.666741 11.4099 0 11.4099C0 10.7714 0 10.1431 0 9.50726C0.661407 9.50726 1.32281 9.50726 1.99222 9.50726C1.99222 6.33794 1.99222 3.17623 1.99222 0.00944994C2.03223 0.00691651 2.0589 0.00438309 2.08823 0.00438309C4.7552 0.00438309 7.42216 -0.00828404 10.0891 0.00944994C11.628 0.0195836 12.9668 0.554136 14.0922 1.55231C15.0364 2.38834 15.6444 3.41184 15.8844 4.61775C16.2178 6.29741 15.8284 7.83013 14.735 9.18805C13.9856 10.1203 13.0068 10.7638 11.8333 11.1312C11.2599 11.3111 10.6705 11.4048 10.0678 11.4048C8.08624 11.4073 6.10735 11.4048 4.12579 11.4073C4.08579 11.4048 4.04579 11.4048 4.00045 11.4048ZM4.00311 1.90445C4.00311 4.44548 4.00311 6.97383 4.00311 9.50473C4.03245 9.50473 4.05645 9.50473 4.08046 9.50473C6.08068 9.50473 8.0809 9.50979 10.0811 9.49966C10.3905 9.49712 10.7079 9.45406 11.0066 9.38059C13.1215 8.84857 14.3776 6.8725 13.8976 4.85336C13.4868 3.13063 11.8707 1.90445 10.0091 1.90445C8.0489 1.90445 6.08868 1.90445 4.12846 1.90445C4.08846 1.90445 4.04845 1.90445 4.00311 1.90445Z"
                fill="#E5E5E5"
              />
            </svg>
          </span>
        </div>
      </div>
    </aside>
  );
}

export default RouteDetails;
