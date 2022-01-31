import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCities, fetchCities } from '../../../reducers/cities';
import DatePicker, { registerLocale } from 'react-datepicker';
import ru from 'date-fns/esm/locale/ru/index.js';
import CityList from './CityList';

function RouteSelector({ pageType }) {
  // FIXME дейтпикер ломается при фокусе

  const dispatch = useDispatch();
  const [startDateFrom, setStartDateFrom] = useState();
  const [startDateTo, setStartDateTo] = useState();
  const [cityFrom, setCityFrom] = useState('');
  const [cityTo, setCityTo] = useState('');
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
    } else if (target.className === 'route-selector__direction-to') {
      setCityTo(target.value);
    }
    dispatch(fetchCities(target.value));
  };

  const handleBlur = () => {
    setFocusedInput(null);
    dispatch(clearCities());
  };

  const handleFocus = ({ target }) => {
    setFocusedInput(target);
    if (target.value) {
      dispatch(fetchCities(target.value));
    }
  };

  // const handleCitySelect = (value, direction) => {
  //   if (direction === 'from') {
  //     setCityFrom(value);
  //   } else {
  //     setCityTo(value);
  //   }
  // };

  const test = (value) => {
    console.log(value)
  };

  return (
    <form className={`route-selector route-selector_${pageType}`}>
      <div className="route-selector__row">
        <p className="route-selector__direction-title">Направление</p>
        <input
          type="text"
          className="route-selector__direction-from"
          placeholder="Откуда"
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={cityFrom}
          required={true}
        />
        {cities.length !== 0 &&
          focusedInput &&
          focusedInput.className === 'route-selector__direction-from' && (
            <CityList
              cities={cities}
              direction="from"
              onCitySelect={test}
            />
          )}
        <button className="route-selector__swapper btn btn-icon" type="button"></button>
        <input
          type="text"
          className="route-selector__direction-to"
          placeholder="Куда"
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          value={cityTo}
          required={true}
        />
        {cities.length !== 0 &&
          focusedInput &&
          focusedInput.className === 'route-selector__direction-to' && (
            <CityList
              cities={cities}
              direction="to"
              onCitySelect={test}
            />
          )}
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
      <button className="route-selector__submit-button btn btn_orange-black">Найти билеты</button>
    </form>
  );
}

export default RouteSelector;
