import { getCountryByCode, hasNavigatedInApp } from "../state.js";

export function renderDetail(code){
    const country = getCountryByCode(code);
    const content = document.getElementById("detail-content");
    const notFound = document.getElementById("detail-not-found");

    if (!country){
        content.hidden = true;
        notFound.hidden = false;
        return;
    }

    content.hidden = false;
    notFound.hidden = true;

    const flag = document.getElementById("detail-flag");
    flag.src = country.flags.svg ?? country.flags.png;
    flag.alt = `Flag of ${country.name}`;


    const name = document.getElementById("detail-name");
    name.textContent = country.name;

    document.getElementById("detail-list-main").replaceChildren(
        createDetail("Native Name", country.nativeName),
        createDetail("Population", country.population.toLocaleString("en-US")),
        createDetail("Region", country.region),
        createDetail("Sub Region", country.subregion),
        createDetail("Capital", country.capital)
    );

    document.getElementById("detail-list-extra").replaceChildren(
        createDetail("Top Level Domain", listText(country.topLevelDomain)),
        createDetail("Currencies", listText(country.currencies?.map((c) => c.name))),
        createDetail("Languages", listText(country.languages?.map((l) => l.name)))
    );


    renderBorders(country.borders);

    // start at the top, and move focus to the country name
    window.scrollTo(0, 0);
    name.focus();
}

function renderBorders(borderCodes){
    const borderList = document.getElementById("border-list");

    // no borders field
    if (!borderCodes || borderCodes.length === 0){
        const item = document.createElement("li");
        item.textContent = "None";
        borderList.replaceChildren(item);
        return;
    }

    const items = [];

    for (const code of borderCodes){
        const neighbor = getCountryByCode(code);

        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = `#/country/${code}`;
        // if a neighbor is missing from the data
        link.textContent = neighbor ? neighbor.name : code;

        item.append(link);
        items.push(item);
    }

    borderList.replaceChildren(...items);
}

// one row: <div><dt>Label:</dt><dd>Value</dd></div>
function createDetail(label, value){
    const row = document.createElement("div");
    const term = document.createElement("dt");
    const description = document.createElement("dd");

    term.textContent = `${label}:`;
    description.textContent = value ?? "None";

    row.append(term, description);
    return row;
}

function listText(items){
    if (!items || items.length === 0){
        return "None";
    }
    return items.join(", ");
}

// runs once at startup
export function setupBackButton(){
    const backButton = document.getElementById("back-button");

    backButton.addEventListener("click", () => {
        if (hasNavigatedInApp()){
            // go back like the browser button
            history.back();
        } else {
            // go to home instead of leaving the site
            location.hash = "#/";
        }
    });
}