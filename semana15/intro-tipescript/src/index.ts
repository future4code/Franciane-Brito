// 1 A)
const minhaString: string = "Hello World"
// Se colocar um valor numerico aprece um erro na aba PROBLEMS
// B)
const meuNumero: number | string = 10

// C)
const pessoaUm1 = {
    nome: "Fernando",
    idade: 21,
    corFavorita: "Verde"
}

// D)
enum CORES_DO_ARCO_IRIS {
    VIOLETA = "VIOLETA",
    ANIL = "ANIL",
    AZUL = "AZUL",
    VERDE = "VERDE",
    AMARELO = "AMARELO",
    LARANJA = "LARANJA",
    VERMELHO = "VERMELHO",
}

type pessoa = {
    nome: string
    idade: number,
    corFavorita: CORES_DO_ARCO_IRIS
}

const pessoaUm: pessoa = {
    nome: "Fernando",
    idade: 21,
    corFavorita: CORES_DO_ARCO_IRIS.AMARELO
}

const pessoaDois: pessoa = {
    nome: "Carla",
    idade: 25,
    corFavorita: CORES_DO_ARCO_IRIS.AZUL
}

const pessoaTres: pessoa = {
    nome: "Escar",
    idade: 31,
    corFavorita: CORES_DO_ARCO_IRIS.ANIL
}

console.log(pessoaUm)

// 2)
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    type estatistica = {
        maior: number,
        menor: number,
        media: number
    }
    const estatisticas: estatistica = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

// 3)
type post = {
    autor: string,
    texto: string
}

const posts: post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
]

// B)
function buscarPostsPorAutor(posts: post[], autorInformado: string) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }