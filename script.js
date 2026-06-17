function openTab(id) {
  let tabs = document.querySelectorAll(".tab");
  tabs.forEach(t => t.classList.remove("active"));

  document.getElementById(id).classList.add("active");
}

// QUIZ
let pontos = 0;

function quiz(btn, correto) {
  if (correto) {
    btn.style.background = "lime";
    pontos++;
  } else {
    btn.style.background = "red";
  }

  document.getElementById("resultado").innerText =
    "Pontos: " + pontos;
}

// BARRAS
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fill").forEach(el => {
    el.style.width = el.getAttribute("data") + "%";
  });

  // contador caótico
  let c = 0;
  let counter = document.getElementById("contador");

  setInterval(() => {
    if (c < 100) c++;
    counter.innerText = "ALERTA GLOBAL: " + c + "%";
  }, 50);
});
