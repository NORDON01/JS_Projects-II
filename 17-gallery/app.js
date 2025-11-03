const log = console.log;

//Vérifie l'existence d'un élément dans le DOM
function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

//Affiche un élément (Constructeur ?)
function Gallery(element){
 this.container = element;
 this.list = [...document.querySelectorAll('.img')]; 
 //target
 this.modal = getElement('.modal');
 this.modalImg = getElement('.main-img');
 this.modalImages = getElement('.modal-images');
 this.closeBtn = getElement('.close-btn');
 this.nextBtn = getElement('.next-btn');
 this.prevBtn = getElement('.prev-btn');

 //bind functions
 this.openModal = this.openModal.bind(this);
 this.container.addEventListener('click', this.openModal)
}

Gallery.prototype.openModal= function(){
  log(this);
  log('open modal');
}

//Création de 2 éléments à partir du DOM  à l'aide du constructeur
const nature = new Gallery(getElement('.nature'));
const city = new Gallery(getElement('.city'));