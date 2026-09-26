var valor

valor = parseFloat(prompt("Informe o valor da compra: R$"))

if(valor >= 200){
    valor = valor * 0.9
}

alert("O valor final da compra é: R$"+valor)