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
const musica6 = document.querySelector("#musica6")
const musica7 = document.querySelector("#musica7")
const musica8 = document.querySelector("#musica8")
const musica9 = document.querySelector("#musica9")
const musica10 = document.querySelector("#musica10")
const controle_musica = document.querySelector("#controle_musica")


const musicas = []
musicas.push(musica1);
musicas.push(musica2);
musicas.push(musica3);
musicas.push(musica4);
musicas.push(musica5);
musicas.push(musica6);
musicas.push(musica7);
musicas.push(musica8);
musicas.push(musica9);
musicas.push(musica10);


let indiceAtual = 0
controle_musica.src = musicas[indiceAtual].src;

function tocandoEmOrdem(){
   // musicas[indiceAtual].play();
    document.querySelector("#pause").style.display = "inline";
    document.querySelector("#play").style.display = "none";
    if(controle_musica.src == musicas[indiceAtual].src) controle_musica.play();
    else {
        controle_musica.src = musicas[indiceAtual].src;
        controle_musica.title = musicas[indiceAtual].title;

        //return 0;
    }
    controle_musica.play();
}

function pausar(){
    musicas[indiceAtual].pause();
    controle_musica.pause()
    document.querySelector("#pause").style.display = "none";
    document.querySelector("#play").style.display = "inline";
}

function tocandoProximo(){
    controle_musica.pause()
    indiceAtual ++
    if(indiceAtual>=musicas.length){
        indiceAtual = 0
    }
    tocandoEmOrdem()
}

function tocandoAnterior(){
    controle_musica.pause()
    indiceAtual --
    if(indiceAtual < 0){
        indiceAtual = musicas.length-1
    }
    tocandoEmOrdem()
}

function ordemAleatoria(){
    musicas[indiceAtual].pause()
    indiceAtual =  Math.floor(Math.random() * musicas.length);
    musicas[indiceAtual].play()

}

function acabou(){
    if(controle_musica.paused) pausar()
    else tocandoEmOrdem()
    if(controle_musica.ended) tocandoProximo()
    console.log(controle_musica.title)
}

setInterval(acabou, 100)