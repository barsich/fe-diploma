import Wrapper from '../Wrapper';
import RoutesAside from './RoutesAside';
import RoutesMainPassengers from './RoutesMainPassengers';
import RoutesMainPayment from './RoutesMainPayment';
import RoutesMainSeatSelect from './RoutesMainSeatSelect';
import RoutesMainTickets from './RoutesMainTickets';
import RoutesMainVerification from './RoutesMainVerification';

function Routes({ type }) {
  return (
    <Wrapper>
      <div className="routes">
        {/* aside */}
        {(type === 'routes' || type === 'seatSelect') && <RoutesAside type="filters" />}
        {(type === 'passengers' || type === 'payment' || type === 'verification') && (
          <RoutesAside type="details" />
        )}
        {/* main */}
        {type === 'routes' && <RoutesMainTickets />}
        {type === 'seatSelect' && <RoutesMainSeatSelect />}
        {type === 'passengers' && <RoutesMainPassengers />}
        {type === 'payment' && <RoutesMainPayment />}
        {type === 'verification' && <RoutesMainVerification />}
      </div>
    </Wrapper>
  );
}

export default Routes;
