import RouteSelector from '../RouteSelector';

function HeaderMain() {
  return (
    <div className="header-main__block">
      <div className="header-main__block__tagline">
        <p className="tagline">Вся жизнь ‒</p>
        <p className="tagline_bold">путешествие!</p>
      </div>
      <div className="header-main__block__route-selector">
        <RouteSelector pageType={'main'} />
      </div>
    </div>
  );
}

export default HeaderMain;
