var idade, op

idade = parseInt(prompt("Informe a sua idade: "))

op = parseInt(prompt("1 - Filme livre\n2 - Filme com classificação de 12 anos\n3 - Filme com classificação de 16 anos\n4 - Filme com classificação de 18 anos\nEscolha: "))

switch(op){
    case 1:
        alert("Você pode assistir ao filme.")
        break;
    case 2:
        if(idade >= 12){
            alert("Você pode assistir ao filme.")
        }else{
            alert("Você não tem idade suficiente para assistir ao filme.")
        }
        break;
    case 3:
        if(idade >= 16){
            alert("Você pode assistir ao filme.")
        }else{
            alert("Você não tem idade suficiente para assistir ao filme.")
        }
        break;
    case 4:
        if(idade >= 18){
            alert("Você pode assistir ao filme.")
        }else{
            alert("Você não tem idade suficiente para assistir ao filme.")
        }
        break;
    default:
        alert("Opcão inválida.")
        break;
}