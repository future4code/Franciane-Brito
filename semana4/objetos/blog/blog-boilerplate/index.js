let posts = document.getElementById("container-de-posts")

const informacoesPost = {
    titulo: document.getElementById("titulo-post"),
    autor: document.getElementById("autor-post"),
    conteudo: document.getElementById("conteudo-post"),
    imagem: document.getElementById("imagem-post")
}


function teste() {

    posts.innerHTML += `<section><h3>${informacoesPost.titulo.value}</h3><h4>${informacoesPost.autor.value}</h4><p>${informacoesPost.conteudo.value}</p></section>`
    if (informacoesPost.imagem.value.includes(http)) {
        posts.innerHTML += `<img src=${campoImagem.value}/>`
    }
    informacoesPost.titulo.value = ''
    informacoesPost.autor.value = ''
    informacoesPost.conteudo.value = ''
    informacoesPost.imagem.value = ''
}


/* function inserirImagem() {
    console.log(campoImagem)
        /* if (campoImagem.includes(https)) {
            console.log("estouDentro")
        } 
} */