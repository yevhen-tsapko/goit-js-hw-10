import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  refs,
  clearSearch,
  renderOneCountry,
  renderSeveralCountries,
} from './renderCountries';
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const onInputSearch = evt => {
  clearSearch();
  const searchString = evt.target.value.trim();
  if (searchString) {
    fetchCountries(searchString).then(countries => {
      if (countries.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else {
        if (countries.length === 1) renderOneCountry(countries[0]);
        else renderSeveralCountries(countries);
      }
    });
  }
};
refs.searchBox.addEventListener(
  'input',
  debounce(onInputSearch, DEBOUNCE_DELAY)
);
