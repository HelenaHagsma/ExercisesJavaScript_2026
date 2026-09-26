var metros, op, cm, mm, km

metros = parseFloat(prompt("Informe o valor em metros : "))

op = parseInt(prompt("1 - Converter para centímetros\n2 - Converter para milímetros\n3 - Converter para quilômetros\nEscolha: "))

switch(op){
    case 1:
        cm = metros * 100
        alert(metros+" metros são "+cm+" cm.")
        break;
    case 2:
        mm = metros * 1000
        alert(metros+" metros são "+mm+" mm.")
        break;
    case 3:
        km = metros / 1000
        alert(metros+" metros são "+km+" km.")
        break;
    default:
        alert("Inválido.")
        break;
}