import Wrapper from '../Wrapper';

export default function Footer() {
  return (
    <footer className="footer">
      <Wrapper>
        <div className="footer__top">
          <div className="contact-us">
            <h3 className="footer-title">Свяжитесь с нами</h3>
            <ul className="contact-us__list">
              <li className="contact-us__list__item contact-us_phone">
                <a href="tel:+78000000000">8 (800) 000 00 00</a>
              </li>
              <li className="contact-us__list__item contact-us_mail">
                <a href="mailto:inbox@mail.ru">inbox@mail.ru</a>
              </li>
              <li className="contact-us__list__item contact-us_skype">
                <a href="skype:tu.train.tickets">tu.train.tickets</a>
              </li>
              <li className="contact-us__list__item contact-us_address">
                <span>
                  г. Москва
                  <br />
                  ул. Московская 27-35
                  <br />
                  555 555
                </span>
              </li>
            </ul>
          </div>
          <div className="subscriptions">
            <div className="subscriptions__email">
              <h3 className="footer-title">Подписка</h3>
              <form>
                <label className="subscriptions__label" htmlFor="subscriptions-email">
                  Будьте в курсе событий
                </label>
                <br />
                <input
                  type="email"
                  className="subscriptions__email__input"
                  placeholder="e-mail"
                  id="subscriptions-email"
                />
                <button className="subscriptions__email__button btn btn_white-border">Отправить</button>
              </form>
            </div>
            <div className="subscriptions__socials">
              <h3 className="footer-title">Подписывайтесь на нас</h3>
              <ul className="socials-list">
                <li className="socials-list__item">
                  <a
                    href="https://www.youtube.com/"
                    className="socials-list__item__link socials-link_youtube"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="socials-list__item__title">youtube</span>
                  </a>
                </li>
                <li className="socials-list__item">
                  <a
                    href="https://linkedin.com/"
                    className="socials-list__item__link socials-link_linkedin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="socials-list__item__title">linkedin</span>
                  </a>
                </li>
                <li className="socials-list__item">
                  <a
                    href="https://ru.wikipedia.org/wiki/Google%2B"
                    className="socials-list__item__link socials-link_google-plus"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="socials-list__item__title">google plus</span>
                  </a>
                </li>
                <li className="socials-list__item">
                  <a
                    href="https://facebook.com/"
                    className="socials-list__item__link socials-link_facebook"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="socials-list__item__title">facebook</span>
                  </a>
                </li>
                <li className="socials-list__item">
                  <a
                    href="https://twitter.com/"
                    className="socials-list__item__link socials-link_twitter"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="socials-list__item__title">twitter</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <div className="footer__bottom__logo">Лого</div>
          <button className="footer__bottom__go-up-button btn btn-icon">наверх</button>
          <div className="footer__bottom__credentials">2018 WEB</div>
        </div>
      </Wrapper>
    </footer>
  );
}
