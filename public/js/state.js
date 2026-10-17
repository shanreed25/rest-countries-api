let countries = [];


//Map objects keys can be any value, and keeps the order entries were added
let countriesCode = new Map();

export function setCountries(itemsList){
    countries = itemsList;//saves the array 


    for (const country of itemsList){
        countriesCode.set(country.alpha3Code, country);
    }

}

//returns the real array, not a copy, and code that calls .push() or .sort() 
// on the result would change the stored list
export function getCountries(){//for the home view
    return countries;
}

export function getCountryByCode(code){//for the detail view
    return countriesCode.get(code);
}

let navigatedInApp = false;//will turn true when the hash is changed

export function hasNavigatedInApp(){
    return navigatedInApp;
}

export function setNavigatedInApp(value){
    navigatedInApp = value;
}