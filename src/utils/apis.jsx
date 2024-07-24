export async function getCountries(region = '') {
  let url = 'https://restcountries.com/v3.1/all?fields=name,flags,cca3';
  if (region) {
    url = `https://restcountries.com/v3.1/region/${region}?fields=name,flags,cca3`;
  }
  return fetch(url).then((res) => res.json());
}
