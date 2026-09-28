// ARQUIVO: dados.js
// FUNÇÃO: Atuar como banco de dados central do sistema Tube.
// GUIA FUTURO PROGRAMADOR: 
// - Para ADICIONAR um novo vídeo: Copie um bloco entre chaves { ... }, coloque uma vírgula após o último bloco existente e cole o novo bloco.
// - Para REMOVER um vídeo: Apague todo o bloco correspondente.
// - IMPORTANTE: 'urlVideo' agora DEVE ser sempre uma Array [ "link1", "link2" ], mesmo se tiver apenas 1 vídeo.

const bancoDeVideos = [
    {
        idUnico: "vid_01",
        idGrupo: "santos_fc",
        titulo: "Santos FC - Gols Históricos da Vila",
        descricao: "Melhores momentos e jogadas clássicas do Santos.",
        urlVideo: [
            "caminho_do_seu_video/santos_parte1.mp4",
            "caminho_do_seu_video/santos_parte2.mp4",
            "caminho_do_seu_video/santos_parte3.mp4",
            "caminho_do_seu_video/santos_parte3.mp4"
        ],
        urlCapa: "caminho_da_imagem/capa_santos.jpg",
        tags: ["santos", "futebol", "pelé", "vila belmiro"]
    },

    {
        idUnico: "vid_02",
        idGrupo: "desenho", 
        titulo: "Zootopia",
        descricao: "Uma Grande Aventura dos personagens mais queridos da Animação",
        urlVideo: [
            "https://files.catbox.moe/artzv3.webm",
            "https://files.catbox.moe/4meyt5.webm",
            "https://files.catbox.moe/si0xxk.webm",
            "https://files.catbox.moe/hmob98.webm",
            "https://files.catbox.moe/lb961h.webm",
            "https://files.catbox.moe/74vkg8.mp4",
            "https://files.catbox.moe/mfub7x.mp4"
            
        ],
        urlCapa: "https://files.catbox.moe/82anbv.webp",
        tags: ["zootopia", "zotopia", "desenho", "desenhos"]
    }
];

// FUNÇÃO AUXILIAR GLOBAL
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}