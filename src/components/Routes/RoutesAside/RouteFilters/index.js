import Slider from 'rc-slider';

function RouteFilters() {
  const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Range = createSliderWithTooltip(Slider.Range);

  const rangeStyleOptions = {
    handleStyle: [
      {
        width: '18px',
        height: '18px',
        border: 'none',
      },
    ],
    trackStyle: [
      {
        height: '10px',
        backgroundColor: '#ffa800',
        borderRadius: '5px',
      },
    ],
    railStyle: {
      height: '10px',
      backgroundColor: 'transparent',
      border: '1px solid #c4c4c4',
      borderRadius: '5px',
    },
  };

  const rangeOptionsTime = {
    min: 0,
    max: 24,
    step: 1,
    count: 2,
    allowCross: false,
    defaultValue: [0, 24],
    tipFormatter: (value) => {
      if (value < 10) {
        return `0${value}:00`;
      } else {
        return `${value}:00`;
      }
    },
    tipProps: {
      placement: 'bottom',
      visible: true,
    },
  };

  // TODO min-max, defaultValue
  const rangeOptionsPrice = {
    // min: 0,
    // max: 24,
    step: 1,
    // count: 2,
    allowCross: false,
    // defaultValue: [0, 24],
    tipProps: {
      placement: 'bottom',
      visible: true,
    },
  };

  // TODO collapsed to-from
  return (
    <>
      <div className="routes-aside__date routes-aside__filter-item">
        <h3 className="routes-aside__title">Дата поездки</h3>
        <input
          type="date"
          className="routes-aside__date__input input__date-from"
          name="date-from"
        />
        <h3 className="routes-aside__title">Дата возвращения</h3>
        <input type="date" className="routes-aside__date__input input__date-to" name="date-to" />
      </div>
      <ul className="routes-aside__service-list routes-aside__filter-item">
        <li className="service-list__item">
          <label
            className="service-list__item__switch switch service-list__item__coupe"
            htmlFor="coupe"
          >
            <span className="service-list__item__label">Купе</span>
            <input type="checkbox" id="coupe" name="coupe" />
            <div className="checkbox-slider"></div>
          </label>
        </li>
        <li className="service-list__item">
          <label
            className="service-list__item__switch switch  service-list__item__reserver-seat"
            htmlFor="reserved-seat"
          >
            <span className="service-list__item__label">Плацкарт</span>
            <input type="checkbox" id="reserved-seat" name="reserved-seat" />
            <div className="checkbox-slider"></div>
          </label>
        </li>
        <li className="service-list__item">
          <label
            className="service-list__item__switch switch  service-list__item__seating"
            htmlFor="seating"
          >
            <span className="service-list__item__label">Сидячий</span>
            <input type="checkbox" id="seating" name="seating" />
            <div className="checkbox-slider"></div>
          </label>
        </li>
        <li className="service-list__item">
          <label
            className="service-list__item__switch switch  service-list__item__lux"
            htmlFor="lux"
          >
            <span className="service-list__item__label">Люкс</span>
            <input type="checkbox" id="lux" name="lux" />
            <div className="checkbox-slider"></div>
          </label>
        </li>
        <li className="service-list__item">
          <label
            className="service-list__item__switch switch service-list__item__wi-fi"
            htmlFor="wi-fi"
          >
            <span className="service-list__item__label">Wi-Fi</span>
            <input type="checkbox" id="wi-fi" name="wi-fi" />
            <div className="checkbox-slider"></div>
          </label>
        </li>
        <li className="service-list__item">
          <label
            className="service-list__item__switch switch service-list__item__express"
            htmlFor="express"
          >
            <span className="service-list__item__label">Экспресс</span>
            <input type="checkbox" id="express" name="express" />
            <div className="checkbox-slider"></div>
          </label>
        </li>
      </ul>
      <div className="routes-aside__price routes-aside__filter-item">
        <h3 className="routes-aside__title">Стоимость</h3>
        <Range {...rangeStyleOptions} {...rangeOptionsPrice} />
      </div>
      <div className="routes-aside__direction-to routes-aside__filter-item">
        <div className="routes-aside__direction-to__header routes-aside__filter-item__header">
          <h3 className="routes-aside__title">Туда</h3>
          <div className="routes-aside__filter-item__header__collapse-button"></div>
        </div>
        <span className="routes-aside__span">Время отбытия</span>
        <Range {...rangeStyleOptions} {...rangeOptionsTime} />
        <span className="routes-aside__span">Время прибытия</span>
        <Range {...rangeStyleOptions} {...rangeOptionsTime} />
      </div>
      <div className="routes-aside__direction-from routes-aside__filter-item">
        <div className="routes-aside__direction-from__header routes-aside__filter-item__header">
          <h3 className="routes-aside__title">Обратно</h3>
          <div className="routes-aside__filter-item__header__collapse-button"></div>
        </div>
        <span className="routes-aside__span">Время отбытия</span>
        <Range {...rangeStyleOptions} {...rangeOptionsTime} />
        <span className="routes-aside__span">Время прибытия</span>
        <Range {...rangeStyleOptions} {...rangeOptionsTime} />
      </div>
    </>
  );
}

export default RouteFilters;
