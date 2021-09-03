function calcular() {
    var num1 = parseInt(document.getElementById('num1').value);
    var num2 = parseInt(document.getElementById('num2').value);
    document.getElementById('resultado').innerText = 'Resultado: ' + `${num1} + ${num2} = ${num1 + num2}`;
}