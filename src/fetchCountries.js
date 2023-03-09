import { Notify } from 'notiflix/build/notiflix-notify-aio';
export const fetchCountries = name => {
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`
  )
    .then(response => {
      switch (response.status) {
        case 200:
          return response.json();
        case 404:
          Notify.failure('Oops, there is no country with that name');
          return [];
        default:
          console.log('Unknown problem!?');
      }
    })
    .catch(error => {
      console.log(error);
    });
};
