function num() {
    var num = Number(document.getElementById('num').value)
    var d = document.getElementById('resp')
    d.innerHTML = `
    Número: ${num}<br>
    Antecessor: ${num - 1}<br>
    Sucessor: ${num + 1}<br>`
}