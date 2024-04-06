function displaynum(value) {
    // Obtém o elemento de entrada de texto
    var display = document.querySelector('input[name="texte1"]');
    var currentValue = display.value;

    if (value === 'C') {
        // Remove o último caractere da string atual
        display.value = currentValue.slice(0, -1);
    } else if (value === '=') {
        try {
            // Avalia a expressão matemática e exibe o resultado
            display.value = eval(currentValue);
        } catch (error) {
            display.value = 'Erro';
        }
    } else {
        // Adiciona o número ou operador ao campo de texto
        display.value += value;
    }
}
