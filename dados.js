// ARQUIVO: dados.js
// FUNÇÃO: Atuar como banco de dados central do sistema Tube.
// GUIA FUTURO PROGRAMADOR: 
// - Para ADICIONAR um novo vídeo: Copie um bloco entre chaves { ... }, coloque uma vírgula após o último bloco existente e cole o novo bloco.
// - Para REMOVER um vídeo: Apague todo o bloco correspondente.
// - IMPORTANTE: 'urlVideo' agora DEVE ser sempre uma Array [ "link1", "link2" ], mesmo se tiver apenas 1 vídeo.

const bancoDeVideos = [

    {
        idUnico: "vid_08",
        idGrupo: "serie",
        titulo: "Chaves",
        descricao: "O Maior Seriado História da TV Mundial está disponivel Aqui...",
        urlVideo: [
            "https://files.catbox.moe/v2ffcq.webm",
            // - A Casa Da Bruxa
            "https://files.catbox.moe/f57p1n.webm",
            "https://files.catbox.moe/v2ffcq.webm"
        ],
        urlCapa: "https://files.catbox.moe/568lp1.webp",
        tags: ["chaves", "serie", "chiquinha", "humor", "sbt"]
    },


    {
        idUnico: "vid_07",
        idGrupo: "aventura",
        titulo: "Matilda",
        descricao: "Matilda é uma criança brilhante que cresceu ignorada pelos pais, a ponto de esquecerem de matriculá-la na escola. Quando a menina descobre que possui poderes mágicos e seu pai a manda estudar, ela precisa proteger os colegas da malvada diretora.",
        urlVideo: [
            "https://files.catbox.moe/v2ffcq.webm",
            // - abaixo parte 0 ao 10
            "https://files.catbox.moe/y7v1ri.mp4",
            // - abaixo parte 10 ao 20
            "https://files.catbox.moe/43l044.mp4",
            // - abaixo parte 20 ao 30
            "https://files.catbox.moe/0dcf1w.mp4",
            // - abaixo parte 30 ao 40
            "https://files.catbox.moe/kskj12.mp4",
            // - abaixo parte 40 ao 50
            "https://files.catbox.moe/dmp0h0.mp4",
            // - abaixo parte 50 ao 60
            "https://files.catbox.moe/96pwdt.mp4",
            // - abaixo parte 60 ao 01:32:00
            "https://files.catbox.moe/ixqc5y.mp4",
            "https://files.catbox.moe/v2ffcq.webm"
        ],
        urlCapa: "https://files.catbox.moe/hx9oor.jpg",
        tags: ["diretora", "anos noventa", "escola", "aventura", "matilda"]
    },

    {
        idUnico: "vid_06",
        idGrupo: "desenho",
        titulo: "Leroy Stitch",
        descricao: "Como recompensa por supervisionar mais de 625 experimentos, Lilo, Stitch, Jumba e Pleakley ganham uma viagem pela galáxia, passando por lugares e situações que os fazem se sentir em casa. Suas vidas são subitamente transformadas quando o maligno Dr. Hamsterviel foge da prisão e força Jumba a criar um novo experimento: Leroy, o irmão gêmeo malvado de Stitch.",
        urlVideo: [
            "https://files.catbox.moe/v2ffcq.webm",
            "https://files.catbox.moe/riqkgw.mp4",
            "https://files.catbox.moe/0mg7ij.mp4",
            "https://files.catbox.moe/huy7ix.mp4",
            "https://files.catbox.moe/dmy2s1.mp4",
            "https://files.catbox.moe/atk6bt.mp4",
            "https://files.catbox.moe/240uxy.mp4",
            "https://files.catbox.moe/nkvxt8.mp4",
            "https://files.catbox.moe/v2ffcq.webm"
        ],
        urlCapa: "https://files.catbox.moe/pj9cmw.webp",
        tags: ["havaiana", "indiazinha", "desenho", "Leroy e Stitch", "Stitch"]
    },

    {
        idUnico: "vid_05",
        idGrupo: "desenho",
        titulo: "O Rei Leão 2",
        descricao: "O Rei Leão 2, a Continuação de uma grande hitoria de aventura",
        urlVideo: [
            "https://files.catbox.moe/v2ffcq.webm",
            "https://files.catbox.moe/u75vuf.mp4",
            "https://files.catbox.moe/0ycqf7.mp4",
            "https://files.catbox.moe/4cdqrb.mp4",
            "https://files.catbox.moe/v2ffcq.webm"
        ],
        urlCapa: "https://files.catbox.moe/lc2myy.webp",
        tags: ["o reei leão", "africa", "simba", "mufasa", "selva"]
    },


    {
        idUnico: "vid_04",
        idGrupo: "documentario",
        titulo: "Drenando o Titanic",
        descricao: "Documentário Sobre o Navio Titanic",
        urlVideo: [
            "https://files.catbox.moe/v2ffcq.webm",
            "https://files.catbox.moe/w6ed8c.webm"
        ],
        urlCapa: "https://files.catbox.moe/jwzcjf.jpg",
        tags: ["drenando", "navio", "histry", "documentario", "titanic"]
    },

    {
        idUnico: "vid_03",
        idGrupo: "desenho",
        titulo: "Shrek Terceiro",
        descricao: "Shrek Terceiro é um filme de animação, comédia e aventura lançado em 2007, dirigido por Chris Mille",
        urlVideo: [
            "https://files.catbox.moe/v2ffcq.webm",
            "https://files.catbox.moe/ifp13j.mp4",
            "https://files.catbox.moe/zfrdvl.mp4",
            "https://files.catbox.moe/ehu8a7.mp4"
        ],
        urlCapa: "https://files.catbox.moe/wafqof.webp",
        tags: ["terceiro", "burro", "fiona", "ogro", "Shrek"]
    },

    {
        idUnico: "vid_01",
        idGrupo: "desenho",
        titulo: "Carros 3",
        descricao: "Carros 3 (2017) é um filme de animação da Pixar Animation Studios que traz de volta o lendário carro de corrida Relâmpago McQueen enfrentando o maior desafio de sua carreira: o envelhecimento e a obsolescência.",
        urlVideo: [
            "https://files.catbox.moe/v2ffcq.webm",
            "https://files.catbox.moe/d4rngy.webm",
            "https://files.catbox.moe/uo9phs.webm",
            "https://files.catbox.moe/elin4v.webm"
        ],
        urlCapa: "https://files.catbox.moe/7fe68y.webp",
        tags: ["carros", "carros3", "corrida", "relâmpago mcqueen", "McQueen"]
    },

    {
        idUnico: "vid_02",
        idGrupo: "desenho", 
        titulo: "Zootopia",
        descricao: "Uma Grande Aventura dos personagens mais queridos da Animação",
        urlVideo: [
            "https://files.catbox.moe/v2ffcq.webm",
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