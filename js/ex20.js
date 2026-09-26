var op1, qnt, subtotal, pag, desc

op1 = parseInt(prompt("1 - Camiseta - R$ 50,00\n2 - Calça - R$ 100,00\n3 - Tênis - R$ 200,00\nInforme o produto desejado: "))

qnt = parseInt(prompt("Informe a quantidade: "))

switch(op1){ //Produto
    case 1:
        subtotal = 50 * qnt
        pag = parseInt(prompt("1 - Pix: 10% de desconto.\n2 - Dinheiro: 5% de desconto.\n3 - Cartão: sem desconto.\nInforme a opção desejada: "))
        switch(pag){ //Forma de Pagamento
            case 1:
                total = subtotal * 0.90
                desc = subtotal - total
                alert("- Produto escolhido: Camiseta\n- Quantidade: "+qnt+"\n- Subtotal: R$"+subtotal+"\n- Valor do desconto: R$"+desc+"\n- Valor final da compra: R$"+total)
                break;
            case 2:
                total = subtotal * 0.95
                desc = subtotal - total
                alert("- Produto escolhido: Camiseta\n- Quantidade: "+qnt+"\n- Subtotal: R$"+subtotal+"\n- Valor do desconto: R$"+desc+"\n- Valor final da compra: R$"+total)
                break;
            case 3:
                total = subtotal
                desc = subtotal - total
                alert("- Produto escolhido: Camiseta\n- Quantidade: "+qnt+"\n- Subtotal: R$"+subtotal+"\n- Valor do desconto: R$"+desc+"\n- Valor final da compra: R$"+total)
                break;
        }
    break;
    case 2:
        subtotal = 100 * qnt
        pag = parseInt(prompt("1 - Pix: 10% de desconto.\n2 - Dinheiro: 5% de desconto.\n3 - Cartão: sem desconto.\nInforme a opção desejada: "))
        switch(pag){ //Forma de Pagamento
            case 1:
                total = subtotal * 0.90
                desc = subtotal - total
                alert("- Produto escolhido: Calça\n- Quantidade: "+qnt+"\n- Subtotal: R$"+subtotal+"\n- Valor do desconto: R$"+desc+"\n- Valor final da compra: R$"+total)
                break;
            case 2:
                total = subtotal * 0.95
                desc = subtotal - total
                alert("- Produto escolhido: Calça\n- Quantidade: "+qnt+"\n- Subtotal: R$"+subtotal+"\n- Valor do desconto: R$"+desc+"\n- Valor final da compra: R$"+total)
                break;
            case 3:
                total = subtotal
                desc = subtotal - total
                alert("- Produto escolhido: Calça\n- Quantidade: "+qnt+"\n- Subtotal: R$"+subtotal+"\n- Valor do desconto: R$"+desc+"\n- Valor final da compra: R$"+total)
                break;
        }
    break;
    case 3:
        subtotal = 200 * qnt
        pag = parseInt(prompt("1 - Pix: 10% de desconto.\n2 - Dinheiro: 5% de desconto.\n3 - Cartão: sem desconto.\nInforme a opção desejada: "))
        switch(pag){ //Forma de Pagamento
            case 1:
                total = subtotal * 0.90
                desc = subtotal - total
                alert("- Produto escolhido: Sapato\n- Quantidade: "+qnt+"\n- Subtotal: R$"+subtotal+"\n- Valor do desconto: R$"+desc+"\n- Valor final da compra: R$"+total)
                break;
            case 2:
                total = subtotal * 0.95
                desc = subtotal - total
                alert("- Produto escolhido: Sapato\n- Quantidade: "+qnt+"\n- Subtotal: R$"+subtotal+"\n- Valor do desconto: R$"+desc+"\n- Valor final da compra: R$"+total)
                break;
            case 3:
                total = subtotal
                desc = subtotal - total
                alert("- Produto escolhido: Sapato\n- Quantidade: "+qnt+"\n- Subtotal: R$"+subtotal+"\n- Valor do desconto: R$"+desc+"\n- Valor final da compra: R$"+total)
                break;
        }
    break;
}