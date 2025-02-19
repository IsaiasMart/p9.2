const titulo= document.getElementById('title');
const endpoint='https://books-foniuhqsba-uc.a.run.app/';
async function loadPage(){
    try {
      const response = await fetch(endpoint);
      const products = await response.json();
      const productId = new URLSearchParams(window.location.search).get('id');
      const product = products.find(product => product.id === productId);
      renderTitle(product);
    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }
  }
  document.addEventListener('DOMContentLoaded', loadPage);

function renderTitle(product){
 const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = '';
  const productDiv = document.createElement('div');
  productDiv.className = 'product';
  productDiv.innerHTML = `
    <h1 class="text-xl">${product.title}</h1>
    <img src="${product.coverImage}" alt="${product.title}" class="product-image">
    <p>Fecha de publicación: ${product.publicationDate}</p>
    <p>Editorial: ${product.publisher}</p>
    <p>Autoria de: ${product.author}</p>
    <p>Precio: ${product.price}</p>
    <p>Rating: ${product.rating}/5</p>
  `;
  productContainer.appendChild(productDiv);
}
