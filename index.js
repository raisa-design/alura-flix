/*function adicionarFilme() {
  var FilmeFavorito = document.getElementById('filme').value
  if (FilmeFavorito.endsWith('.jpg')) {
    var elementoFilmeFavorito = '<img src=' + FilmeFavorito + '>'
    var elementoListaFilmes = document.getElementById('listaFilmes')
    elementoListaFilmes.innerHTML =
    elementoListaFilmes.innerHTML + elementoFilmeFavorito
  }else{
    console.error('Endereço de filme inválido')
  }

  document.getElementById('filme').value = ''
} */

// Dividir esse código acima em 2 partes

function adicionarFilme() {
  var FilmeFavorito = document.getElementById('filme').value
  if (FilmeFavorito.endsWith('.jpg')) {
   listarFilmesNaTela(FilmeFavorito)
  }else{
    console.error('Endereço de filme inválido')
  }

  document.getElementById('filme').value = ''

  }

  function listarFilmesNaTela(filme){
    console.log(filme);
    var elementoFilmeFavorito= '<img src='+ filme + '>'
    var elementoListaFilmes= document.getElementById('listaFilmes')
    elementoListaFilmes.innerHTML=
      elementoListaFilmes.innerHTML + elementoFilmeFavorito
  }