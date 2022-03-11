function CityList({ cities, direction, onCitySelect }) {
  return (
    <ul className="route-selector__cities" style={direction === 'to' ? { right: 0 } : {}}>
      {cities.map((city) => (
        <li
          className="route-selector__city"
          key={city._id}
          onMouseDown={() => onCitySelect(city.name, direction, city._id)}
        >
          {city.name}
        </li>
      ))}
    </ul>
  );
}

export default CityList;
