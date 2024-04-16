// Preencher a área de produtos
products.forEach(product => {
    // Criar elemento de produto
    const productElement = document.createElement("div");
    productElement.classList.add("productItem");
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <div class="productItemName">${product.name}</div>
        <div class="productItemDescription">${product.description}</div>
        <div class="productItemPrice">€ ${product.price.toFixed(2)}</div>
    `;
    // Adicionar o elemento de produto à área de produtos correspondente à sua categoria
    const categoryContainer = document.querySelector(`.products-${product.category.toLowerCase()}`);
    if (categoryContainer) {
        categoryContainer.appendChild(productElement);
    }
});