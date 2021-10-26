import { catalogoImagens } from "../js/criaCatalogo.js";

var select = document.getElementById("filter-brand");

export function criaMarcas(maquiagens) {
  let marcas = maquiagens.map((m) => {
    return `<option>${m.brand}</option>`
  });
  let unique = marcas.filter(onlyUnique);
  unique.sort((a, b) => {
    if (a < b) return -1;
    else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  })
  return `<select>${unique}</select>`;
}
export function verificaMarcas(maquiagens) {
  select.addEventListener("click", () => {
    let option = select.children[select.selectedIndex];
    let marca = option.textContent;
    filtraMarcas(maquiagens, marca);
  });
}

export function filtraMarcas(maquiagens, marca) {
  let criaCatalogo = catalogoImagens(
    maquiagens.filter((item) => item.brand == marca));
  document.querySelector(".catalog").innerHTML = criaCatalogo;
  return `<section class="catalog">${criaCatalogo}</section>`;
}


export function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}