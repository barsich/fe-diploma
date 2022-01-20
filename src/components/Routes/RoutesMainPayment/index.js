function RoutesMainPayment() {
  return (
    <main className="routes-main">
      <div className="routes-main__payment">
        <div className="routes-main__payment__header">
          <span className="routes-main__payment__header__title">Персональные данные</span>
        </div>
        <div className="routes-main__payment__body">
          <div className="routes-main__payment__personal-info">
            <div className="routes-main__payment__personal-info__full-name">
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
            <div className="routes-main__payment__personal-info__phone">
              <label>
                Контактный телефон <br />
                <input type="text" name="phone-number" required={true} defaultValue={'+7'} />
              </label>
            </div>
            <div className="routes-main__payment__personal-info__mail">
              <label>
                E-mail <br />
                <input type="text" name="email" required={true} placeholder="inbox@gmail.ru" />
              </label>
            </div>
          </div>
        </div>
        <div className="routes-main__payment__header">
          <span className="routes-main__payment__header__title">Способ оплаты</span>
        </div>
        <div className="routes-main__payment__personal-info__payment-method">
          <input type="radio" name="payment-method" id="payment-method_online" required={true} />
          <label htmlFor="payment-method_online">Онлайн</label>
          <ul className="routes-main__payment__personal-info__payment-method__list">
            <li className="routes-main__payment__personal-info__payment-method__item payment-method_card">
              Банковской картой
            </li>
            <li className="routes-main__payment__personal-info__payment-method__item payment-method_paypal">
              PayPal
            </li>
            <li className="routes-main__payment__personal-info__payment-method__item payment-method_qiwi">
              Visa QIWI Wallet
            </li>
          </ul>
        </div>
        <div className="routes-main__payment__personal-info__payment-method">
          <input type="radio" name="payment-method" id="payment-method_cash" />
          <label htmlFor="payment-method_cash">Наличными</label>
        </div>
      </div>
      <button className="routes-main__proceed-button btn btn_orange-white">Купить билеты</button>
    </main>
  );
}

export default RoutesMainPayment;
