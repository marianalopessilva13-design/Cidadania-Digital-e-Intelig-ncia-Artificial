/* =================================================
   MENU RESPONSIVO
================================================= */

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {

    menu.classList.toggle("active");

});





/* =================================================
   ANIMAÇÃO SUAVE AO ROLAR
================================================= */


const reveals = document.querySelectorAll(".reveal");


function revealOnScroll(){

    reveals.forEach((element)=>{

        let windowHeight = window.innerHeight;

        let elementTop =
        element.getBoundingClientRect().top;


        if(elementTop < windowHeight - 100){

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();







/* =================================================
   CHECKLIST INTERATIVO
================================================= */


const checkItems =
document.querySelectorAll(".check-item");


checkItems.forEach((item)=>{


    item.addEventListener("click",()=>{


        item.classList.toggle("active");


    });


});









/* =================================================
   QUIZ EDUCATIVO COM PONTUAÇÃO
================================================= */


const quiz = [

{

question:
"Qual é a melhor atitude antes de compartilhar uma notícia?",


answers:[

"Compartilhar rapidamente",

"Verificar a fonte e procurar confirmação",

"Acreditar se tiver muitas curtidas",

"Enviar para amigos perguntando"

],


correct:1

},




{

question:
"Qual sinal pode indicar um deepfake?",


answers:[

"Vídeo com legenda",

"Imagem colorida",

"Movimentos faciais estranhos ou voz artificial",

"Vídeo curto"

],


correct:2

},





{

question:
"O que significa cidadania digital?",


answers:[

"Usar tecnologia com responsabilidade",

"Ficar conectado o dia inteiro",

"Postar muitas fotos",

"Usar apenas redes sociais"

],


correct:0

},





{

question:
"Por que manchetes exageradas merecem cuidado?",


answers:[

"Porque sempre são verdadeiras",

"Porque tentam gerar reação rápida sem análise",

"Porque aparecem muito",

"Porque usam letras grandes"

],


correct:1

},




{

question:
"Qual prática ajuda contra fake news?",


answers:[

"Compartilhar primeiro",

"Ler apenas o título",

"Pesquisar em fontes confiáveis",

"Acreditar em mensagens encaminhadas"

],


correct:2

}

];





let currentQuestion = 0;

let score = 0;

let answered = false;



const questionElement =
document.getElementById("question");


const answersElement =
document.getElementById("answers");


const nextButton =
document.getElementById("nextBtn");


const scoreElement =
document.getElementById("score");







function loadQuestion(){


    answered = false;


    scoreElement.innerHTML = "";


    let current =
    quiz[currentQuestion];


    questionElement.innerHTML =
    current.question;


    answersElement.innerHTML = "";



    current.answers.forEach(
        (answer,index)=>{


        const button =
        document.createElement("button");


        button.className =
        "option";


        button.innerHTML =
        answer;



        button.addEventListener(
            "click",
            ()=>{


            if(answered){

                return;

            }


            answered = true;



            if(index === current.correct){


                button.classList.add(
                    "correct"
                );


                score++;


            }else{


                button.classList.add(
                    "wrong"
                );


                answersElement
                .children[current.correct]
                .classList.add(
                    "correct"
                );

            }


        });



        answersElement.appendChild(
            button
        );


    });


}






nextButton.addEventListener(
"click",
()=>{


    currentQuestion++;


    if(currentQuestion < quiz.length){


        loadQuestion();


    }else{


        questionElement.innerHTML =
        "Resultado final";


        answersElement.innerHTML =
        "";


        nextButton.style.display =
        "none";


        scoreElement.innerHTML =
        `
        Você acertou 
        ${score}
        de
        ${quiz.length}
        perguntas!

        <br><br>

        Continue praticando:
        antes de compartilhar,
        verifique.
        `;


    }


});



loadQuestion();









/* =================================================
   MITOS E VERDADES INTERATIVO
================================================= */


const myths =
document.querySelectorAll(".myth");


myths.forEach((item)=>{


    item.addEventListener(
    "click",
    ()=>{


        item.classList.toggle(
        "open"
        );


    });


});









/* =================================================
   BOTÃO VOLTAR AO TOPO
================================================= */


const topButton =
document.getElementById("topBtn");



window.addEventListener(
"scroll",
()=>{


    if(window.scrollY > 500){


        topButton.style.display =
        "block";


    }else{


        topButton.style.display =
        "none";


    }


});




topButton.addEventListener(
"click",
()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});










/* =================================================
   PIXELS / PARTÍCULAS FUTURISTAS
================================================= */


setInterval(()=>{


    const pixel =
    document.createElement("div");


    pixel.style.position =
    "fixed";


    pixel.style.width =
    "6px";


    pixel.style.height =
    "6px";


    pixel.style.left =
    Math.random() *
    window.innerWidth + "px";


    pixel.style.top =
    Math.random() *
    window.innerHeight + "px";


    pixel.style.background =
    "cyan";


    pixel.style.borderRadius =
    "50%";


    pixel.style.boxShadow =
    "0 0 15px cyan";


    pixel.style.pointerEvents =
    "none";


    pixel.style.zIndex =
    "-1";


    pixel.style.animation =
    "float 3s ease forwards";



    document.body.appendChild(
        pixel
    );



    setTimeout(()=>{


        pixel.remove();


    },3000);



},700);
