var peso, alt, imc

peso = parseFloat(prompt("Informe seu peso em Kg: "))
alt = parseFloat(prompt("Informe sua altura em metros: "))

imc = peso / (alt * alt)

if(imc < 18.5){
    alert("Seu IMC é: "+imc.toFixed(2)+". Abaixo do peso.")
}else if(imc >= 18.5 && imc <= 24.9){
    alert("Seu IMC é: "+imc.toFixed(2)+". Peso adequado.")
}else if(imc > 25 && imc <= 29.9){
    alert("Seu IMC é: "+imc.toFixed(2)+". Sobrepeso.")
}else{
    alert("Seu IMC é: "+imc.toFixed(2)+". Obesidade.")
}