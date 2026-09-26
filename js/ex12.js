var n1, n2, n3

n1 = parseInt(prompt("Informe o primeiro número: "))
n2 = parseInt(prompt("Informe o segundo número: "))
n3 = parseInt(prompt("Informe o terceiro número: "))

if(n1 > n2 && n1 > n3){
    alert(n1 + " é o maior.")
}
else if(n2 > n1 && n2 > n3){
    alert(n2 + " é o maior.")
}
else{
    alert(n3 + " é o maior.")
}