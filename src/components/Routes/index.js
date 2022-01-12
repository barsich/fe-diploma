import Wrapper from '../Wrapper';
import RoutesAside from './RoutesAside';
import RoutesMainSeatSelect from './RoutesMainSeatSelect';
import RoutesMainTickets from './RoutesMainTickets';

function Routes({ type }) {
  return (
    <Wrapper>
      <div className="routes">
        <RoutesAside />
        {type === 'routes' && <RoutesMainTickets />}
        {type === 'seatSelect' && <RoutesMainSeatSelect />}
      </div>
    </Wrapper>
  );
}

export default Routes;
