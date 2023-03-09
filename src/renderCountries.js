export const refs = {
  searchBox: document.querySelector('#search-box'),
  countriesList: document.querySelector('.countries-list'),
  countryInfo: document.querySelector('.country-info'),
};
export const clearSearch = () => {
  refs.countriesList.innerHTML = '';
  refs.countryInfo.innerHTML = '';
};
export const renderOneCountry = ({
  flags,
  name,
  capital,
  population,
  languages,
}) => {
  refs.countryInfo.innerHTML = `<div class="title"><img width=30 height=20 src=${
    flags.svg
  }><h1 class="country-name">${
    name.official
  }</h1></div><p><span class="key">Capital: </span>${capital}<p><p><span class="key">Population: </span> ${population}</p><p><span class="key">Languages: </span> ${Object.values(
    languages
  )}</p>`;
};

export const renderSeveralCountries = countries => {
  refs.countriesList.innerHTML = countries
    .map(
      country =>
        `<li class="country-item"><img src=${country.flags.svg} width=30 height=20><span>${country.name.official}<span></li>`
    )
    .join('');
};
