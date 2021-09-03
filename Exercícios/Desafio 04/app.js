function type() {
    var algo = (document.getElementById('algo').text);
    var result = typeof(algo)
    document.getElementById('tipo').innerText = `"${algo}" é da classe ${result}`
}