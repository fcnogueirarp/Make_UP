import { catalogoImagens } from "./criaCatalogo.js";

var input = document.getElementById("filter-name");



export function verificaNomes(maquiagens) {

  input.addEventListener("input", () => {
    let digitado = input.value;

    filtraNomes(maquiagens, digitado);
  });
}

export function filtraNomes(maquiagens, digitado) {
  let criaCatalogo = catalogoImagens(maquiagens.filter((m) => m.name.indexOf(digitado) != -1));
  
  document.querySelector(".catalog").innerHTML = criaCatalogo;

  return `<section class="catalog">${criaCatalogo}</section>`;
}
