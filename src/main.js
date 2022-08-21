const imagem = document.getElementById("image")


let posicao = 0;


const imagens = ["imagesite01.jpg", "imagesite02.jpg", "imagesite04.jpg"];


function mudarFoto() {

    if (++posicao >= imagens.length) {

        posicao = 0;
    }

    imagem.src = imagens[posicao];
};


setInterval(mudarFoto, 3000);