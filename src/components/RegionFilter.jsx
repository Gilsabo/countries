import React from 'react';

export const RegionFilter = ({ region, setRegion }) => {
  const regions = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  return (
    <>
      <label className="mr-4 text-gray-400" htmlFor="region-filter">
        Region Filter
      </label>
      <select
        id="region-filter"
        value={region}
        onChange={(e) => setRegion(e.target.value)}
      >
        <option value="">All Regions</option>
        {regions.map((region) => (
          <option key={region} value={region}>
            {region}
          </option>
        ))}
      </select>
    </>
  );
};
