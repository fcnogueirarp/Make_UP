import { criaMarcas, verificaMarcas } from "../js/filtraMarca.js";
import { verificaNomes } from "../js/filtraNome.js";
import { criaTipos, verificaTipos } from "../js/filtraTipo.js";
import { selecionar, verificaOrdem } from "../js/funcoes.js";

export function fetchMaquiagem(carregando) {
  let maquiagemPromise = fetch(
    "http://makeup-api.herokuapp.com/api/v1/products.json"
  );

  maquiagemPromise.then((resposta) => {
    resposta.json().then((maquiagens) => {
      let brands = criaMarcas(maquiagens);
      let products = criaTipos(maquiagens);

      document.getElementById("filter-brand").innerHTML = brands;
      document.getElementById("filter-type").innerHTML = products;

      carregando.setAttribute("hidden", "hidden");

      verificaOrdem(maquiagens);
      verificaMarcas(maquiagens);
      verificaTipos(maquiagens);
      verificaNomes(maquiagens);
      selecionar(maquiagens);
    });
  });
}
