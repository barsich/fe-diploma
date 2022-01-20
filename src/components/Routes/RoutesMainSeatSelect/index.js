import RoutesMainTrain from './RoutesMainTrain';

function RoutesMainSeatSelect() {
  return (
    <main className="routes-main">
      <h2 className="routes-main__title">Выбор мест</h2>
      <RoutesMainTrain direction="there" />
      <RoutesMainTrain direction="back" />
      <button className="routes-main__proceed-button btn btn_orange-white">Далее</button>
    </main>
  );
}

export default RoutesMainSeatSelect;
