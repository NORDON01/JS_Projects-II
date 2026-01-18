const log = console.log;

const one = document.querySelector('.one'); log(one);
const two = document.querySelector('.two'); log(two);
const three = document.querySelector('.three'); log(three);

const btn = document.querySelector('.btn');log(btn);


/* SCHEMA GENERAL DU FONCTIONNEMENT D'UNE PROMESSE */
//Mise en place de la promesse
const promise = new Promise ((resolve, reject) => {
    let value = true;
    if(value) {
        resolve([1, 2, 4]);
    }else{
        reject('There is an error');
    }
})

//Réalisation ou non de la promesse
promise
.then ((taco)=> {
    log(taco);
})
.catch((err) => {
    log(err);
})

