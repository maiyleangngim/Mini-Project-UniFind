    // Theme toggle button
    document.addEventListener("DOMContentLoaded", () => {
    const html = document.documentElement;

    // Apply saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        html.classList.add("dark");
    }

    function setupThemeToggle(buttonId) {
        const btn = document.getElementById(buttonId);
        if (!btn) return;

        btn.addEventListener("click", () => {
            html.classList.toggle("dark");
            localStorage.setItem(
                "theme",
                html.classList.contains("dark") ? "dark" : "light"
            );
        });
    }

    // Desktop & Mobile buttons
    setupThemeToggle("theme-toggle-desktop");
    setupThemeToggle("theme-toggle-mobile");
});