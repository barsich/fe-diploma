import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Train from './Train';

function TrainList() {
  const { routes } = useSelector((state) => state.routes);
  const [routesWithIds, setRoutesWithIds] = useState([]);

  useEffect(() => {
    setRoutesWithIds(routes.map((item) => ({ ...item, id: nanoid() })));
  }, [routes]);
  
  return (
    <div className="train-list">
      {routesWithIds.map((item) => (
        <Train pageType={'routes'} route={item} key={item.id} />
      ))}
    </div>
  );
}

export default TrainList;
