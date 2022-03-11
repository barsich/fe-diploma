import images from '../../images';
import RatingStar from './RatingStar';

function OrderingSucceeded() {
  return (
    <div className="succeed">
      <h1 className="succeed__title">Благодарим Вас за заказ!</h1>
      <div className="succeed__card">
        <div className="succeed-card__header">
          <p className="succeed-card__order-number">№Заказа 285АА</p>
          <p className="succeed-card__total-price">
            сумма
            <span>
              7 760
              <svg
                width="21"
                height="27"
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
          </p>
        </div>
        <div className="succeed-card__instructions">
          <div className="succeed-card__instructions-item">
            <img src={images.orderingSucceeded.first} alt="" />
            <p>
              билеты будут отправлены
              <br /> на ваш <span>e-mail</span>
            </p>
          </div>
          <div className="succeed-card__instructions-item">
            <img src={images.orderingSucceeded.second} alt="" />
            <p>
              <span>распечатайте</span> и сохраняйте билеты до даты поездки
            </p>
          </div>
          <div className="succeed-card__instructions-item">
            <img src={images.orderingSucceeded.third} alt="" />
            <p>
              <span>предьявите</span> распечатанные билеты при посадке
            </p>
          </div>
        </div>
        <div className="succeed-card__info">
          <h2>Ирина Эдуардовна!</h2>
          <p>
            Ваш заказ успешно оформлен.
            <br /> В ближайшее время с вами свяжется наш оператор для подтверждения.
          </p>
          <p className='succeed-card__thank-you'>Благодарим Вас за оказанное доверие и желаем приятного путешествия!</p>
        </div>
        <div className="succeed-card__footer">
          <div className="succeed-card__rate">
            <span>Оценить сервис</span>
            {/* TODO to array */}
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
            <RatingStar />
          </div>
          <button className="succeed-card__back-to-homepage btn">
            вернуться на главную
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderingSucceeded;
