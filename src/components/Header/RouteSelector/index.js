import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCities, fetchCities } from '../../../reducers/cities';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/esm/locale/ru/index.js';
import CityList from './CityList';
import { changeOption } from '../../../reducers/routes';
import { getFormattedDate } from '../../../utils';

function RouteSelector({ pageType }) {
  // FIXME дейтпикер ломается при фокусе

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [startDateFrom, setStartDateFrom] = useState();
  const [startDateTo, setStartDateTo] = useState();
  const [cityFrom, setCityFrom] = useState('');
  const [cityTo, setCityTo] = useState('');
  const [cityIdFrom, setCityIdFrom] = useState(0);
  const [cityIdTo, setCityIdTo] = useState(0);
  const [focusedInput, setFocusedInput] = useState(null);

  const { cities } = useSelector((state) => state.cities);

  // for datepicker
  registerLocale('ru', ru);
  const datepickerOptions = {
    locale: 'ru',
    placeholderText: 'ДД/ММ/ГГГГ',
    dateFormat: 'dd.MM.yyyy',
  };
  const today = new Date();

  const handleChange = ({ target }) => {
    if (target.className === 'route-selector__direction-from') {
      setCityFrom(target.value);
      if (cities.length === 1 && cities[0].name.toLowerCase() === target.value.toLowerCase()) {
        setCityIdFrom(cities[0]._id);
      }
    } else if (target.className === 'route-selector__direction-to') {
      setCityTo(target.value);
      if (cities.length === 1 && cities[0].name.toLowerCase() === target.value.toLowerCase()) {
        setCityIdTo(cities[0]._id);
      }
    }
    dispatch(fetchCities(target.value));
  };

  const handleBlur = ({ target }) => {
    if (target.tagName === 'INPUT') {
      return;
    }
    setFocusedInput(null);
  };

  const handleFocus = ({ target }) => {
    setFocusedInput(target);
    if (target.value) {
      dispatch(fetchCities(target.value));
    }
  };

  const handleCitySelect = (value, direction, id) => {
    if (direction === 'from') {
      setCityFrom(value);
      setCityIdFrom(id);
    } else {
      setCityTo(value);
      setCityIdTo(id);
    }
    dispatch(clearCities());
  };

  // TODO загрузка
  const handleSubmit = (event) => {
    event.preventDefault();
    const options = {
      from_city_id: cityIdFrom,
      to_city_id: cityIdTo,
      date_start: startDateFrom && getFormattedDate(startDateFrom),
      date_end: startDateTo && getFormattedDate(startDateTo),
    };
    dispatch(dispatch(changeOption(options)));
    navigate('/routes');
  };

  return (
    <form
      className={`route-selector route-selector_${pageType}`}
      name="routeSelector"
      onSubmit={handleSubmit}
    >
      <div className="route-selector__row">
        <p className="route-selector__direction-title">Направление</p>
        <div className="route-selector__input-wrapper" tabIndex={0} onBlur={handleBlur}>
          <input
            type="text"
            className="route-selector__direction-from"
            placeholder="Откуда"
            onChange={handleChange}
            onFocus={handleFocus}
            value={cityFrom}
            required={true}
          />
          {cities.length !== 0 &&
            focusedInput &&
            focusedInput.className === 'route-selector__direction-from' && (
              <CityList cities={cities} direction="from" onCitySelect={handleCitySelect} />
            )}
        </div>
        <button className="route-selector__swapper btn btn-icon" type="button"></button>
        <div className="route-selector__input-wrapper" tabIndex={0} onBlur={handleBlur}>
          <input
            type="text"
            className="route-selector__direction-to"
            placeholder="Куда"
            onChange={handleChange}
            onFocus={handleFocus}
            value={cityTo}
            required={true}
          />
          {cities.length !== 0 &&
            focusedInput &&
            focusedInput.className === 'route-selector__direction-to' && (
              <CityList cities={cities} direction="to" onCitySelect={handleCitySelect} />
            )}
        </div>
      </div>
      <div className="route-selector__row">
        <p className="route-selector__date-title">Дата</p>
        <DatePicker
          className="route-selector__date-from"
          selected={startDateFrom}
          onChange={(date) => setStartDateFrom(date)}
          minDate={today}
          required={true}
          {...datepickerOptions}
        />
        <DatePicker
          className="route-selector__date-to"
          selected={startDateTo}
          onChange={(date) => setStartDateTo(date)}
          minDate={startDateFrom || today}
          {...datepickerOptions}
        />
      </div>
      <button className="route-selector__submit-button btn btn_orange-black" type="submit">
        Найти билеты
      </button>
    </form>
  );
}

export default RouteSelector;
