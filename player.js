const play = document.querySelector("#play")
const pause = document.querySelector("#pause")
const aleatorio = document.querySelector("#aleatorio")
const proximo = document.querySelector("#proximo")
const voltar = document.querySelector("#voltar")
const musica1 = document.querySelector("#musica1")
const musica2 = document.querySelector("#musica2")
const musica3 = document.querySelector("#musica3")
const musica4 = document.querySelector("#musica4")
const musica5 = document.querySelector("#musica5")

const musicas = []
musicas.push(musica1);
musicas.push(musica2);
musicas.push(musica3);
musicas.push(musica4);
musicas.push(musica5);
let indiceAtual = 0

function tocandoEmOrdem(){
    musicas[indiceAtual].play();
    document.querySelector("#pause").style.display = "inline";
    document.querySelector("#play").style.display = "none";
}

function pausar(){
    musicas[indiceAtual].pause();
    document.querySelector("#pause").style.display = "none";
    document.querySelector("#play").style.display = "inline";
}

function tocandoProximo(){
    musicas[indiceAtual].pause()
    indiceAtual ++
    if(indiceAtual>=musicas.length){
        indiceAtual = 0
    }
    musicas[indiceAtual].play()
}

function tocandoAnterior(){
    musicas[indiceAtual].pause()
    indiceAtual --
    musicas[indiceAtual].play()
}

function ordemAleatoria(){
    musicas[indiceAtual].pause()
    indiceAtual =  Math.floor(Math.random() * musicas.length);
    musicas[indiceAtual].play()

}

function acabou(){
    
    if(musicas[indiceAtual].ended)
    tocandoProximo()
}

setInterval(acabou, 1000)