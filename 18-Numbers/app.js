const log = console.log;
log('numbers project');

const items = [...document.querySelectorAll('.number')]; log(items);

const updateCount = (el) => {               //Fonction incrémentation
    value = parseInt(el.dataset.value);     //Récupère la valeur 
    increment = Math.ceil(value/1000);      //d'un dataset
    //log(increment);
    let initialValue = 0;
}        

items.forEach(item => updateCount(item));   //Utilisation de cette fonction