window.onload = function () {
  const navigace = document.querySelector(".hlavni-navigace");

  if (localStorage.getItem("prihlasen") === "ano") {
    // Přihlášený uživatel – zobrazit tlačítko Odhlásit se
    const tlacitko = document.createElement("button");
    tlacitko.textContent = "Odhlásit se";
    tlacitko.onclick = function () {
      localStorage.removeItem("prihlasen");
      window.location.href = "index.html"; // nebo login.html
    };
    navigace.appendChild(tlacitko);
  } else {
    // Nepřihlášený uživatel – zobrazit tlačítko Přihlásit se
    const odkaz = document.createElement("a");
    odkaz.textContent = "Přihlásit se";
    odkaz.href = "login/login.html";
    navigace.appendChild(odkaz);
  }
};


