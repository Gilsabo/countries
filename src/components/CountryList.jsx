import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCountries } from '../utils/apis';
import { RegionFilter } from './RegionFilter';
import { SearchInput } from './SearchInput';

export default function CountryList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [region, setRegion] = useState('');
  const [isAlphabetical, setIsAlphabetical] = useState(false);

  const { isLoading, error, data } = useQuery({
    queryKey: ['CountriesInfo', region],
    queryFn: () => getCountries(region),
  });

  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (data) {
      let filtered = data.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase()),
      );

      if (isAlphabetical) {
        filtered = filtered.sort((a, b) =>
          a.name.common.localeCompare(b.name.common),
        );
      }

      setFilteredCountries(filtered);
    }
  }, [data, searchQuery, isAlphabetical]);

  if (isLoading)
    return <div className="flex justify-center mt-6">Loading...</div>;
  if (error)
    return (
      <div className="flex justify-center mt-6">
        An error has occurred: {error.message}
      </div>
    );

  return (
    <>
      <div className="sm:flex sm:justify-center mt-6 items-center">
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <RegionFilter className="ml-2" region={region} setRegion={setRegion} />
        <button
          onClick={() => setIsAlphabetical(!isAlphabetical)}
          className="ml-2 p-2 hover:bg-green-800 hover:text-white rounded text-green-800 border border-green-800"
        >
          {isAlphabetical ? 'Sort by Default' : 'Sort Alphabetically'}
        </button>
      </div>
      <ul className="flex justify-center mt-6 flex-row flex-wrap">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <Link
              to={`${country.cca3.toLowerCase()}`}
              className="flex m-4 items-center hover:bg-slate-200 rounded p-6 hover:transition duration-700 hover:ease-in"
              key={country.cca3}
            >
              <li>{country.name.common}</li>

              <li>
                <img
                  className="rounded-md w-10 ml-3 hover:transition duration-700 hover:ease-in hover:w-12"
                  src={country.flags.svg}
                  alt={`Flag of ${country.name.common}`}
                />
              </li>
            </Link>
          ))
        ) : (
          <div className="text-center mt-4">Information no available</div>
        )}
      </ul>
    </>
  );
}
