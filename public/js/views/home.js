export function createCounrtyCard(country) {
  const listItem = document.createElement("li");
  const article = document.createElement("article");
  const flag = document.createElement("img");

  article.className = "country-card";
  flag.className = "country-flag";

  flag.src = country.flags.png;
  flag.width = 320;
  flag.height = 213;

  const info = createCounrtyCardDetails(country);
  article.append(flag, info);
  listItem.append(article);

  return listItem;
}

export function createCounrtyCardDetails(country) {
  console.log(country.region);
  const info = document.createElement("div");
  const countryName = document.createElement("h3");
  const population = document.createElement("p");
  const region = document.createElement("p");
  const capital = document.createElement("p");

  info.className = "country-card-info";
  countryName.className = "country-name";

  countryName.innerText = country.name;
  population.innerHTML = `Population: ${country.population}`;
  region.innerHTML = `Region: ${country.region}`;
  capital.textContent = `Capital: ${country.capital}`;

  info.append(countryName, population, region, capital);
  return info;
}

export function renderCountires(countries) {
  const countriesUL = document.getElementById("countries-list");

  countriesUL.innerHTML = ""; //claer old cards

  for (const country of countries) {
    countriesUL.append(createCounrtyCard(country));
  }
}

export function filterByRegion(countries, regionQuery) {
  const matches = [];

  if (region === "") {
    return countries;
  }

  for (const country of countries) {
    if (countries.region === regionQuery) {
      matches.push(country);
    }
  }

  return matches;
}

export function searchForCountry(countries, searchRegion) {
    const matches = [];

    for (const country of countries) {
      if (country.name.toLowerCase().includes(searchRegion)) {
        matches.push(country);
      }
    }

    return matches;
}

export function searchRegionFilter(countries) {
  const searchInput = document.getElementById("country-search");
  const regionChoice = document.getElementById("country-region");
}
