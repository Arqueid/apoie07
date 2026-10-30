// Referência do elemento visor superior principal
const displayGlobal = document.getElementById('display-global');

// FUNÇÃO: Busca as músicas no banco de dados local em JS
function buscarMusicas() {
    const termo = document.getElementById('campo-busca').value.toLowerCase();
    const listaDiv = document.getElementById('lista-resultados');
    listaDiv.innerHTML = ''; 

    if (termo === '') return; 

    // Filtra pelo título, artista ou tags
    const resultados = listaDeMusicas.filter(musica => {
        const nasTags = musica.tags.some(tag => tag.toLowerCase().includes(termo));
        const noTitulo = musica.titulo.toLowerCase().includes(termo);
        const noArtista = musica.artista.toLowerCase().includes(termo);
        return nasTags || noTitulo || noArtista;
    });

    // Renderiza cada item localizado criando elemento HTML e aplicando o evento dragstart
    resultados.forEach(musica => {
        const div = document.createElement('div');
        div.className = 'item-musica';
        div.draggable = true; 
        div.innerText = `${musica.artista} - ${musica.titulo}`;
        
        div.ondragstart = (event) => {
            const dados = { link: musica.link, titulo: musica.titulo, artista: musica.artista };
            event.dataTransfer.setData('application/json', JSON.stringify(dados));
        };
        listaDiv.appendChild(div);
    });
}

// FUNÇÃO: Permite a ação de soltar elementos na área especificada (Drag Over)
function permitirSoltar(event) {
    event.preventDefault(); 
}

// FUNÇÃO: Processa o áudio solto (via busca ou arquivo local do PC) nos Decks A ou B
function soltarMusica(event, deckId) {
    event.preventDefault();
    const audio = document.getElementById(`audio-${deckId}`);
    
    // Tratamento caso o usuário arraste um arquivo MP3 direto do seu computador
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
        const arquivoFisico = event.dataTransfer.files[0];
        const urlArquivo = URL.createObjectURL(arquivoFisico); 
        carregarNoAudio(audio, urlArquivo, arquivoFisico.name, deckId);
    } 
    // Tratamento caso o usuário arraste um item da lista interna de buscas
    else {
        const dadosTexto = event.dataTransfer.getData('application/json');
        if (dadosTexto) {
            const dados = JSON.parse(dadosTexto);
            const nomeCompleto = `${dados.artista} - ${dados.titulo}`;
            carregarNoAudio(audio, dados.link, nomeCompleto, deckId);
        }
    }
}

// FUNÇÃO: Associa o arquivo aos slots de Vinhetas (comporta arquivos do PC ou do banco interno)
function soltarVinheta(event, numeroVinheta) {
    event.preventDefault();
    const textoSlot = document.getElementById(`texto-v${numeroVinheta}`);
    const audio = document.getElementById(`audio-v${numeroVinheta}`);

    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
        const arquivoFisico = event.dataTransfer.files[0];
        const urlArquivo = URL.createObjectURL(arquivoFisico);
        audio.src = urlArquivo;
        textoSlot.innerText = arquivoFisico.name.substring(0, 10); 
    } else {
        const dadosTexto = event.dataTransfer.getData('application/json');
        if (dadosTexto) {
            const dados = JSON.parse(dadosTexto);
            audio.src = dados.link;
            textoSlot.innerText = dados.titulo.substring(0, 12); 
        }
    }

    // Configura eventos para adicionar/remover o efeito visual luminoso no slot da vinheta quando estiver tocando
    audio.onplay = () => {
        document.getElementById(`v${numeroVinheta}`).classList.add('tocando');
    };
    audio.onended = () => {
        document.getElementById(`v${numeroVinheta}`).classList.remove('tocando');
    };
    audio.onpause = () => {
        document.getElementById(`v${numeroVinheta}`).classList.remove('tocando');
    };
}

