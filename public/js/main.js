import { loadCountries } from "./data.js";


loadCountries().then((countries) => console.log(countries.length))