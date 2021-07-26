import { useEffect, useState } from 'react';

import { useLocation, useHistory } from 'react-router-dom';

import { getAllCategory } from '../api';

import { Preloader } from '../components/Preloader';
import { CategoryList } from '../components/CategoryList';
import { Search } from '../components/Search';

export const Home = () => {
  const [catalog, setCatalog] = useState([]);
  const [filtredCatalog, setFilteredCatalog] = useState([]);

  const { pathname, search } = useLocation();
  const { push } = useHistory();

  debugger;
  const handleSearch = srt => {
    setFilteredCatalog(catalog.filter(el => el.strCategory.toLowerCase().includes(srt.toLowerCase())));
    push({
      pathname,
      search: `?search=${srt}`,
    });
  };

  useEffect(() => {
    const searchParam = !!search.split('=')[1] ? search.split('=')[1].toLowerCase() : '';

    getAllCategory().then(data => {
      setCatalog(data.categories);
      setFilteredCatalog(data.categories.filter(el => el.strCategory.toLowerCase().includes(searchParam)));
    });
  }, [search]);

  return (
    <>
      <Search cb={handleSearch} />
      {!catalog.length ? <Preloader /> : <CategoryList catalog={filtredCatalog} />}
    </>
  );
};
