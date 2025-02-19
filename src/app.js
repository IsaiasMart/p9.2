const carrito= document.getElementById("divp");
const popovercategories= document.getElementById('cat');
const carritocontenido= document.getElementById("cont");
const endpoint='https://books-foniuhqsba-uc.a.run.app/';
const productList=document.getElementById('product-list');
const cartDropdown = document.getElementById('cart-dropdown');
const op=document.getElementById('opciones');
const li=document.getElementById('lista');
const slider=document.getElementById('slider');
let cart = [];

// funcion cargar productos
async function loadProducts() {
    try {
      const response = await fetch(endpoint);
      const products = await response.json();
        renderProducts(products);
    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }
  }
  function renderSlider(products){
    slider.innerHTML='';
    
    
  }
  
  // productos en la página
  function renderProducts(products) {
    productList.innerHTML = ''; 
  
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.className= 'product border-2 rounded-md shadow p-2 hover:hover:scale-105 transition duration-300 ease-in-out';

      productDiv.innerHTML = `
        
        <img src="${product.coverImage}" alt="${product.title}" class="product-image">
        <h1 class="text-xl">${product.title}</h1>
        <p>Fecha de publicación: ${product.publicationDate}</p>
        <p>Editorial: ${product.publisher}</p>
        <p>Autoria de: ${product.author}</p>
        <p>Precio: ${product.price}</p>
        <p>Rating: ${product.rating}/5</p>
        <div class="w-full flex justify-between">
        <button class="w-full rounded-full border-2 bg-gray-700 text-white"
        data-id="${product.id}" 
        data-price="${product.price.trim}"
        data-name="${product.title}">
        Agregar al carrito
        
      </button>
      <button class="w-full rounded-full border-2 bg-gray-300 text-white hover:text-black"
      data-id="${product.id}" 
        data-price="${product.price.trim}"
        data-name="${product.title}">
        Añadir a la whislist
      </button>
      
        </div>
      
      <button class="w-full justify-center bg-gray-300 rounded-full border-2 hover:text-white">
      <a href="details.html?id=${product.id}">
      Detalles
      </a>
      
      </button>
       `
      ;
      productList.appendChild(productDiv);
      
    });
  }



carrito.addEventListener("click", (event) => {
    event.stopPropagation(); // Evita que el click se propague al document
    carritocontenido.classList.toggle("opacity-100");
    carritocontenido.classList.toggle("visible");
    carritocontenido.classList.toggle("opacity-0");
    carritocontenido.classList.toggle("invisible");
});

document.addEventListener('click', (event) => {
    if (!carrito.contains(event.target) && !carritocontenido.contains(event.target)) {
        carritocontenido.classList.add('opacity-o', 'invisible'); 
      carritocontenido.classList.remove('opacity-100', 'visible');
    }

  });
op.addEventListener("click", (event)=>{
    event.stopPropagation();
    li.classList.toggle("opacity-100");
    li.classList.toggle("visible");
    li.classList.toggle("opacity-0");
    li.classList.toggle("invisible");
})
document.addEventListener("click", (event)=>{
    if(!op.contains(event.target)&&!li.contains(event.target)){
      li.classList.add('opacity-0', 'invisible'); 
      li.classList.remove('opacity-100', 'visible');
    }
})

loadProducts();  