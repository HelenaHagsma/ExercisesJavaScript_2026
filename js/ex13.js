var n1, n2, op, soma, sub, mult, div

n1 = parseFloat(prompt("Informe o primeiro número: "))
n2 = parseFloat(prompt("Informe o segundo número: "))

op = parseInt(prompt("1 - Soma\n2 - Subtração\n3 - Multiplicação\n4 - Divisão\nEscolha: "))

switch(op){
    case 1:
        soma = n1 + n2
        alert("O resultado é: "+soma)
        break;
    case 2:
        sub = n1 - n2
        alert("O resultado é: "+sub)
        break;
    case 3:
        mult = n1 * n2
        alert("O resultado é: "+mult)
        break;
    case 4:
        div = n1 / n2
        alert("O resultado é: "+div)
        break;
    default:
        alert("Inválido.")
        break;
}