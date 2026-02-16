const log = console.log;
const url = 'https://cors-anywhere.herokuapp.com/https://course-api.com/javascript-store-products';

const productsDOM = document.querySelector('.products-center'); 
log (productsDOM);

const fetchProducts = async () => {
    productsDOM.innerHTML = '<div class="loading"></div>';
    try{
        const resp = await fetch(url);
        const data = await resp.json();
        log(data);
        return data;
    }catch(error){
        productsDOM.innerHTML = '<p class="error">There was an error</p>';
    }
} 

displayProducts = (list) => {
    const productList = list.map((product) => {
    //Destructuring 
        const {id} = product;
        const {name: title, price} = product.fields; //alias
        const {url: img} = product.fields.image[0]; // alias
        const formatPrice = price/100;
        log(id);
    //img, name, price & id
    return  `<a class="single-product" href="product.html?
    id=${id}&name=john&age=25">
             <img src="${img}" alt="${title}" class="single-product-img"/>
             <footer>
                <h5 class="name">${title}</h5>
                <span class="price">$${formatPrice}</span>
             </footer>
            </a>`
    }).join(" ");
    productsDOM.innerHTML = `<div class = "product-container">
        ${productList}
    </>`
}

//fetchProducts();

start = async () => {
    const data = await fetchProducts();
    displayProducts(data);
}

start();