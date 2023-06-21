const play = document.querySelector("#play")
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
}

function tocandoProximo(){
    musicas[indiceAtual].pause()
    indiceAtual ++
    musicas[indiceAtual].play()
}

function tocandoAnterior(){
    musicas[indiceAtual].pause()
    indiceAtual --
    musicas[indiceAtual].play()
}

