const STORAGE_KEY = "theme";

export function setupThemeToggle(){
    const button = document.querySelector(".toggle-theme-btn");

    // button matches to whatever theme the inline script applied
    updateButton(button, document.documentElement.dataset.theme);

    button.addEventListener("click", () => {
        const current = document.documentElement.dataset.theme;
        const next = current === "dark" ? "light" : "dark";

        document.documentElement.dataset.theme = next;
        updateButton(button, next);
        saveTheme(next);
    });
}

function updateButton(button, theme){
    // true when dark mode is on
    button.setAttribute("aria-pressed", String(theme === "dark"));
}

function saveTheme(theme){
    // for private windows or when storage is blocked
    try {
        localStorage.setItem(STORAGE_KEY, theme);
    } catch {
        // theme will change but won't be remembered
    }
}