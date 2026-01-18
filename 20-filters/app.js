const log = console.log;

let filteredProducts = [...products];    /* Fait une copie du fichier products.js */
log(filteredProducts);

 const productsContainer = document.querySelector('.products-container');

 const displayProducts = () => {
//if statement
if(filteredProducts.length < 1){    /* Empty array */
   productsContainer.innerHTML = `<h6>Sorry no products match your search</h6>`;
   return;
}

    productsContainer.innerHTML = filteredProducts.map(({id, title, image, price}) => {
        return`<article class="product" data-id = "${id}">
           <img src="${image}" 
           alt="" class="product-img img">
           <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">${price}</span>
           </footer>
         </article>`
    })
    .join('');  
 }

 displayProducts();


 //Text Filter
 const form = document.querySelector('.input-form'); log(form);
 const searchInput = document.querySelector('.search-input');log(searchInput);

 form.addEventListener('keyup', () => {
    const inputValue = searchInput.value; 
    log(inputValue);
    filteredProducts = products.filter((product) => {
      return product.title.toLowerCase().includes(inputValue);
    })
    displayProducts()
 } )

 // Filter buttons - création dynamique des boutons
 const companiesDOM = document.querySelector('.companies');
 const displayButtons = () => {
   const buttons = ['all', ...new Set(products.map((product)=> product.company)),];
   log(buttons);
   companiesDOM.innerHTML = buttons.map((company) => {
      return `<button class="company-btn" data-id=${company}>${company}</button>`
   }).join('');
 }

 displayButtons();

 //Buttons filter

 companiesDOM.addEventListener('click', (evt) => {
   const el = evt.target;              //el pour élément 
   if (el.classList.contains('.company-btn') && el.dataset.id === 'all'){
      filteredProducts = [...products];
   }else if(el.classList.contains('.company-btn')){
      filteredProducts = products.filter((product) => {
         return product.company === el.dataset.id})
      }
      searchInput.value = '';
      displayProducts();
   })