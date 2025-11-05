// EXERCÍCIO 1 Implemente uma fun¸c˜ao que receba uma lista de cores e, usando map, altere a cor de fundo de cada elemento <li> de acordo com o seu ´ındice.

const cor = (cores) =>{
    let lis = document.querySelectorAll("li")
    cores.map((c, i) => {
        if(lis[i]){
             lis[i].style.backgroundColor = c
        }
       
    })
}

const listaCores = ['blue', 'pink', 'red', 'green', 'black']
cor(listaCores)

// EXERCÍCIO 2 Implemente uma fun¸c˜ao unfold que gere uma sequˆencia de n´umeros a partir de uma semente inicial, onde cada elemento ´e o dobro do anterior, at´e que o valor ultrapasse 1024. Em seguida, use map para criar uma lista n˜ao orde nada (<ul>) no DOM, em que cada elemento <li> exibe um dos valores gerados pela sequˆencia.

function unfold(seed, f){
    if(f(seed) === null)
        return []

    let [b,a , ...ignorar] = f(seed)
    return [a].concat(unfold(b, f))
}

let g = (x) => (x >1024) ? null : [x === 0 ? 1 : x*2, x]
let listaUnfold = unfold(0,g)
console.log(listaUnfold)

let ul = document.createElement("ul")
listaUnfold.map(x => {
    let li = document.createElement("li")
    li.textContent = x
    ul.appendChild(li)
})
document.body.appendChild(ul)

// EXERCÍCIO 3 Usando a fun¸c˜ao filter, selecione apenas os n´umeros pares de uma lista de inteiros gerados de 1 a 50 usando unfold. Em seguida, exiba esses valores (usando forEach) em uma lista (<ul>) no DOM, onde cada elemento <li> apresenta o n´umero correspondente.

let s = (x) => (x >50) ? null : [x+1, x]
let listaUnfold2 = unfold(1,s)
console.log(listaUnfold2)

let ul2 = document.createElement("ul")

listaUnfold2.filter(x => x % 2 === 0).forEach(e => {
    let li = document.createElement("li")
    li.textContent = e
    ul2.appendChild(li)
    
});
document.body.appendChild(ul2)

// EXERCÍCIO 4 Implemente uma fun¸c˜ao que use o reduce para concatenar todos os conte´udos texto de todas as divs de uma p´agina.

const concatenaDivs = () => {
    let divs = Array.from(document.querySelectorAll("div")) 

    let acumulado = divs.reduce((ac, div) => {
       return ac + div.textContent.trim()
    }, "");

    return acumulado
}
console.log(concatenaDivs())


// EXERCICIO 5 Implemente uma fun¸c˜ao que, a partir de uma lista de objetos representando alunos e suas notas, utilize filter para selecionar apenas os alunos com nota maior ou igual a 7, e ent˜ao aplique map para exibir seus nomes em elementos li dentro de uma lista n˜ao ordenada no DOM.

const alunos = (aluno) => {
    let ul = document.createElement("ul")

    aluno.filter(x => x.nota >=7).map(x =>{
        let li = document.createElement("li") 
        li.textContent = x.nome
        ul.appendChild(li)
    })
document.body.appendChild(ul)
}

const aluno = [
    {nome: "lu", nota: 7},
    {nome: "luci", nota: 10},
    {nome: "Bia", nota: 9},
    {nome: "lucas", nota: 21},
    {nome: "Brian", nota: 1}
];

alunos(aluno)



// EXERCICIO 6 Implemente uma fun¸c˜ao que, a partir de uma lista de objetos representando produtos (com campos nome, pre¸co e quantidade), utilize filter para selecionar apenas os produtos com quantidade maior que 5, e ent˜ao aplique reduce para calcular o valor total do estoque (multiplique o pre¸co pela quantidade de todos os produtos e depois some tudo). Em seguida, insira no DOM um elemento p que exiba o este valor.

const produtosFuncao = (produtos) => {
    produtos.filter(x => x.qtd > 5)
    
    let result = produtos.reduce((ac, item) => {
        let mult = item.preco * item.qtd;
        return ac + mult
    }, 0)

    let p = document.createElement("p")
    p.textContent = `O valor total é: ${result}` 
    document.body.appendChild(p)


}

const produtos = [
    {nome: "café", preco: 99, qtd: 1},
    {nome: "arroz", preco: 20, qtd:7},
    {nome: "açucar", preco: 5.99, qtd:6}
    
];

produtosFuncao(produtos)