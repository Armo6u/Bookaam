const translations = {
    

};

let currentLang = "🇷🇺"; // Начальный язык

document.getElementById("language-toggle").addEventListener("click", () => {
    currentLang = currentLang === "🇷🇺" ? "en" : "🇷🇺"; // Меняем язык
    updateTexts(); // Обновляем текст на странице
});

function updateTexts() {
    const elements = document.querySelectorAll("[data-lang]");
    elements.forEach(el => {
        const key = el.getAttribute("data-lang");
        el.textContent = translations[currentLang][key];
    });
}