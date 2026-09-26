var valor, op, pix, din, parc

valor = parseFloat(prompt("Informe o valor da compra: "))

op = parseInt(prompt("1 - Pix\n2 - Dinheiro\n3 - Cartão à vista\n4 - Cartão parcelado\nInforme a opção desejada:"))

switch(op){
    case 1:
        pix = valor * 0.90
        alert("O valor total é: R$"+pix)
        break;
    case 2:
        din = valor * 0.95
        alert("O valor total é: R$"+din)
        break;
    case 3:
        alert("O valor total é: R$"+valor)
        break;
    case 4:
        parc = valor * 1.1
        alert("O valor total é: R$"+parc.toFixed(0))
        break;
    default:
        alert("Forma de pagamento inválida.")
        break;
}