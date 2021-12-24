import { NavLink } from 'react-router-dom';
import Wrapper from '../Wrapper';

export default function Header({ pageType }) {
  let headerClass = '';

  switch (pageType) {
    case 'main':
      headerClass = 'header-main';
      break;

    default:
      break;
  }

  return (
    <header className={`header ${headerClass}`}>
      <div className="header__logo-wrapper">
        <Wrapper>
          <p className="header__logo">Лого</p>
        </Wrapper>
      </div>
      <div className="header__navbar">
        <Wrapper>
          <ul>
            <li className="navbar__item">
              <NavLink className="navbar__link" to="#about">
                О нас
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink className="navbar__link" to="#how-it-works">
                Как это работает
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink className="navbar__link" to="#reviews">
                Отзывы
              </NavLink>
            </li>
            <li className="navbar__item">
              <NavLink className="navbar__link" to="#contacts">
                Контакты
              </NavLink>
            </li>
          </ul>
        </Wrapper>
      </div>
      {/* TODO props.children? компоненты в зависимости от типа страницы? */}
    </header>
  );
}
