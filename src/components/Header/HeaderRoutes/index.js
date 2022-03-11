import RouteSelector from '../RouteSelector';

function HeaderRoutes() {
  // TODO active stage
  return (
    <div className="header-routes__block">
      <div className="header-routes__route-selector">
        <RouteSelector pageType={'routes'} />
      </div>
      <div className="stages-wrapper">
        <ul className="header-routes__stages">
          <li className="header-routes__stage stages__item_active"><span className="header-routes__stage-count">1</span> Билеты</li>
          <li className="header-routes__stage"><span className="header-routes__stage-count">2</span> Пассажиры</li>
          <li className="header-routes__stage"><span className="header-routes__stage-count">3</span> Оплата</li>
          <li className="header-routes__stage"><span className="header-routes__stage-count">4</span> Проверка</li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderRoutes;
