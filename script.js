let score = 0;

function answer(btn, correct) {
  if (correct) {
    btn.style.background = "lime";
    score++;
  } else {
    btn.style.background = "red";
  }

  document.getElementById("quizResult").innerText =
    "Pontuação: " + score;
}

// FORM
function submitForm() {
  const input = document.getElementById("userInput").value.toLowerCase();
  const res = document.getElementById("formResponse");

  if (input === "sim") {
    res.innerText = "⚠️ Você já esteve exposto a desinformação!";
  } else {
    res.innerText = "✅ Continue verificando fontes confiáveis!";
  }
}

// COUNTER ANIMATION
let counter = document.getElementById("counter");
let count = 0;

window.addEventListener("scroll", () => {
  if (count === 0) {
    let interval = setInterval(() => {
      count++;
      counter.innerText = count + "% consciência digital";
      if (count >= 100) clearInterval(interval);
    }, 20);
  }
});

// BARS
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".fill").forEach(bar => {
    let value = bar.getAttribute("data-value");
    bar.style.width = value + "%";
  });
});

// DARK MODE
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
