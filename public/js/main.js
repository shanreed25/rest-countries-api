import { loadCountries } from "./data.js";
import { renderCountires } from "./views/home.js";
import { searchForCountry } from "./views/home.js";




loadCountries().then((countries) => {
  renderCountires(countries);
  searchForCountry(countries);
})