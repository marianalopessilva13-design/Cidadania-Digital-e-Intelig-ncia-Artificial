let score = 0;

function responder(btn, correto) {
  if (correto) {
    btn.style.background = "#22c55e";
    score++;
  } else {
    btn.style.background = "#ef4444";
  }

  document.getElementById("resultado").innerText =
    "Pontuação: " + score;
}

function enviar() {
  const input = document.getElementById("input").value.toLowerCase();
  const res = document.getElementById("resposta");

  if (input === "sim") {
    res.innerText = "Você já foi exposto a desinformação online.";
  } else {
    res.innerText = "Boa prática: continue verificando fontes.";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fill").forEach(bar => {
    bar.style.width = bar.getAttribute("data-value") + "%";
  });

  let c = 0;
  const el = document.getElementById("contador");

  setInterval(() => {
    if (c < 100) c++;
    el.innerText = `Consciência digital estimada: ${c}%`;
  }, 30);
});
