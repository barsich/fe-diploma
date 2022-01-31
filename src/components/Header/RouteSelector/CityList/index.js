function CityList({ cities, direction, onCitySelect }) {
  // () => onCitySelect(city.name)
  return (
    <ul className="route-selector__city-list" style={direction === 'to' ? { right: 0 } : {}}>
      {cities.map((city) => (
        <li
          className="route-selector__city-list__item"
          key={city._id}
          onClick={({ target }) => onCitySelect(target.value)}
        >
          {city.name}
        </li>
      ))}
    </ul>
  );
}

export default CityList;
