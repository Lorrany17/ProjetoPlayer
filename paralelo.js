const nomeMusica = document.getElementById("nomeMusica");
const nomeDoArtista = document.getElementById("nomeArtista");
const musicas = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const proxima = document.getElementById("proxima");
const voltar = document.getElementById("voltar");
const barraAtual = document.getElementById("barraAtual")
const progressContainer = document.getElementById("progress-container")
const botaoAleatorio = document.getElementById("aleatorio")

const conexoes = {
    nomeMusica: "Conexões de Máfia",
    file: "midia/Matuê - Conexões de Máfia.mp3",
    artist: "Matuê",
  };
  const balanco = {
    nomeMusica: "Novo Balanço",
    file: "midia/Novo  Balanço - Veigh.mp3",
    artist: "Veigh",
  };
  const marrenta = {
    nomeMusica: "Marrenta",
    file: "midia/WC MC - Marrenta.mp3",
    artist: "WC Mc",
  };
let estaTocando = false;
let estaAleatorio = false;
const originalPlaylist = [conexoes, balanco, marrenta];
let sortedPlaylist = [...originalPlaylist];
let index = 0;

function iniciarMusica(){
    //cover.src = `img2/${sortedPlaylist[index].file}.jpg`;
    nomeMusica.innerText = sortedPlaylist[index].nomeMusica;
    nomeDoArtista.innerText = sortedPlaylist[index].artist;
    musicas.src = `midia/${sortedPlaylist[index].file}.mp3`
}

iniciarMusica();

function playMusica(){
    play.querySelector(".bi").classList.remove("bi-play-circle-fill");
    play.querySelector(".bi").classList.add("bi-pause-circle-fill");
    musicas.play();
    estaTocando = true
}

function pauseMusica(){
    play.querySelector(".bi").classList.add("bi-play-circle-fill");
    play.querySelector(".bi").classList.remove("bi-pause-circle-fill");
    musicas.pause();
    estaTocando = false;
}


function playPauseDecidir(){
    if (estaTocando === true){
      pauseMusica();
    } else {
      playMusica();
    }
  }

  function voltarMusica(){
    if(index === 0){
        index = sortedPlaylist.length - 1;
}
else {
    index -=1;
}
  }
iniciarMusica();
playMusica();

function proximaMusica(){
    if(index === sortedPlaylist.length - 1){
        index = 0;
}
else {
    index +=1;
}
  }
 
  function updateProgressBar(){
    musicas.currentTime
    musicas.duration
    const barWidth = (musicas.currentTime/musicas.duration) * 100;
    barraAtual.style.setProperty('--progress','${barWidth}%');
  }

  function jumpTo(event){
    const width = Progresscontainer.clientWidth;
    const clickPosition = event.offsetX;
    const jumpToTime = (clickPosition/width) * musicas.duration;
    musicas.currentTime = jumpToTime;
  }
  iniciarMusica();
  playMusica();
  play.addEventListener("click", playPauseDecidir);
  voltar.addEventListener("click", proximaMusica);
  proxima.addEventListener("click", voltarMusica);
  musicas.addEventListener("click", updateProgressBar);
  progressContainer.addEventListener("click", jumpTo);
  botaoAleatorio.addEventListener("click", playPauseDecidirbotaoAleatorioClicked);

  