import { useDispatch, useSelector } from 'react-redux';
import { useEffect, FC, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchTopData, clearTopData } from '../model/topAction';
import CustomCard from '../../../shared/UI/CustomCard/view/CustomCard';
import classes from './TopFeature.module.scss'
import { useCallback } from 'react';

interface TopFeatureProps {
  type: string;
}

const currentUrl = window.location.href;
console.log(currentUrl)

const TopFeature: FC<TopFeatureProps> = ({ type }) => {
  const dispatch = useDispatch();
  const { data, pagination } = useSelector((state) => state.top);

  const [searchData, setSearchData] = useState<string>('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const fetchMoreData = () => {
    const nextPage = pagination.current_page + 1;
    if (isSearchActive) {
      dispatch(fetchTopData(`${type}?q=${searchData}&page=${nextPage}`));
    } else {
      dispatch(fetchTopData(`top/${type}?page=${nextPage}`));
    }
  };

  const handleSearch = useCallback(() => {
    dispatch(clearTopData());
    setIsSearchActive(true);
    const newUrl = `/${type}?q=${searchData}`;
    window.history.pushState({ path: newUrl }, '', newUrl);
    dispatch(fetchTopData(`${type}?q=${searchData}`));
  }, [dispatch, searchData, type]);

  const handleRemoveSearch = () => {
    dispatch(clearTopData());
    setIsSearchActive(false);
    const newUrl = `/${type}?page=1`;
    window.history.pushState({ path: newUrl }, '', newUrl);
    dispatch(fetchTopData(`top/${type}?page=1`));
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q');
    const page = params.get('page') || '1';

    if (query) {
      setSearchData(query);
      setIsSearchActive(true);
      dispatch(fetchTopData(`${type}?q=${query}&page=${page}`));
    } else {
      dispatch(fetchTopData(`top/${type}?page=${page}`));
    }
  }, [dispatch, type]);

  return (
    <>
      <div>
        <input value={searchData} onChange={(e) => setSearchData(e.target.value)} type="text" />
        <button onClick={handleSearch}>Поиск</button>
        {isSearchActive && <button onClick={handleRemoveSearch}>Сбросить</button>}
      </div>
      <InfiniteScroll
        dataLength={data.length} 
        next={fetchMoreData} 
        hasMore={pagination.has_next_page} 
        loader={<h4>Loading...</h4>} 
      >
        <div className={classes.wrapper}>
          {data.map((item) => (
            <CustomCard
              key={item.mal_id}
              id={item.mal_id}
              img={item.images.jpg.image_url}
              title_en={item.title_english || item.name}
              title_jp={item.title_japanese || item.given_name}
              year={item.year || item.birthday}
              score={item.score || item.favorites}
              type={type}
            />
          ))}
        </div>
      </InfiniteScroll>
    </>
  );
};


export default TopFeature;
