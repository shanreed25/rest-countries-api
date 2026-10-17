import { renderDetail } from "./views/detail.js";
import { setNavigatedInApp } from "./state.js";

const DETAIL_URL_PREFIX = "#/country/";

export function render(){
    const homeView = document.getElementById("home-view");
    const detailView = document.getElementById("detail-view");

    if (location.hash.startsWith(DETAIL_URL_PREFIX)){
        const code = location.hash.slice(DETAIL_URL_PREFIX.length).toUpperCase();

        homeView.hidden = true;
        detailView.hidden = false;
        renderDetail(code);
    } else {
        // empty hash, "#/" and anything else shows home view
        detailView.hidden = true;
        homeView.hidden = false;
    }
}

export function startRouter(){
    // runs every time the hash changes
    // when card is click, Back button is clicked, url is typed
    window.addEventListener("hashchange", () => {
        setNavigatedInApp(true);
        render();
    });

    // so a shared detail link opens the right view on load
    render();
}