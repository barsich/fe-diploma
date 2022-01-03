import React from 'react';

function RouteSelector({ pageType }) {
  // TODO картиночки в инпутах, кастомный datepicker, выпадашка и поиск в направлениях
  return (
    <form className={`route-selector route-selector_${pageType}`}>
      <div className="route-selector__row">
        <p className="route-selector__direction-title">Направление</p>
        <input type="text" className="route-selector__direction-from" placeholder="Откуда" />
        <button className="route-selector__swapper btn btn-icon" type="button"></button>
        <input type="text" className="route-selector__direction-to" placeholder="Куда" />
      </div>
      <div className="route-selector__row">
        <p className="route-selector__date-title">Дата</p>
        <input type="date" className="route-selector__date-from" placeholder="ДД/ММ/ГГ" />
        <input type="date" className="route-selector__date-to" placeholder="ДД/ММ/ГГ" />
      </div>
      <button className="route-selector__submit-button btn btn_orange-black">Найти билеты</button>
    </form>
  );
}

export default RouteSelector;
