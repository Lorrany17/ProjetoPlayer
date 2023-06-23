const nomeMusica = document.getElementById("nomeMusica");
const nomeDoArtista = document.getElementById("nomeArtista");
const musicas = document.getElementById("audio");
const cover = document.getElementById("cover");
const play = document.getElementById("play");
const proxima = document.getElementById("proxima");
const voltar = document.getElementById("voltar");

nomeMusica.innerText = 'Your Guilty Pleasure ';


function playMusica(){
   
    
    musicas.play();
    
}
play.addEventListener('click', playMusica);



  