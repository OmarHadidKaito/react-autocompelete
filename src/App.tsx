import { useState, useEffect } from 'react';
import Autocomplete from './components/AutoComplete';
import useDebounce from './hooks/useDebounce';
import { getMoives } from './__fakeApi__/moviesApi'
import './styles.css';

const App = () => {
  const [search, setSearch] = useState<string>('');
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearch = useDebounce(search, 500);
  const [movies, setMoveis] = useState<string[]>([]);

  useEffect(() => {
    setIsSearching(true);
    if (debouncedSearch) {
      getMoives(debouncedSearch as string).then((res) => {
        const moviesName = res.map(item => item.name);
        setMoveis(moviesName);
        setIsSearching(false)
      });
    }
  }, [debouncedSearch])

  const onChange = (value: string) => {
    setSearch(value)
  }

  return (
    <div className="wrapper">
      <h1>React Autocomplete</h1>
      <h2>Want to see something cool?, start typing</h2>
      <Autocomplete
        suggestions={movies}
        isLoading={isSearching}
        onSearch={onChange}
        value={search}

      />
    </div>
  );
};
export default App;
