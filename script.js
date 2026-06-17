const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const counters = document.querySelectorAll(".counter");
let countersStarted = false;

function startCounters() {
  const statsSection = document.querySelector("#dados");
  const top = statsSection.getBoundingClientRect().top;

  if (top < window.innerHeight - 100 && !countersStarted) {
    countersStarted = true;

    counters.forEach((counter) => {
      const target = Number(counter.dataset.target);
      let count = 0;
      const speed = Math.max(10, Math.floor(1200 / target));

      const interval = setInterval(() => {
        count++;
        counter.textContent = count;

        if (count >= target) {
          clearInterval(interval);
        }
      }, speed);
    });
  }
}

window.addEventListener("scroll", startCounters);

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

for (let i = 0; i < 90; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 1,
    speedX: Math.random() * 0.6 - 0.3,
    speedY: Math.random() * 0.6 - 0.3
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    ctx.fillStyle = "rgba(110, 238, 255, 0.8)";
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();

    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

const chartCanvas = document.getElementById("circleChart");
const chartCtx = chartCanvas.getContext("2d");

function drawCircleChart(percent) {
  const centerX = chartCanvas.width / 2;
  const centerY = chartCanvas.height / 2;
  const radius = 85;
  let current = 0;

  function draw() {
    chartCtx.clearRect(0, 0, chartCanvas.width, chartCanvas.height);

    chartCtx.beginPath();
    chartCtx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    chartCtx.strokeStyle = "rgba(255,255,255,.15)";
    chartCtx.lineWidth = 22;
    chartCtx.stroke();

    chartCtx.beginPath();
    chartCtx.arc(
      centerX,
      centerY,
      radius,
      -Math.PI / 2,
      -Math.PI / 2 + Math.PI * 2 * (current / 100)
    );
    chartCtx.strokeStyle = "#ff4fd8";
    chartCtx.lineWidth = 22;
    chartCtx.lineCap = "round";
    chartCtx.stroke();

    chartCtx.fillStyle = "white";
    chartCtx.font = "bold 36px Arial";
    chartCtx.textAlign = "center";
    chartCtx.fillText(current + "%", centerX, centerY + 12);

    if (current < percent) {
      current++;
      requestAnimationFrame(draw);
    }
  }

  draw();
}

let chartStarted = false;

window.addEventListener("scroll", () => {
  const chartTop = chartCanvas.getBoundingClientRect().top;

  if (chartTop < window.innerHeight - 100 && !chartStarted) {
    chartStarted = true;
    drawCircleChart(76);
  }
});

const scanBtn = document.getElementById("scanBtn");
const fakeInput = document.getElementById("fakeInput");
const scanProgress = document.getElementById("scanProgress");
const scanResult = document.getElementById("scanResult");
const scannerText = document.getElementById("scannerText");

scanBtn.addEventListener("click", () => {
  const text = fakeInput.value.trim();

  if (text.length < 10) {
    scanResult.textContent = "Digite uma mensagem maior para iniciar a análise educativa.";
    return;
  }

  scanProgress.style.width = "0";
  scanResult.textContent = "";
  scannerText.textContent = "Analisando conteúdo...";

  setTimeout(() => {
    scanProgress.style.width = "35%";
    scannerText.textContent = "Verificando padrões de IA...";
  }, 400);

  setTimeout(() => {
    scanProgress.style.width = "70%";
    scannerText.textContent = "Buscando sinais de manipulação emocional...";
  }, 1100);

  setTimeout(() => {
    scanProgress.style.width = "100%";
    scannerText.textContent = "Análise concluída.";

    const suspiciousWords = ["urgente", "compartilhe", "ninguém quer que você saiba", "verdade escondida", "chocante"];
    const lowerText = text.toLowerCase();
    const found = suspiciousWords.some(word => lowerText.includes(word));

    if (found) {
      scanResult.textContent = "⚠ Atenção: o texto possui linguagem típica de conteúdo suspeito. Verifique a fonte antes de compartilhar.";
    } else {
      scanResult.textContent = "✅ Nenhum grande sinal foi encontrado, mas continue checando fonte, data, contexto e autoria.";
    }
  }, 1900);
});

const quizQuestions = [
  {
    question: "Qual é a melhor atitude ao receber um vídeo chocante no grupo da escola?",
    answers: ["Compartilhar rápido", "Checar a fonte antes", "Acreditar se parecer real", "Mandar para todos"],
    correct: 1
  },
  {
    question: "Deepfake pode manipular principalmente:",
    answers: ["Rosto e voz", "Apenas textos", "Somente senhas", "Apenas emojis"],
    correct: 0
  },
  {
    question: "Um sinal comum de deepfake é:",
    answers: ["Imagem perfeita sempre", "Movimento estranho da boca", "Legenda colorida", "Vídeo curto"],
    correct: 1
  },
  {
    question: "Bots podem ser usados para:",
    answers: ["Espalhar mensagens em massa", "Apagar a internet", "Criar senhas fortes", "Bloquear fake news automaticamente"],
    correct: 0
  },
  {
    question: "Antes de acreditar em uma notícia, você deve:",
    answers: ["Ver só o título", "Conferir data, fonte e contexto", "Confiar no print", "Acreditar se viralizou"],
    correct: 1
  },
  {
    question: "IA é sempre perigosa?",
    answers: ["Sim", "Não, depende do uso", "Só em vídeos", "Só em escolas"],
    correct: 1
  },
  {
    question: "Qual prática protege sua identidade online?",
    answers: ["Postar documentos", "Usar senha igual em tudo", "Ativar verificação em duas etapas", "Clicar em links suspeitos"],
    correct: 2
  },
  {
    question: "Fake news costuma usar:",
    answers: ["Linguagem emocional e urgente", "Fontes claras", "Contexto completo", "Dados bem explicados"],
    correct: 0
  },
  {
    question: "Se uma imagem parece estranha, você pode:",
    answers: ["Ignorar sinais", "Pesquisar em outras fontes", "Compartilhar primeiro", "Editar mais ainda"],
    correct: 1
  },
  {
    question: "Cidadania digital significa:",
    answers: ["Usar internet com responsabilidade", "Ficar online o dia inteiro", "Acreditar em tudo", "Nunca usar tecnologia"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const scoreBox = document.getElementById("scoreBox");

function loadQuestion() {
  answered = false;
  feedbackEl.textContent = "";
  scoreBox.textContent = "";

  const q = quizQuestions[currentQuestion];
  questionEl.textContent = `${currentQuestion + 1}. ${q.question}`;
  answersEl.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answer;

    btn.addEventListener("click", () => selectAnswer(btn, index));

    answersEl.appendChild(btn);
  });

  nextBtn.style.display = "none";
}

function selectAnswer(button, index) {
  if (answered) return;

  answered = true;

  const q = quizQuestions[currentQuestion];
  const allButtons = document.querySelectorAll(".answer-btn");

  allButtons.forEach((btn, i) => {
    if (i === q.correct) btn.classList.add("correct");
  });

  if (index === q.correct) {
    button.classList.add("correct");
    feedbackEl.textContent = "✅ Resposta correta! Você está ficando blindado digitalmente.";
    score++;
  } else {
    button.classList.add("wrong");
    feedbackEl.textContent = "⚠ Quase! Na internet, atenção é superpoder.";
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;

  if (currentQuestion < quizQuestions.length) {
    loadQuestion();
  } else {
    showFinalScore();
  }
});

function showFinalScore() {
  questionEl.textContent = "Resultado final";
  answersEl.innerHTML = "";
  feedbackEl.textContent = "";

  const percent = Math.round((score / quizQuestions.length) * 100);

  let message = "";

  if (percent >= 80) {
    message = "Especialista Digital 🧠⚡";
  } else if (percent >= 50) {
    message = "Explorador Digital em evolução 🚀";
  } else {
    message = "Precisa reforçar sua segurança online 🔐";
  }

  scoreBox.innerHTML = `
    Você acertou ${score} de ${quizQuestions.length} perguntas.<br>
    Aproveitamento: ${percent}%<br>
    Classificação: ${message}
  `;

  nextBtn.textContent = "REINICIAR QUIZ";
  nextBtn.style.display = "inline-block";

  nextBtn.onclick = () => {
    currentQuestion = 0;
    score = 0;
    nextBtn.textContent = "PRÓXIMA";
    nextBtn.onclick = null;
    nextBtn.addEventListener("click", nextQuizStep);
    loadQuestion();
  };
}

function nextQuizStep() {}

loadQuestion();
