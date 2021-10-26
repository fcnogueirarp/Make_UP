import { catalogoImagens } from "./criaCatalogo.js";

var caixaDeSelecao = document.getElementById("sort-type");

export function verificaOrdem(maquiagens) {
  if (caixaDeSelecao.value == "Melhor Avaliados") {
    let criaCatalogo1 = catalogoImagens(
      maquiagens.sort((a, b) => {
        if (a.rating > b.rating) return -1;
        else if (a.rating < b.rating) {
          return 1;
        } else {
          return 0;
        }
      })
    );
    let melhorAvaliados = (document.querySelector(".catalog").innerHTML =
      criaCatalogo1);
    return `<section class="catalog">${melhorAvaliados}</section>`;
  } else if (caixaDeSelecao.value == "Menores Preços") {
    let criaCatalogo = [
      catalogoImagens(
        maquiagens.sort((a, b) => {
          return a.price - b.price;
        })
      ),
    ];
    let melhorAvaliados = (document.querySelector(".catalog").innerHTML =
      criaCatalogo);
    return `<section class="catalog">${melhorAvaliados}</section>`;
  } else if (caixaDeSelecao.value == "Maiores Preços") {
    let criaCatalogo = [
      catalogoImagens(
        maquiagens.sort((a, b) => {
          return b.price - a.price;
        })
      ),
    ];
    let melhorAvaliados = (document.querySelector(".catalog").innerHTML =
      criaCatalogo);
    return `<section class="catalog">${melhorAvaliados}</section>`;
    

  } else if (caixaDeSelecao.value == "A-Z") {
    let criaCatalogo = [catalogoImagens(maquiagens.sort((x,y)=>{
      let a = x.name 
      let b = y.name
      return a==b ? 0: a>b ? 1 : -1;
    }))]
    document.querySelector(".catalog").innerHTML = criaCatalogo;
    return `<section class="catalog">${criaCatalogo}</section>`;
  } 
  else if (caixaDeSelecao.value == "Z-A") {
    let criaCatalogo = [catalogoImagens(maquiagens.sort((x,y)=>{
      let a = x.name 
      let b = y.name
      return a==b ? 0: a<b ? 1 : -1;
    }))]
    document.querySelector(".catalog").innerHTML = criaCatalogo;
    return `<section class="catalog">${criaCatalogo}</section>`;
  } 
  } 


export function selecionar(maquiagens) {
  caixaDeSelecao.addEventListener("click", () => {
    verificaOrdem(maquiagens);
  });
}
