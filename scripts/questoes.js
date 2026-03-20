function questao7() {
    const km = Number(prompt("Digite a distância em quilômetros:"))
    const resultado1 = (km * 1000)
    alert(resultado1 + " metros")
    const resultado2 = (km * 100000)
    alert(resultado2 + " centimetros")
}
const buttonquestao7 = document.getElementById("questao7")
buttonquestao7.addEventListener('click', () => { questao7() })

function questao15() {
    const numero = Number(prompt("Digite um número:"))
    const outroNumero = Number(prompt("Digite outro número:"))

    if (numero == outroNumero) {
        alert("Esses números são iguais.")
    } else if (numero > outroNumero) {
        alert(numero + " é maior que " + outroNumero + ".")
    } else if (numero < outroNumero) {
        alert(numero + " é menor que " + outroNumero + ".")
    }
}
const buttonquestao15 = document.getElementById("questao15")
buttonquestao15.addEventListener('click', () => { questao15() })

function questao18() {
    const custo = Number(prompt("Digite o custo do carro:"))
    const valorlucro = (custo * 28) / 100
    const valorimposto = (custo * 45) / 100
    const valorfinal = custo + valorimposto + valorlucro
    alert("O valor final deste carro é: " + valorfinal)
}
const buttonquestao18 = document.getElementById("questao18")
buttonquestao18.addEventListener('click', () => { questao18() })

function questao21() {
    const pergunta1 = Number(prompt("Trocou mensagens com a vítima? Digite 1 para SIM e 2 para NÃO."))
    const pergunta2 = Number(prompt("Esteve no local do crime? Digite 1 para SIM e 2 para NÃO."))
    const pergunta3 = Number(prompt("Mora perto da vítima? Digite 1 para SIM e 2 para NÃO."))
    const pergunta4 = Number(prompt("Devia dinheiro para a vítima? Digite 1 para SIM e 2 para NÃO."))
    const pergunta5 = Number(prompt("Trabalha ou já trabalhou com a vítima? Digite 1 para SIM e 2 para NÃO."))
    const pergunta6 = Number(prompt("Tinha relacionamento amoroso com a vítima? Digite 1 para SIM e 2 para NÃO."))
    const pergunta7 = Number(prompt("Ficou feliz com o que aconteceu? Digite 1 para SIM e 2 para NÃO."))
    const pergunta8 = Number(prompt("Possui arma de fogo? Digite 1 para SIM e 2 para NÃO."))

    const respostas = (pergunta1 + pergunta2 + pergunta3 + pergunta4 + pergunta5 + pergunta6 + pergunta7 + pergunta8)

    if (respostas == 12) {
        alert("Suspeito!")
    } else if (respostas >= 9 && respostas <= 11) {
        alert("Possível criminoso!")
        console.log(respostas)
    } else if (respostas == 8) {
        alert("Assasino!")
    } else {
        alert("Inocente!")
    }
}
const buttonquestao21 = document.getElementById("questao21")
buttonquestao21.addEventListener('click', () => { questao21() })

