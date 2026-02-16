function toggleMode() {
  const html = document.documentElement /* criando a função*/
  html.classList.toggle("light") /*trocando as classes*/
  //pegando imagem
  const img = document.querySelector("#profile img")
  //substituir
  if (html.classList.contains("light")) {
    //se tiver light mode, add imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
