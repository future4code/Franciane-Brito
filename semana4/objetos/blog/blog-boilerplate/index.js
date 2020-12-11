let campoTitulo = document.getElementById("titulo-post")
let campoAutor = document.getElementById("autor-post")
let campoConteudo = document.getElementById("conteudo-post")

let campoImagem = document.getElementById("imagem-post")


let posts = document.getElementById("container-de-posts")


const informacoesPost = {
    titulo: campoTitulo,
    autor: campoAutor,
    conteudo: campoConteudo,
    imagem: campoImagem
}

function teste() {

    posts.innerHTML += `<section><h3>${campoTitulo.value}</h3><h4>${campoAutor.value}</h4><p>${informacoesPost.conteudo.value}</p></section>`
    informacoesPost.titulo.value = ''
    informacoesPost.autor.value = ''
    informacoesPost.conteudo.value = ''
        /* if (informaocoesPost.imagem.value.includes(http)) {

            posts.innerHTML += `<img src=${campoImagem.value}/>`
        } */
    informacoesPost.imagem.value = ''
    console.log(informacoesPost)
}



function inserirImagem() {
    console.log(campoImagem)
        /* if (campoImagem.includes(https)) {
            console.log("estouDentro")
        } */
}