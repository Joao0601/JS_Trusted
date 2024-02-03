  function realizarOperacao(operacao) {
    // Obtém os valores dos inputs
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);

    // Verifica se os valores são números válidos
    if (isNaN(numero1) || isNaN(numero2)) {
      alert("Por favor, insira valores numéricos válidos.");
      return;
    }

    // Realiza a operação selecionada
    var resultado;
    switch (operacao) {
      case 'soma':
        resultado = numero1 + numero2;
        break;
      case 'subtracao':
        resultado = numero1 - numero2;
        break;
      case 'multiplicacao':
        resultado = numero1 * numero2;
        break;
      case 'divisao':
        if (numero2 !== 0) {
          resultado = numero1 / numero2;
        } else {
          alert("Não é possível dividir por zero.");
          return;
        }
        break;
      default:
        alert("Operação inválida.");
        return;
    }

    // Exibe o resultado na página
    document.getElementById("resultado").textContent = "Resultado: " + resultado;
  }
