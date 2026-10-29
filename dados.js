// ARQUIVO: dados.js
// FUNÇÃO: Atuar como banco de dados central do sistema Tube.
// GUIA FUTURO PROGRAMADOR: 
// - Para ADICIONAR um novo vídeo: Copie um bloco entre chaves { ... }, coloque uma vírgula após o último bloco existente e cole o novo bloco.
// - Para REMOVER um vídeo: Apague todo o bloco correspondente.
// - IMPORTANTE: 'urlVideo' agora DEVE ser sempre uma Array [ "link1", "link2" ], mesmo se tiver apenas 1 vídeo.

const bancoDeVideos = [



{
    idUnico: "vid_28",
    idGrupo: "desenho",
    titulo: "Guerreiras do K-Pop",
    descricao: "Quando não estão lotando estádios, as estrelas do K-pop Rumi, Mira e Zoey usam seus poderes secretos para proteger os fãs de ameaças sobrenaturais.",
    urlVideo: [
    
    // - Abertura do Site
    "https://files.catbox.moe/v2ffcq.webm",

    // - parte1:
    "https://files.catbox.moe/et5ibl.mp4",
    // - parte2:
    "https://files.catbox.moe/mz37j7.mp4",
    // - parte3:
    "#",
    // - Abertura do Site
    "https://files.catbox.moe/v2ffcq.webm"
    ],
    urlCapa: "https://files.catbox.moe/6y125c.webp",
    tags: ["kpop", "desenho", "guerreiras do kpop", "guerreiras do KPop", "Guerreiras do K-Pop"]
},


{
    idUnico: "vid_27",
    idGrupo: "aventura",
    titulo: "O Auto da Compadecida",
    descricao: "As aventuras dos nordestinos João Grilo, um sertanejo pobre e mentiroso, e Chicó, o mais covarde dos homens. A dupla luta para sobreviver aplicando golpes no pequeno vilarejo de Taperoá, no sertão da Paraíba - nem o temido cangaceiro Severino de Aracaju escapa das artimanhas de João Grilo e Chicó. A dupla tem a chance de se redimir com a aparição de Nossa Senhora.",
    urlVideo: [
    "https://files.catbox.moe/v2ffcq.webm",

    // - Abertura do cinema nacional:

    "https://files.catbox.moe/n7a5pg.webm",

    "https://archive.org/download/oadc-box-dvd/O_AUTO_DA_COMPADECIDA_1.mp4",

    "https://files.catbox.moe/v2ffcq.webm"
    ],
    urlCapa: "https://files.catbox.moe/vd1eif.webp",
    tags: ["o auto da compadecida", "O Auto Da Compadecida", "nacional", "Cinema Nacional", "Jão Grilo"]
},


{
    idUnico: "vid_26",
    idGrupo: "drama",
    titulo: "A Paixão de Cristo",
    descricao: "As últimas 12 horas da vida de Jesus de Nazaré. No meio da noite, Jesus é traído por Judas e é preso por soldados no Monte das Oliveiras. Após ser severamente espancado pelos seus captores, Jesus é entregue para o governador romano na Judeia, Poncio Pilatos, pois só ele poderia ordenar a pena de morte. Jesus foi açoitado, coroado de espinhos e carregou a cruz até o local de execução, evento central de sacrifício e redenção na fé cristã.",
    urlVideo: [
    "https://files.catbox.moe/v2ffcq.webm",
    "https://archive.org/download/a.-paixao.de.-cristo.-2004.1080p.-dual/A.Paix%C3%A3o.de.Cristo.2004.1080p.Dual-WOLVERDONFILMES.COM.mp4",
    "https://files.catbox.moe/v2ffcq.webm"
    ],
    urlCapa: "https://files.catbox.moe/o6bbxo.webp",
    tags: ["a paixão de cristo", "A Paixão de Cristo", "Jesus Cristo", "drama", "Drama"]
},



{
    idUnico: "vid_25",
    idGrupo: "desenho",
    titulo: "O Rei Leão 1",
    descricao: "O Primeiro Filme da Saga de Animações Sobre o Rei Leão",
    urlVideo: [
    "https://files.catbox.moe/v2ffcq.webm",
    "https://archive.org/download/o-rei-leao-paixaoflix/CONV_O%20Rei%20Leao.mp4",
    "https://files.catbox.moe/v2ffcq.webm"
    ],
    urlCapa: "https://files.catbox.moe/sbjnky.webp",
    tags: ["o reei leão", "africa", "simba", "mufasa", "selva"]
},


{
    idUnico: "vid_24",
    idGrupo: "heroi",
    titulo: "Homem-Aranha: Sem Volta para Casa",
    descricao: "Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando o feitiço para reverter o evento não sai como esperado, o Homem-Aranha e o seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso.",
    urlVideo: [

        // - Abertura do Site:
        "https://files.catbox.moe/v2ffcq.webm",

        // - Filme:
        "https://archive.org/download/homem-aranha-sem-volta-para-casa-1080p/Homem%20Aranha%20%28Sem%20Volta%20Para%20Casa%29%20%281080p%29.mp4",

         // - Abertura do Site:
         "https://files.catbox.moe/v2ffcq.webm"
         ],
        // Capa - Homem-Aranha
        urlCapa: "https://files.catbox.moe/o3tmi0.webp",
        tags: ["homem aranha", "Homem-Aranha", "Heroi", "Marvel"]
    },



    {
        idUnico: "vid_23",
        idGrupo: "heroi",
        titulo: "Homem Aranha Longe De Casa",
        descricao: "Peter Parker está em uma viagem de duas semanas pela Europa, ao lado de seus amigos de colégio, quando é surpreendido pela visita de Nick Fury. Convocado para mais uma missão heroica, ele precisa enfrentar vários vilões que surgem em cidades símbolo do continente, como Londres, Paris e Veneza, e também a aparição do enigmático Mysterio",
        urlVideo: [

        // - Abertura do Site:
        "https://files.catbox.moe/v2ffcq.webm",

        // - Filme:
        "https://archive.org/download/homem-aranha-longe-de-casa_202202/Homem-Aranha%20Longe%20de%20Casa.mp4",

         // - Abertura do Site:
         "https://files.catbox.moe/v2ffcq.webm"
         ],
        // Capa - Homem-Aranha
        urlCapa: "https://files.catbox.moe/iwh9wr.webp",
        tags: ["homem aranha", "Homem-Aranha", "Heroi", "Marvel"]
    },


    {
        idUnico: "vid_22",
        idGrupo: "heroi",
        titulo: "O Incrivel Hulk",
        descricao: "O cientista Bruce Banner se esconde no Brasil enquanto busca desesperadamente a cura da mutação que o transforma em um monstro incontrolável. Só assim ele poderá novamente levar uma vida normal e ficar ao lado da mulher que ama. Porém, durante este processo, ele precisa lutar contra o Abominável, um novo inimigo que quer capturá-lo.",
        urlVideo: [

        // - Abertura do Site:
        "https://files.catbox.moe/v2ffcq.webm",

        // - part1
        "https://archive.org/download/o-incrivel-hulk/O%20Incr%C3%ADvel%20Hulk.mp4",

         // - Abertura do Site:
         "https://files.catbox.moe/v2ffcq.webm"
         ],
        // Capa - O Incrivel Hulk
        urlCapa: "https://files.catbox.moe/q00zyk.webp",
        tags: ["o incrivel hulk", "O Incrivel Hulk", "Hulk", "Marvel"]
    },


    {
        idUnico: "vid_21",
        idGrupo: "drama",
        titulo: "O Som Do Coração",
        descricao: "Evan, um músico talentoso, foge do orfanato e vai a Nova York em busca de seus pais. Em sua procura, ele encontra Wizard, um sem-teto que vive em um teatro abandonado. Depois de descobrir seu talento, Wizard dá ao garoto o nome de August Rush e traça um plano para lucrar às custas dele. Evan não tem a menor ideia de que seus pais, Lyla e Louis, também estão procurando por ele.",
        urlVideo: [

        // - Abertura do Site:
        "https://files.catbox.moe/v2ffcq.webm",

        // - part1
        "https://files.catbox.moe/aavnl5.mp4",

        // - part2
        "https://files.catbox.moe/5kkmb3.mp4",

        // - part3
        "https://files.catbox.moe/bres0y.mp4",

        // - Abertura do Site:
        "https://files.catbox.moe/v2ffcq.webm"
        ],
        // Capa - O Som Do Coração
        urlCapa: "https://files.catbox.moe/1gzape.webp",
        tags: ["o som do coração", "coração", "August Rush", "emoção"]
    },


    {
        idUnico: "vid_20",
        idGrupo: "aventura",
        titulo: "Herbie Meu Fusca Turbinado",
        descricao: "Maggie Peyton quer se tornar um piloto da NASCAR, mas seu pai superprotetor, Ray Peyton, não quer. Ray, que foi um piloto, quer que Maggie arrume um emprego de locutora de esportes para TV porque é mais lucrativo e deixe a pista para seu irmão. Quando Ray leva Maggie a um ferro-velho para escolher um carro, ela não tem ideia de que o pequeno Volkswagen chamado Herbie que ela leva para casa vai mudar sua vida.",
        urlVideo: [

        // - Abertura do Site:
        "https://files.catbox.moe/v2ffcq.webm",

        // - part1
        "https://archive.org/download/herbie-meu-fusca-turbinado-filme-completo/Herbie%20Meu%20Fusca%20Turbinado%20-%20Filme%20Completo%20.mp4",

        // - Abertura do Site:
        "https://files.catbox.moe/v2ffcq.webm"
        ],
        // Capa - Spirit: O Corcel Indomável
        urlCapa: "https://files.catbox.moe/8u1jx0.webp",
        tags: ["herbie meu fusca turbinado", "Lindsay Lohan", "carros", "corrida"]
    },

    {
        idUnico: "vid_19",
        idGrupo: "desenho",
        titulo: "Spirit O Corcel Indomável",
        descricao: "Animação sobre a amizade entre um menino indígena e um cavalo indomável apaixonado por uma égua. Ambientada no Velho Oeste americano, mostra o impacto do processo civilizatório na vida dos três e também na amizade que construíram.",
        urlVideo: [

        // - Abertura do Site:
        "https://files.catbox.moe/v2ffcq.webm",

            // - part1
            "https://files.catbox.moe/n2n5wn.mp4",
            // - part2
            "https://files.catbox.moe/7ca6wo.mp4",
            // - part3
            "https://files.catbox.moe/2ibuv2.mp4",
            
            // - Abertura do Site:
            "https://files.catbox.moe/v2ffcq.webm"
            ],
        // Capa - Spirit: O Corcel Indomável
        urlCapa: "https://files.catbox.moe/q8a8ye.webp",
        tags: ["spirit o corcel indomável", "cavalo", "égua", "triste"]
    },


    {
        idUnico: "vid_18",
        idGrupo: "aventura",
        titulo: "A Fantástica Fábrica de Chocolate",
        descricao: "O jovem Charlie Bucket e seu avô Joe se juntam a um pequeno grupo de ganhadores de uma competição, os quais vão para um passeio na mágica e misteriosa fábrica do excêntrico Willy Wonka. Ajudado por seus anões trabalhadores, Wonka esconde uma surpresa para eles durante o passeio.",
        urlVideo: [

        // - Abertura do Site:
        "https://files.catbox.moe/v2ffcq.webm",

            // - part1
            "https://files.catbox.moe/lg93a5.mp4",
            // - part2
            "https://files.catbox.moe/lkt0b3.mp4",
            // - part3
            "https://files.catbox.moe/koshve.mp4",
            // - part4
            "https://files.catbox.moe/coktnu.mp4",
            
            // - Abertura do Site:
            "https://files.catbox.moe/v2ffcq.webm"
            ],
        // - Capa de A Fantástica Fábrica de Chocolate
        urlCapa: "https://files.catbox.moe/q9hsys.webp",
        tags: ["willy wonka", "chocolate", "Willy Wonka", "A Fantástica Fábrica de Chocolate"]
    },


    {
        idUnico: "vid_17",
        idGrupo: "desenho",
        titulo: "A Fuga das Galinhas",
        descricao: "No galinheiro de uma fazenda inglesa dos anos 1950, galinhas cumprem sua função e vivem pacatamente, sonhando com uma vida melhor. Uma delas, Ginger, quer a liberdade e planeja sair voando dali com suas companheiras.",
        urlVideo: [

        // - Abertura do Site:
        "https://files.catbox.moe/v2ffcq.webm",

            // - part1
            "https://files.catbox.moe/e10flu.mp4",
            // - part2
            "https://files.catbox.moe/cayxw0.mp4",
            // - part3
            "https://files.catbox.moe/jqqpy4.mp4",
            
            // - Abertura do Site:
            "https://files.catbox.moe/v2ffcq.webm"
            ],
        // - Capa de A Fuga das Galinhas
        urlCapa: "https://files.catbox.moe/b8jn7q.webp",
        tags: ["a fuga das galinhas", "fuga", "galinhas", "galinha"]
    },


    {
        idUnico: "vid_16",
        idGrupo: "aventura",
        titulo: "As Crônicas de Nárnia",
        descricao: "Explora conceitos de lealdade, sacrifício, redenção e fortes alegorias ao cristianismo. franquia ganhou três grandes produções cinematográficas pela Disney e Fox nos anos 2000, adaptando os livros O Leão, a Feiticeira e o Guarda-Roupa, Príncipe Caspian e A Viagem do Peregrino da Alvorada.",
        urlVideo: [

        // - Abertura do Site:
        "https://files.catbox.moe/v2ffcq.webm",

            // - part1
            "https://files.catbox.moe/pesstj.mp4",
            // - part2
            "https://files.catbox.moe/de68bq.mp4",
            // - part3
            "https://files.catbox.moe/bxvos7.mp4",
            // - pare4
            "https://files.catbox.moe/bikcj3.mp4",
            // - pare5
            "https://files.catbox.moe/3ocdgy.mp4",

            // - Abertura do Site:
            "https://files.catbox.moe/v2ffcq.webm"
            ],
        // - Capa de As Crônicas de Nárnia 
        urlCapa: "https://files.catbox.moe/mzsv2s.webp",
        tags: ["narnia", "livro", "livros", "leão"]
    },

    {
        idUnico: "vid_15",
        idGrupo: "aventura",
        titulo: "Donzela",
        descricao: "A historia acompanha Elodie, uma jovem que aceita se casar com um lindo principe para salvar o seu reino da pobreza. No entanto, ela descobre que o casamento e uma armadilha. A familia real a sacrificara para pagar uma divida antiga, jogando a garota em uma caverna com um dragao cuspidor de fogo. Para sobreviver, Elodie nao espera por um cavaleiro encantado e precisa usar sua inteligencia e coragem para lutar por sua propria vida.",
        urlVideo: [

        // - Abertura do Site:
        "https://files.catbox.moe/v2ffcq.webm",
            // - part1
            "https://files.catbox.moe/l1wq1f.mp4",
            // - part2
            "https://files.catbox.moe/iqx6zp.mp4",
            // - part3
            "https://files.catbox.moe/99nlkn.mp4",
            // - pare4
            "https://files.catbox.moe/5xobfl.mp4",

            // - Abertura do Site:
            "https://files.catbox.moe/v2ffcq.webm"
            ],
        // - Capa de Donzela
        urlCapa: "https://files.catbox.moe/fdxgpa.webp",
        tags: ["netflix", "donzela"]
    },


    {
        idUnico: "vid_14",
        idGrupo: "aventura",
        titulo: "O Grande Xerife",
        descricao: "CINEMA NACIONAL Uma obra-prima absoluta do cinema nacional. O genial Amácio Mazzaropi entrega uma de suas atuações mais memoráveis nesta brilhante e hilária sátira aos clássicos de faroeste americanos. Com seu humor afiado, timing cômico impecável e uma crítica social que permanece extremamente atual, O Grande Xerife consolida a genialidade de Mazzaropi como um dos maiores cineastas e comunicadores da história da América Latina. Uma produção vibrante, divertida e historicamente essencial que exalta a riqueza e o poder do cinema brasileiro.",
        urlVideo: [

        // - Abertura do Site:
        "https://files.catbox.moe/v2ffcq.webm",
        // - Abertura do cinema nacional:
        "https://files.catbox.moe/n7a5pg.webm",
            // - Parte1:
            "https://files.catbox.moe/2u1sf8.mp4",
            // - Parte2:
            "https://files.catbox.moe/1eptaq.mp4",
            // - Parte3:
            "https://files.catbox.moe/m5jf22.mp4",
            // -
            // - Abertura do Site:
            "https://files.catbox.moe/v2ffcq.webm"
            ],
        // - Capa de O Grande Xerife:
        urlCapa: "https://files.catbox.moe/q92pnr.webp",
        tags: ["Xerife", "bang bang", "velho oeste", "o grande Xerife", "filme brasileiro", "brasileiro", "nacional", "cinema nacional"]
    },

    {
        idUnico: "vid_13",
        idGrupo: "musicas_infantis",
        titulo: "Músicas Para Criança",
        descricao: "As cantigas de Roda e musiquinhas que divertem os pequenos",
        urlVideo: [

        // - Abertura do Site:
        "https://files.catbox.moe/v2ffcq.webm",
            // - Músiquinhas:
            "https://files.catbox.moe/bfqnd3.mp4",
            // - Abertura do Site:
            "https://files.catbox.moe/ebxkzg.webp"
            ],
        // - Capa de Alice no País das Maravilhas:
        urlCapa: "https://files.catbox.moe/jngiph.webp",
        tags: ["infantis", "música", "músicas", "musica", "musicas"]
    },

    {
        idUnico: "vid_12",
        idGrupo: "desenho",
        titulo: "Alice No País das Maravilhas",
        descricao: "Alice a Mais Bela de todas as Princesas em uma aventura maravilhosa",
        urlVideo: [

        // - Abertura do Site:
        "https://files.catbox.moe/v2ffcq.webm",
            // - part1
            "https://files.catbox.moe/b88zfw.webm",
            // - part2
            "https://files.catbox.moe/rn00et.webm",

            // - Abertura do Site:
            "https://files.catbox.moe/v2ffcq.webm"
            ],
        // - Capa de Alice no País das Maravilhas:
        urlCapa: "https://files.catbox.moe/ebxkzg.webp",
        tags: ["Alice no Pais das Maravilhas", "loira", "loirinha", "princesa", "princesinha"]
    },

    {
        idUnico: "vid_11",
        idGrupo: "desenho",
        titulo: "Branca de Neve",
        descricao: "A Historia que Impulsionou Disney Para o Mundo...",
        urlVideo: [

        // - Abertura do Site:
        "https://files.catbox.moe/v2ffcq.webm",
            // - 0 ao 30
            "https://files.catbox.moe/afv09t.mp4",
            // - 30 ao 60
            "https://files.catbox.moe/7vylit.mp4",
            // - 60 ao 120
            "https://files.catbox.moe/wz5oeo.mp4",

            // - Abertura do Site:
            "https://files.catbox.moe/v2ffcq.webm"
            ],
        // - Capa de A Era do Gelo:
        urlCapa: "https://files.catbox.moe/46x159.webp",
        tags: ["branca de neve", "princesa", "bruxa", "caçador", "maça"]
    },


    {
        idUnico: "vid_10",
        idGrupo: "desenho",
        titulo: "A Era do Gelo",
        descricao: "Uma Aventura Gelada e Divertida dos personagens do Gelo extremo!",
        urlVideo: [

        // - Abertura do Site:
        "https://files.catbox.moe/v2ffcq.webm",
            // - 0 ao 30
            "https://files.catbox.moe/hcmgwx.mp4",
            // - 30 ao 60
            "https://files.catbox.moe/0wjy4z.mp4",
            // - 60 ao 120
            "https://files.catbox.moe/e5liep.mp4",

            // - Abertura do Site:
            "https://files.catbox.moe/v2ffcq.webm"
            ],
        // - Capa de A Era do Gelo:
        urlCapa: "https://files.catbox.moe/tz85tp.webp",
        tags: ["a era do gelo", "gelo", "frio", "gelado", "geleira"]
    },


    {
        idUnico: "vid_09",
        idGrupo: "desenho",
        titulo: "Madagascar 2",
        descricao: "Esses Leoes vão aprontar de montão",
        urlVideo: [
        "https://files.catbox.moe/v2ffcq.webm",
            // - 0 AO 30
            "https://files.catbox.moe/ypps8e.mp4",
            // - 30 AO 60
            "https://files.catbox.moe/30fumr.mp4",
            // - 60 AO 80
            "https://files.catbox.moe/jneb0g.mp4",

            "https://files.catbox.moe/v2ffcq.webm"
            ],
            urlCapa: "https://files.catbox.moe/6ezgd3.webp",
            tags: ["Madagascar", "leão ", "selva", "leoes", "desenho"]
        },

        {
            idUnico: "vid_08",
            idGrupo: "serie",
            titulo: "Chaves",
            descricao: "O Maior Seriado História da TV Mundial está disponivel Aqui...",
            urlVideo: [
            // - ABertura do Site Abertura do Chaves
            "https://files.catbox.moe/v2ffcq.webm",
            "https://files.catbox.moe/kuqwqi.webm",
            
            // - Y1 - A Historia Do Brasil-1
            "https://files.catbox.moe/w2wdyb.webm",
            // - Y2 - A Proposta-1
            "https://files.catbox.moe/gjgg2i.webm",
            // - Z1 - O Castigo Da Escola-1 (escolinha)
            "https://files.catbox.moe/j2teyx.mp4",
            // - Z2 - O Escorpiao 2-1 (escolinha)
            "https://files.catbox.moe/dzll0p.webm",
            // - A Casemira
            "https://files.catbox.moe/vdun38.webm",
            // - Como Pegar Um Touro a Unha
            "https://files.catbox.moe/soc3lf.mp4",
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
            tags: ["diretora", "anos noventa", "escola", "menina", "aventura", "matilda"]
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
