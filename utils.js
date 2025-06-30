function setupThemeToggle() {
    const themeToggle = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    if (!themeToggle || !themeIcon) return;
    
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        themeIcon.innerHTML = document.body.classList.contains("dark") ?
            `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />` :
            `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />`;
        localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    });

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        themeIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />`;
    }
}

function setupLanguageSelect() {
    const languageSelect = document.getElementById("languageSelect");
    if (!languageSelect) return;
    
    languageSelect.value = localStorage.getItem("language") || "uz";
    languageSelect.addEventListener("change", (e) => {
        localStorage.setItem("language", e.target.value);
        window.location.reload();
    });
}

function setupSettingsPanel() {
    const settingsBtn = document.getElementById("settingsBtn");
    const settingsPanel = document.getElementById("settingsPanel");
    const closeSettings = document.getElementById("closeSettings");
    if (!settingsBtn || !settingsPanel || !closeSettings) return;

    settingsBtn.addEventListener("click", () => {
        settingsPanel.classList.toggle("translate-x-full");
        settingsPanel.classList.toggle("slide-in");
    });

    closeSettings.textContent = localStorage.getItem("language") === "en" ? "Close" : localStorage.getItem("language") === "ru" ? "Закрыть" : "Yopish";
    closeSettings.addEventListener("click", () => {
        settingsPanel.classList.add("translate-x-full");
        settingsPanel.classList.remove("slide-in");
    });
}

function setupBackButton() {
    const backBtn = document.getElementById("backBtn");
    if (!backBtn) return;
    
    backBtn.textContent = localStorage.getItem("language") === "en" ? "Back" : localStorage.getItem("language") === "ru" ? "Назад" : "Orqaga";
    backBtn.addEventListener("click", () => window.history.back());
}

function setupContactAdmin() {
    const contactAdminBtn = document.getElementById("contactAdminBtn");
    const contactAdminModal = document.getElementById("contactAdminModal");
    if (!contactAdminBtn || !contactAdminModal) return;

    contactAdminBtn.addEventListener("click", () => {
        contactAdminModal.classList.toggle("hidden");
        contactAdminModal.classList.toggle("fade-in");
    });
}

function setupLogout() {
    const logoutBtn = document.getElementById("logoutBtn");
    if (!logoutBtn) return;
    
    logoutBtn.addEventListener("click", () => {
        localStorage.removeItem("user");
        window.location.href = "login.html";
    });
}

function setupLogin() {
    const loginForm = document.getElementById("loginForm");
    if (!loginForm) return;

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const firstName = document.getElementById("firstName")?.value;
        const lastName = document.getElementById("lastName")?.value;
        const password = document.getElementById("password")?.value;
        const rememberMe = document.getElementById("rememberMe")?.checked;
        const loginError = document.getElementById("loginError");

        if (!firstName || !lastName || !password || !loginError) return;

        if (password === "PASSWORDABDURAXMON") {
            const user = { firstName, lastName, lastActive: new Date().toLocaleString("uz-UZ", { timeZone: "Asia/Tashkent" }) };
            if (rememberMe) {
                localStorage.setItem("user", JSON.stringify(user));
            }
            window.location.href = "index.html";
        } else {
            loginError.textContent = localStorage.getItem("language") === "en" ? "Incorrect password!" : localStorage.getItem("language") === "ru" ? "Неверный пароль!" : "Noto‘g‘ri parol!";
            loginError.classList.remove("hidden");
        }
    });
}

function checkAuth() {
    if (window.location.pathname.includes("index.html") && !localStorage.getItem("user")) {
        window.location.href = "login.html";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setupThemeToggle();
    setupLanguageSelect();
    setupSettingsPanel();
    setupBackButton();
    setupContactAdmin();
    setupLogout();
    setupLogin();
    checkAuth();
});