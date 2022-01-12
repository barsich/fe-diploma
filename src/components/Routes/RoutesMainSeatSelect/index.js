import RoutesMainTrain from './RoutesMainTrain';

function RoutesMainSeatSelect() {
  return (
    <main className="routes-main">
      <h2 className="routes-main__title">Выбор мест</h2>
      <RoutesMainTrain direction="there" />
      <RoutesMainTrain direction="back" />
    </main>
  );
}

export default RoutesMainSeatSelect;
