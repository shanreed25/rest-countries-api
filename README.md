## REST Countries API

**An application that fetches data from the REST Countries API , displays country information, and includes a color theme switcher for light and dark modes.**

> Note: Link to deployed site is in the notes of the submitted assignment, I did not want to make the link completely public to anyone so I want to keep the url private for now, but anyone with the link can access it.

## Features

- **Country cards**: the home view shows a card for every country with its flag, name, population, region, and capital.
- **Search**: typing in the search box shows only countries whose name contains the text (not case sensitive).
- **Region filter**: the dropdown shows only countries in Africa, Americas, Asia, Europe, or Oceania. Search and filter work together.
- **Detail view**: clicking a card opens a page with more facts (native name, sub region, top level domain, currencies, languages) and links to the country's border countries.
- **Border country links**: clicking a border country opens that country's detail view.
- **Back button**: returns to the previous view, or to the home view if the detail link was opened directly.
- **Shareable links**: every detail view has its own URL, such as `#/country/FRA`.
- **Theme switcher**: toggles light and dark mode, and remembers the choice for the next visit.
- **Loading and error messages**: shown while the data loads, or if it fails to load.

## Data source

The country data is stored locally in `public/data/data.json`, a copy of the REST Countries API (v2) response. It is one array of 250 country objects. The fields the app uses are `name`, `alpha3Code`, `flags`, `population`, `region`, `subregion`, `capital`, `nativeName`, `topLevelDomain`, `currencies`, `languages`, and `borders`.

## How to run it

The app must be opened through a local web server. Opening `index.html` by double-clicking it (a `file://` URL) will not work, because browsers block both JavaScript modules and `fetch()` on `file://` pages.

Pick one:

- **VS Code Live Server extension**: right-click `public/index.html` and choose "Open with Live Server".
- **npx serve**: from this folder, run `npx serve public` and open the URL it prints.
- **Wrangler (Cloudflare)**: from this folder, run `npx wrangler dev` and open the URL it prints. This uses the settings in `wrangler.jsonc`.

**Deployment**

The original is deployed with Cloudflare Workers static assets. `wrangler.jsonc` tells Cloudflare to serve the `public/` folder as-is. Running `npx wrangler deploy` uploads it. This copy uses the project name `rest-countries-api-commented`, so deploying it creates a separate site and does not replace the original.

## Folder structure

```
rest-countries-api-commented/
├── README.md            this file
├── wrangler.jsonc       Cloudflare deploy settings (serve the public/ folder)
├── AGENTS.md            instructions for AI assistants (from the course starter)
├── CLAUDE.md            points AI assistants to AGENTS.md
├── design/              the challenge's design images (mobile and desktop, light and dark)
└── public/              everything the browser downloads
    ├── index.html       the one HTML page; holds both views and the header
    ├── css/
    │   └── styles.css   all styles, theme colors, and responsive layout
    ├── data/
    │   └── data.json    the country data
    └── js/
        ├── main.js      entry point; runs the setup steps in order
        ├── data.js      fetches data.json
        ├── state.js     stores the country list and a code lookup, shared by other files
        ├── router.js    shows the home or detail view based on the URL hash
        ├── theme.js     light/dark toggle and saving the choice
        └── views/
            ├── home.js    builds the cards; search and region filter
            ├── detail.js  fills in the detail view; Back button
            └── status.js  loading and error messages
```

## Reflection
> This project uses modules, splitting the code into files by job such as `data.js` for fetching, `state.js` for shared data, `router.js` for switching views, and separate view files for the home and details pages. I first created two small apps that did what the app should do together. I did this because I was unsure on how to implement it without have my code unorganized. I created the details view, and the theme toggle in one app then, for the home view I got the countries displaying as cards, then added search and the region filter. Then I put these two together. This still proved harder than I thought but I eventually got it and just merged the code. Most challenge part was getting the search and region filter to work together. Each listener had to check both the search text and the region, or picking a region and then typing would undo the region filter. I fixed this by writing a separate function for each filter and running the country list through both inside one shared update function.

### Issues I found

#### Main Issues, Not Fixed: 
##### `status.js`
> No message if `data.json` failed to load
- I was trying to use this file for loading and error messages but it was removing things in a way I did not understand
- I figured I need to rethink how I was trying to implement this, so it is still not working

##### Some Regions Are Not Listed
> When I search for a country such as Antarctic, it comes back in the search but I cannot filter by region and get it to show
- But the design shows only the five main regions, and those three places still appear when no region is selected

#### Style Bugs
- Font was never applied because I did not use the variable for it and made page title bold.
- I changed the some of the classnamesin the HTML but never updated the css selector and some other styles were not correctly after  I merged the two projects. I fixed these by adding correct selectors in the css
- My region filter did not have a dropdown arrow, so I add a svg for it
- When no country is not found, the layout was not hidden because It was getting overridden, so I used `!important` to make sure it does not get over ridden
- Some of the detail styles we not applied because I had a id but was using a class selector



#### Other Issues I found
- Flag had no alt attribute so i added `flag.alt = "";` so screen readers will not read the file name
- Function names `renderCountires`, `createCounrtyCard`, `createCounrtyCardDetails` are spelled wrong but I did not change it both use the same misspelling and it still works, it's just a spelling issue
- There is some confusion in paramter names but the function still work just afeter reviewing my code I was a little confused because I use names that did not really apply to what was given as the value. I also did not change this becasue it works, just a little confusion might come in when reading the code
- The home view card did not include commas for the population, so I added  `country.population.toLocaleString("en-US")` to the cards population value
- Countries with no capital shows undefined so I added ``Capital: ${country.capital ?? "None"}`` as the text content