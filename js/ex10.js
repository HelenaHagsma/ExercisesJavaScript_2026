var n1, n2, med

n1 = parseInt(prompt("Informe a primeira nota: "))
n2 = parseInt(prompt("Informe a segunda nota: "))

med = (n1 + n2)/ 2

if(med >= 7){
    alert("Média: "+med+". Aprovado!")
}else if(med >=4 && med < 7){
    alert("Média: "+med+". Fazer recuperação!")
}else{
    alert("Média: "+med+". Reprovado!")
}