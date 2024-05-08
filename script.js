function toggleMode(){
  //selecionando a classe
  const html = document.documentElement
  // alterando a classe
  html.classList.toggle("light")

  //Ambos fazem a mesma coisa

  // if (html.classList.contains('light')){
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  //selecionando a imagem de perfil
  const img = document.querySelector('#profile img')
  //substitindo a imagem
  if (html.classList.contains('light')){
    // se o light mode estiver ativo
    img.setAttribute('src','./assets/avatar.png')
    img.setAttribute('alt'," Foto de João Pedro de terno em fundo branco")
  } else {
    // se o light mode não estiver ativo
    img.setAttribute("src", "./assets/avatar.png")
  }

}