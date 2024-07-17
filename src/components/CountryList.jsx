import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { RegionFilter } from './RegionFilter';
import { SearchInput } from './SearchInput';

export default function CountryList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [region, setRegion] = useState('');

  const { isLoading, error, data } = useQuery({
    queryKey: ['CountriesInfo', region],
    queryFn: () => {
      let url = 'https://restcountries.com/v3.1/all?fields=name,flags,cca3';
      if (region) {
        url = `https://restcountries.com/v3.1/region/${region}?fields=name,flags,cca3`;
      }
      return fetch(url).then((res) => res.json());
    },
  });

  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    if (data) {
      const filtered = data.filter((country) =>
        country.name.common.toLowerCase().includes(searchQuery.toLowerCase()),
      );
      setFilteredCountries(filtered);
    }
  }, [data, searchQuery]);

  if (isLoading)
    return <div className="flex justify-center mt-6">Loading...</div>;
  if (error)
    return (
      <div className="flex justify-center mt-6">An error has occurred: </div> +
      error.message
    );

  return (
    <>
      <div className="sm:flex sm:justify-center mt-6 items-center ">
        <SearchInput
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <RegionFilter className="ml-2 " region={region} setRegion={setRegion} />
      </div>
      <ul className="flex justify-center mt-6 flex-row flex-wrap">
        {filteredCountries.length > 0 ? (
          filteredCountries.map((country) => (
            <div
              className="flex m-4 items-center hover:bg-slate-200 rounded p-6 hover:transition duration-700 hover:ease-in"
              key={country.cca3}
            >
              <li>{country.name.common}</li>
              <Link to={`${country.cca3.toLowerCase()}`}>
                <li>
                  <img
                    className="rounded-md w-10 ml-3 hover:transition duration-700 hover:ease-in hover:w-12"
                    src={country.flags.svg}
                    alt={`Flag of ${country.name.common}`}
                  />
                </li>
              </Link>
            </div>
          ))
        ) : (
          <div className="text-center mt-4">No countries found</div>
        )}
      </ul>
    </>
  );
}
