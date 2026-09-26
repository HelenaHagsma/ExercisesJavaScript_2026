var op, l, total, desc = 0, valor_desc = 0

op = parseInt(prompt("1 - Gasolina - R$ 6,20 por litro\n2 - Etanol - R$ 4,30 por litro\n3 - Diesel - R$ 6,00 por litro\nEscolha o tipo de combustível: "))

l = parseFloat(prompt("Informe a quantidade de litros desejada: "))

switch(op){
    case 1:
        total = l * 6.20
        if(total > 200){
            desc = total * 0.95
            valor_desc = total - desc
            alert("\n- Tipo de combustível escolhido: Gasolina\n- Quantidade de litros: "+l+"\n- Valor antes do desconto: R$"+total+"\n- Valor do desconto: R$"+valor_desc+"\n- Valor final da compra: R$"+desc)
        }else{
            total = l * 6.20
            alert("\n- Tipo de combustível escolhido: Gasolina\n- Quantidade de litros: "+l+"\n- Valor antes do desconto: R$"+total+"\n- Valor do desconto: R$"+valor_desc+"\n- Valor final da compra: R$"+total)
        }
        break;
    case 2:
        total = l * 4.30
        if(total > 200){
            desc = total * 0.95
            valor_desc = total - desc
            alert("\n- Tipo de combustível escolhido: Etanol\n- Quantidade de litros: "+l+"\n- Valor antes do desconto: R$"+total+"\n- Valor do desconto: R$"+valor_desc+"\n- Valor final da compra: R$"+desc)
        }else{
            total = l * 4.30
            alert("\n- Tipo de combustível escolhido: Etanol\n- Quantidade de litros: "+l+"\n- Valor antes do desconto: R$"+total+"\n- Valor do desconto: R$"+valor_desc+"\n- Valor final da compra: R$"+total)
        }
        break;
    case 3:
        total = l * 6.0
        if(total > 200){
            desc = total * 0.95
            valor_desc = total - desc
            alert("\n- Tipo de combustível escolhido: Diesel\n- Quantidade de litros: "+l+"\n- Valor antes do desconto: R$"+total+"\n- Valor do desconto: R$"+valor_desc+"\n- Valor final da compra: R$"+desc)
        }else{
            total = l * 6.0
            alert("\n- Tipo de combustível escolhido: Diesel\n- Quantidade de litros: "+l+"\n- Valor antes do desconto: R$"+total+"\n- Valor do desconto: R$"+valor_desc+"\n- Valor final da compra: R$"+total)
        }
        break;
}