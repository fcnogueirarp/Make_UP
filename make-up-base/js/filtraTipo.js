import { filtraMarcas, onlyUnique } from "../js/filtraMarca.js";

var select = document.getElementById("filter-type");

export function criaTipos(maquiagens) {
  let tipo = maquiagens.map((m) => {
    return `<option>${m.product_type}</option>`;
  });
  let unique = tipo.filter(onlyUnique);
  unique.sort((a, b) => {
    if (a < b) return -1;
    else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
  return `<select>${unique}</select>`;
}
export function verificaTipos(maquiagens) {
  select.addEventListener("click", () => {
    let option = select.children[select.selectedIndex];
    let tipo = option.textContent;

    let marca = document.getElementById("filter-brand").value;
    filtraMarcas(
      maquiagens.filter((item) => item.product_type == tipo),
      marca
    );
  });
}

export function filtraTipos(maquiagens, tipo) {
  let criaCatalogo = filtraMarcas(
    maquiagens.filter((item) => item.product_type == tipo)
  );
  document.querySelector(".catalog").innerHTML = criaCatalogo;
  return `<section class="catalog">${criaCatalogo}</section>`;
}
