import RouteDetails from './RouteDetails';
import RouteFilters from './RouteFilters';

function RoutesAside({ type }) {
  return (
    <>
      {type === 'filters' && <RouteFilters />}
      {type === 'details' && <RouteDetails />}
      {type === 'payment' && <RouteDetails />}
    </>
  );
}

export default RoutesAside;
