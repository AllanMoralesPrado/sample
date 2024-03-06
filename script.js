const listaDeObjetos = document.querySelector(".lista-de-objetos");

listaDeObjetos.addEventListener("click", () => {
    const titulo = document.createElement("div");
    titulo.innerHTML = "<p style='text-align: center;'>Lista de Objetos</p>";
    listaDeObjetos.appendChild(titulo)
})