import Wrapper from '../Wrapper';

function About() {
  return (
    <Wrapper>
      <div className="about">
        <h2 className="about__title homepage-title">о нас</h2>
        <div className="about__body">
          <p className="about__paragraph">
            Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым
            днем все больше людей заказывают жд билеты через интернет.
          </p>

          <p className="about__paragraph">
            Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это
            делать? Мы расскажем о преимуществах заказа через интернет.
          </p>

          <p className="about__paragraph about__paragraph_important">
            Покупать жд билеты дешево можно за 90 суток до отправления поезда.
            <br />
            Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
