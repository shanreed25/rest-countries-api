## REST Countries API
**An application that fetches data from the REST Countries API , displays country information, and includes a color theme switcher for light and dark modes.**




#### Site Folder Structure
> The site files live in `public/`

```
public/
├── index.html //the one page the app runs on
├── css/
│   └── styles.css
├── data/
│   └── data.json       //country data file
└── js/          // the startup file and the files that handle data, shared state, routing, and the theme
    ├── main.js
    ├── data.js
    ├── state.js
    ├── router.js
    ├── theme.js
    └── views/      // the files that create each view on the page
        ├── home.js
        └── detail.js
```

## Reflection
> This project uses modules, splitting the code into files by job such as `data.js` for fetching, `state.js` for shared data, `router.js` for switching views, and separate view files for the home and details pages. I first created two small apps that did what the app should do together. I did this because I was unsure on how to implement it without have my code unorganized. I created the details view, and the theme toggle in one app then, for the home view I got the countries displaying as cards, then added search and the region filter. Then I put these two together. This still proved harder than I thought but I eventually got it and just merged the code. Most challenge part was getting the search and region filter to work together. Each listener had to check both the search text and the region, or picking a region and then typing would undo the region filter. I fixed this by writing a separate function for each filter and running the country list through both inside one shared update function.

