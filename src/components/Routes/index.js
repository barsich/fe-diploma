import Wrapper from '../Wrapper';
import RoutesAside from './RoutesAside';
import RoutesMainTickets from './RoutesMainTickets';

function Routes({ type }) {
  return (
    <Wrapper>
      <div className="routes">
        <RoutesAside />
        {type === 'routes' && <RoutesMainTickets />}
      </div>
    </Wrapper>
  );
}

export default Routes;
