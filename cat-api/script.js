// https://http.cat/
function printCode() {
  var code = document.getElementById('code-input')

  var cat = document.getElementById('cat')
  cat.innerHTML = `<img src="https://http.cat/${code.value}">`
}
