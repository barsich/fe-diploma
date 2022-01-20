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
    <aside className="routes-aside routes-aside_filters">
      <div className="routes-aside__date routes-aside__item">
        <h3 className="routes-aside__title">Дата поездки</h3>
        <input
          type="date"
          className="routes-aside__date__input input__date-from"
          name="date-from"
        />
        <h3 className="routes-aside__title">Дата возвращения</h3>
        <input type="date" className="routes-aside__date__input input__date-to" name="date-to" />
      </div>
      <ul className="routes-aside__service-list routes-aside__item">
        <li className="service-list__item">
          <label
            className="service-list__item__switch switch service-list__item__second-class"
            htmlFor="second-class"
          >
            <span className="service-list__item__label">Купе</span>
            <input type="checkbox" id="second-class" name="second-class" />
            <div className="checkbox-slider"></div>
          </label>
        </li>
        <li className="service-list__item">
          <label
            className="service-list__item__switch switch  service-list__item__third-class"
            htmlFor="third-class"
          >
            <span className="service-list__item__label">Плацкарт</span>
            <input type="checkbox" id="third-class" name="third-class" />
            <div className="checkbox-slider"></div>
          </label>
        </li>
        <li className="service-list__item">
          <label
            className="service-list__item__switch switch  service-list__item__fourth-class"
            htmlFor="fourth-class"
          >
            <span className="service-list__item__label">Сидячий</span>
            <input type="checkbox" id="fourth-class" name="fourth-class" />
            <div className="checkbox-slider"></div>
          </label>
        </li>
        <li className="service-list__item">
          <label
            className="service-list__item__switch switch  service-list__item__first-class"
            htmlFor="first-class"
          >
            <span className="service-list__item__label">Люкс</span>
            <input type="checkbox" id="first-class" name="first-class" />
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
      <div className="routes-aside__price routes-aside__item">
        <h3 className="routes-aside__title">Стоимость</h3>
        <Range {...rangeStyleOptions} {...rangeOptionsPrice} />
      </div>
      <div className="routes-aside__direction-there routes-aside__item">
        <div className="routes-aside__direction-there__header routes-aside__item__header">
          <h3 className="routes-aside__title">Туда</h3>
          <div className="routes-aside__item__header__collapse-button"></div>
        </div>
        <span className="routes-aside__span">Время отбытия</span>
        <Range {...rangeStyleOptions} {...rangeOptionsTime} />
        <span className="routes-aside__span">Время прибытия</span>
        <Range {...rangeStyleOptions} {...rangeOptionsTime} />
      </div>
      <div className="routes-aside__direction-back routes-aside__item">
        <div className="routes-aside__direction-back__header routes-aside__item__header">
          <h3 className="routes-aside__title">Обратно</h3>
          <div className="routes-aside__item__header__collapse-button"></div>
        </div>
        <span className="routes-aside__span">Время отбытия</span>
        <Range {...rangeStyleOptions} {...rangeOptionsTime} />
        <span className="routes-aside__span">Время прибытия</span>
        <Range {...rangeStyleOptions} {...rangeOptionsTime} />
      </div>
    </aside>
  );
}

export default RouteFilters;
