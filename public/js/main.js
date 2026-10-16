import { loadCountries } from "./data.js";
import { renderCountires } from "./views/home.js";
import { setCountries, getCountryByCode } from "./state.js";
import { showLoadingState } from "./views/status.js";



// loadCountries().then((countries) => {
//     /*
//     calls setCountries(), which saves the array
//     and goes through that same array and makes 
//     a code-to-country table
//     home view will use the array to draw cards in order
//     detail view will use code-to-country table to find 
//     a country by its code using the getCountryByCode() function
//     */
//     setCountries(countries);
//     console.log(getCountryByCode('DEU').name);
//     console.log(getCountryByCode('XYZ'));
//     console.log(countries.length)
// })

// showLoadingState();
// setTimeout(() => {
//   showError(() => console.log('retry clicked'));
// }, 2000);


loadCountries().then((countries) => {
  renderCountires(countries)
})