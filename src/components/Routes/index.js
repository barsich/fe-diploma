import Wrapper from '../Wrapper';
import RoutesAside from './RoutesAside';
import RoutesMain from './RoutesMain';

function Routes() {
  return (
    <Wrapper>
      <div className="routes">
        <RoutesAside />
        <RoutesMain />
      </div>
    </Wrapper>
  );
}

export default Routes;
