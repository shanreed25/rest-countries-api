import { loadCountries } from "./data.js";
import { renderCountires, searchRegionFilter } from "./views/home.js";
import { setCountries } from "./state.js";
import { setupBackButton } from "./views/detail.js";
import { startRouter } from "./router.js";




loadCountries().then((countries) => {
  setCountries(countries);
  renderCountires(countries);
  searchRegionFilter(countries);
  setupBackButton();
  startRouter();
})