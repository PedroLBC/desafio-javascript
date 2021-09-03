function calcular() {
    var num = Number(document.getElementById('num').value)
    var d = document.getElementById('resp')
    d.innerHTML = `<br>
    Dobro: ${num * 2}<br>
    Triplo: ${num * 3}<br>
    Raiz quadrada: ${num ** (1/2)}
    `
}