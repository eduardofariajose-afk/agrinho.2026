// Menu responsivo
const btnMenu = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

btnMenu.addEventListener("click", () => {
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
});

// Acessibilidade
function aumentarFonte() {
    document.body.style.fontSize = "18px";
}

function diminuirFonte() {
    document.body.style.fontSize = "14px";
}

function altoContraste() {
    document.body.classList.toggle("alto-contraste");
}

// Quiz
const perguntas = [
    {
        pergunta: "O que é desmatamento?",
        respostas: [
            { texto: "Remoção de vegetação natural", correta: true },
            { texto: "Plantio de árvores", correta: false },
            { texto: "Proteção da floresta", correta: false }
        ]
    },
    {
        pergunta: "O desmatamento prejudica o clima?",
        respostas: [
            { texto: "Sim", correta: true },
            { texto: "Não", correta: false }
        ]
    },
    {
        pergunta: "Plantar árvores ajuda a combater o desmatamento?",
        respostas: [
            { texto: "Sim", correta: true },
            { texto: "Não", correta: false }
        ]
    }
];

let pergunta


