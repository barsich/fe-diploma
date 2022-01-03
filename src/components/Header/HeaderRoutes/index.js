import RouteSelector from '../RouteSelector';

function HeaderRoutes() {
  // TODO active stage
  return (
    <div className="header-routes__block">
      <div className="header-routes__block__route-selector">
        <RouteSelector pageType={'routes'} />
      </div>
      <div className="stages-wrapper">
        <ul className="header-routes__block__stages">
          <li className="stages__item stages__item_active"><span className="stages__item__count">1</span> Билеты</li>
          <li className="stages__item"><span className="stages__item__count">2</span> Пассажиры</li>
          <li className="stages__item"><span className="stages__item__count">3</span> Оплата</li>
          <li className="stages__item"><span className="stages__item__count">4</span> Проверка</li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderRoutes;
