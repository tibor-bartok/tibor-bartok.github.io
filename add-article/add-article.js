if (localStorage.getItem("prihlasen") !== "ano") {
  window.location.href = "../login/login.html";
}

function odhlasit() {
  localStorage.removeItem("prihlasen");
  window.location.href = "../index.html";
}

const imageInput = document.getElementById("image");
const file = imageInput.files[0];

if (file) {
  const reader = new FileReader();
  reader.onload = function (e) {
    const imageData = e.target.result;
    // Tady můžeš uložit imageData do localStorage nebo zobrazit náhled
    console.log("Obrázek načten:", imageData);
  };
  reader.readAsDataURL(file);
}
