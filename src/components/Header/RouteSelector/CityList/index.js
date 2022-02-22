function CityList({ cities, direction, onCitySelect }) {
  return (
    <ul className="route-selector__city-list" style={direction === 'to' ? { right: 0 } : {}}>
      {cities.map((city) => (
        <li
          className="route-selector__city-list__item"
          key={city._id}
          onClick={() => onCitySelect(city.name, direction, city._id)}
        >
          {city.name}
        </li>
      ))}
    </ul>
  );
}

export default CityList;
