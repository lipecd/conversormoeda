let real = parseFloat(prompt('Insira um valor em real'))

function ConverterDolar() {
    let dolar = real * 0.2
    return dolar
}

function ConverterPesosAr() {
    let pesosAr = real * 166.37
    return pesosAr
}

function ExibirResultado() {
    alert(`${real} real equivale a ${ConverterDolar()} dolares e a ${ConverterPesosAr()} pesos argentinos.`)
}

ExibirResultado()


