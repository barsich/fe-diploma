import Select from '../../Select';
import Pagination from './Pagination';
import TrainList from './TrainList';
import { useSelector } from 'react-redux';
import { createQuery } from '../../../utils';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRoutes } from '../../../reducers/routes';

// TODO state
const sorting = ['времени', 'стоимости', 'длительности'];

function RoutesMainTickets() {
  const dispatch = useDispatch();
  const { options } = useSelector((state) => state.routes);

  useEffect(() => {
    dispatch(fetchRoutes(createQuery(options)));
  }, [dispatch]);

  return (
    <main className="routes-main">
      <div className="routes-main__header">
        <span className="routes-main__header__finded-count">найдено 20</span>
        <label className="routes-main__header__sort-by">
          <span>сортировать по:</span>
          <Select options={sorting} />
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
