var op, qnt, total

op = parseInt(prompt("1 - Hambúrguer - R$ 15,00\n2 - Cachorro-quente - R$ 12,00\n3 - Pizza - R$ 20,00\n4 - Refrigerante - R$ 6,00\nEscolha: "))

qnt = parseInt(prompt("Informe a quantidade: "))

switch(op){
    case 1:
        total = 15 * qnt
        alert("O valor total é: R$"+total)
        break;
    case 2:
        total = 12 * qnt
        alert("O valor total é: R$"+total)
        break;
    case 3:
        total = 20 * qnt
        alert("O valor total é: R$"+total)
        break;
    case 4:
        total = 6 * qnt
        alert("O valor total é: R$"+total)
        break;
    default:
        alert("Produto inválido.")
        break;
}