// FUNÇÃO: Carrega a fonte no elemento de áudio do Deck correspondente
function carregarNoAudio(elementoAudio, url, nome, deckId) {
    elementoAudio.src = url;
    displayGlobal.innerText = `[DECK ${deckId.toUpperCase()}] ${nome}`;
    
    // Mostra o tempo total quando os metadados do áudio carregarem
    elementoAudio.onloadedmetadata = () => {
        document.getElementById(`tempo-${deckId}`).innerText = formatarTempo(elementoAudio.duration);
    };

    // Atualiza o tempo decrescente em tempo real enquanto a música toca
    elementoAudio.ontimeupdate = () => {
        const restante = elementoAudio.duration - elementoAudio.currentTime;
        document.getElementById(`tempo-${deckId}`).innerText = formatarTempo(restante);
    };

    elementoAudio.onended = () => parar(deckId);

    // Garante que o Crossfader recalcule o volume do novo áudio que foi carregado
    const valorCrossfader = document.getElementById('crossfader').value;
    atualizarCrossfader(valorCrossfader);
}

// FUNÇÃO: Inicia a reprodução do Deck e ativa o giro visual do disco
function tocar(deckId) {
    const audio = document.getElementById(`audio-${deckId}`);
    if (audio.src) {
        audio.play();
        document.getElementById(`disco-${deckId}`).classList.add('rodando');
    }
}

// FUNÇÃO: Pausa a reprodução no ponto atual e para o giro do disco
function pausar(deckId) {
    const audio = document.getElementById(`audio-${deckId}`);
    audio.pause();
    document.getElementById(`disco-${deckId}`).classList.remove('rodando');
}

// FUNÇÃO: Interrompe a reprodução, move para o tempo zero e desativa a animação do vinil
function parar(deckId) {
    const audio = document.getElementById(`audio-${deckId}`);
    audio.pause();
    audio.currentTime = 0; 
    document.getElementById(`disco-${deckId}`).classList.remove('rodando');
    
    // Restaura o cronômetro do visor para a duração total original do áudio
    if (!isNaN(audio.duration)) {
        document.getElementById(`tempo-${deckId}`).innerText = formatarTempo(audio.duration);
    }
}

// FUNÇÃO MELHORADA: Disparo no estilo Sampler (clicar na vinheta zera e toca do início imediatamente)
function tocarVinheta(numeroVinheta) {
    const audio = document.getElementById(`audio-v${numeroVinheta}`);
    if (audio.src) {
        audio.currentTime = 0; // Sempre reinicia a partir do tempo 0s ao clicar
        audio.play();
    }
}

// FUNÇÃO: Altera o volume do fader vertical individual do deck respeitando o valor do Crossfader
function mudarVolume(deckId, valor) {
    const valorCrossfader = document.getElementById('crossfader').value;
    atualizarCrossfader(valorCrossfader);
}

// NOVAS FUNÇÕES: Cálculo de mistura de áudio do Crossfader entre o Deck A e o Deck B
function atualizarCrossfader(valor) {
    const fader = parseFloat(valor); // Valor de 0.0 (Deck A total) até 1.0 (Deck B total)
    const audioA = document.getElementById('audio-a');
    const audioB = document.getElementById('audio-b');

    const volA = parseFloat(document.getElementById('vol-a').value);
    const volB = parseFloat(document.getElementById('vol-b').value);

    // Calcula a proporção baseada na posição do fader central
    const ganhoA = Math.cos(fader * (Math.PI / 2));
    const ganhoB = Math.sin(fader * (Math.PI / 2));

    // Aplica o volume multiplicando a escala vertical pelo multiplicador do crossfader
    if (audioA) audioA.volume = volA * ganhoA;
    if (audioB) audioB.volume = volB * ganhoB;
}

// FUNÇÃO AUXILIAR: Formata segundos no formato digital MM:SS
function formatarTempo(segundos) {
    if (isNaN(segundos)) return "00:00";
    const min = Math.floor(segundos / 60);
    const seg = Math.floor(segundos % 60);
    return `${min.toString().padStart(2, '0')}:${seg.toString().padStart(2, '0')}`;
}