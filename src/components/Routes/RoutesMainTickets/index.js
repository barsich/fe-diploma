import Select from '../../Select';
import Pagination from './Pagination';
import TrainList from './TrainList';

// TODO state
const options = ['времени', 'стоимости', 'длительности'];

function RoutesMainTickets() {
  return (
    <main className="routes-main">
      <div className="routes-main__header">
        <span className="routes-main__header__finded-count">найдено 20</span>
        <label className="routes-main__header__sort-by">
          <span>сортировать по:</span>
          <Select options={options} />
        </label>
        <div className="routes-main__header__show-count">
          <span>показывать по:</span>
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
      <Pagination />
    </main>
  );
}

export default RoutesMainTickets;
