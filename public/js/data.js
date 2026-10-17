
/*
Country data, swap for hosted url later
*/
const DATA_URL = '../public/data/data.json';

export async function loadCountries(){
    //fetch returns a promise so I need to wait 
    //  for the response
    const res = await fetch(DATA_URL);

    //check res.ok, only true for only statuses 200 to 299
    if (!res.ok){
        //stops the function and rejects the promise with a message containing the status
        throw new Error(`Request Failed: ${res.status}`)
    }

    //read body and parse it from JSON to Javascript
    //json returns a promise so i need to wait for the data
    const countries =  await res.json();

    return countries;

}