import TrainList from "./TrainList";

function RoutesMain() {
  return (
    <main className="routes-main">
      <div className="routes-main__header">
        <span className="routes-main__header__finded-count">найдено 20</span>
        <select className="routes-main__header__sort-by">
          сортировать по:
          <option value="time">времени</option>
          <option value="price">стоимости</option>
          <option value="duration">длительности</option>
        </select>
        <div className="routes-main__header__show-count">
          показывать по:
          <a href="" className="show-count_5">
            5
          </a>
          <a href="" className="show-count_10">
            10
          </a>
          <a href="" className="show-count_20">
            20
          </a>
        </div>
      </div>
      <TrainList />
    </main>
  );
}

export default RoutesMain;
