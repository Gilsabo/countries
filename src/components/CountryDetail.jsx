import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
  const { cca3 } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ['CountryDetail', cca3],
    queryFn: () =>
      fetch(`https://restcountries.com/v3.1/alpha/${cca3}`).then((res) =>
        res.json(),
      ),
  });

  if (isLoading) {
    return <div className="flex justify-center mt-6">Loading...</div>;
  }
  if (error) {
    return (
      <div className="flex justify-center mt-6">
        An error has occurred: {error.message}
      </div>
    );
  }

  const country = data[0];

  return country !== null ? (
    <div className="flex flex-col items-center mt-6">
      <h2 className="text-7xl">
        <span className="text-amber-800 flex text-center">
          {country.name.common}
        </span>
      </h2>
      <p className="mt-8 mb-6 text-slate-700">
        <span className="text-gray-400">Capital:</span> {country.capital}
      </p>
      <p className="mb-6 text-slate-700">
        <span className="text-gray-400">Region:</span> {country.region}
      </p>
      <p className="mb-6 text-slate-700">
        <span className="text-gray-400">Population: </span>
        {country.population} inhabitants
      </p>
      <p className="mb-6 flex list-none text-slate-700">
        <span className="text-gray-400">Currency: </span>
        {country.currencies ? (
          Object.entries(country.currencies).map(([code, currency]) => (
            <li key={code}> {currency.name}</li>
          ))
        ) : (
          <span>No currency information available</span>
        )}
      </p>
      <div>
        <span className="text-gray-400 flex flex-col items-center ">
          Language
        </span>
        {country.languages ? (
          Object.entries(country.languages).map(([code, language]) => (
            <li
              className="mt-3 list-none flex flex-col items-center border border-amber-700 rounded px-4 bg-amber-800 text-gray-100"
              key={code}
            >
              {language}
            </li>
          ))
        ) : (
          <span>No language information available</span>
        )}
      </div>
    </div>
  ) : (
    <div>No information available</div>
  );
};

export default CountryDetail;
