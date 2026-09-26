var n1, n2, med

n1 = parseFloat(prompt("Informe a primeira nota: "))
n2 = parseFloat(prompt("Informe a segunda nota: "))

med = (n1 + n2)/ 2

if(med >= 7){
    alert("Média: "+med.toFixed(2)+". Aprovado!")
}else if(med >=4 && med < 7){
    alert("Média: "+med.toFixed(2)+". Fazer recuperação!")
}else{
    alert("Média: "+med.toFixed(2)+". Reprovado!")
}
