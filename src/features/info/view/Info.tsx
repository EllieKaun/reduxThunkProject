import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from '../model/infoAction'

const Info = () => {
  const { items, error, status } = useSelector((state) => state.info);
  

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData());
    }
  }, [status, dispatch]);

  return <>
        <div>
            {items?.company}
        </div>
  </>;
};
export default Info;