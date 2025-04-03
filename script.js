// Função para realizar a conversão
function conversor() {
  // Pega o valor do input
  let valordolar = document.getElementById("valordolar").value;
  
  // Verifica se o valor inserido é numérico e não está vazio
  if (valordolar && !isNaN(valordolar) && valordolar > 0) {
    // Taxa de câmbio (pode ser ajustada)
    let taxadecambio = 5.66;
    
    // Calcula o valor convertido
    let valorconvertido = valordolar * taxadecambio;
    
    // Exibe o resultado na tela
    document.getElementById("resultado").innerHTML = valordolar + " USD convertido em reais é: R$" + valorconvertido.toFixed(2);
  } else {
    // Exibe uma mensagem de erro caso o valor seja inválido
    document.getElementById("resultado").innerHTML = "Por favor, digite um valor válido!";
  }
}
