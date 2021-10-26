export function catalogoImagens(maquiagens) {
  let linhas = maquiagens.map((m) => {
    if (m.rating == null) {
      m.rating = 0;
    }
    if (m.price == null) {
      m.price = 0;
    }
    if (m.brand == null) {
      m.brand = " “” ";
    }

    if (m.product_type == null) {
      m.product_type = " “” ";
    }

    if (m.category == null) {
      m.category = " “” ";
    }

    return `<div class="product" data-name="${m.name}" 
      data-brand="${m.brand}" data-type="${
      m.product_type
    }" tabindex='384' style="display:block">
      <figure class="product-figure">
      <img src="${m.image_link}" width="215" height="215" alt="imagem" 
      onerror="javascript:this.src='img/unavailable.png'">
      </figure>
      <section class="product-description">
      <h1 class="product-name">${m.name}</h1>
      <div class="product-brands">
      <span class="product-brand background-brand">${m.brand}</span>
      <span class="product-brand background-price">R$ ${(
        m.price * 5.50
      ).toFixed(2)}</span>  
      </div>    
      </section>
  
      <section class="product-details"><div class="details-row">
        <div>Brand</div>
        <div class="details-bar">
          <div class="details-bar-bg" style="width= 250">${m.brand}</div>
        </div>
        </div><div class="details-row">
          <div>Price</div>
          <div class="details-bar">
            <div class="details-bar-bg" style="width=250"> ${(
              m.price * 5.50
            ).toFixed(2)}</div>
          </div> 
          </div><div class="details-row">
            <div>Rating</div>
            <div class="details-bar">
              <div class="details-bar-bg" style="width=250">${m.rating}</div>
            </div>
            </div><div class="details-row">
              <div>Category</div>
              <div class="details-bar">
                <div class="details-bar-bg" style="width=250">${
                  m.category
                }</div>
              </div>
              </div><div class="details-row">
                <div>Product_type</div>
              <div class="details-bar">
                <div class="details-bar-bg" style="width=250">${
                  m.product_type
                }</div>
              </div>
            </div>
        </section>   
      </div>`;
  });
  return `${linhas.join(" ")}`;
}
