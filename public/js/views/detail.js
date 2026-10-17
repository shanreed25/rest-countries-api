import { getCountryByCode, hasNavigatedInApp } from "../state.js";

export function renderDetail(code){
    const country = getCountryByCode(code);
    const heading = document.querySelector("#detail-view h2");

    if (!country){
        heading.textContent = "Country not found";
        return;
    }

    heading.textContent = country.name;
}