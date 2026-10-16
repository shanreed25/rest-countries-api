let countries = [];


//Map objects keys can be any value, and keeps the order entries were added
let countriesCode = new Map();

export function setCountries(itemsList){
    countries = itemsList;//saves the array 


    // .set() is the usual way to add to a Map, adding one entry at a time
    // countriesByCode = new Map();
    // for (const country of list) {
    // countriesByCode.set(country.alpha3Code, country);
    // }

    //Map constructor accepts an array of [key, value] pairs and calls 
    // .set() for each pair behind the scenes
    countriesCode = new Map(itemsList.map((country) => [country.alpha3Code, country]))

}

//returns the real array, not a copy, and code that calls .push() or .sort() 
// on the result would change the stored list
export function getCountries(){//for the home view
    return countries;
}

export function getCountryByCode(code){//for the detail view
    return countriesCode.get(code);
}