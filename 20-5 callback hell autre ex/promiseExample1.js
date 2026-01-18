const log = console.log;

const one = document.querySelector('.one'); log(one);
const two = document.querySelector('.two'); log(two);
const three = document.querySelector('.three'); log(three);

const btn = document.querySelector('.btn');log(btn);

/* INITIAL CALL BACK HELL */
/* function walkTheDog(callback){
    setTimeout(() => {
        log('You walk the dog')
        callback()
    },1500)
}

function cleanTheKitchen(callback){
    setTimeout(() => {
        log('You clean the kitchen')
        callback()
    },2500)
}

function takeOutTrash(callback){
    setTimeout(() => {
        log('You take out the trash')
        callback()
    },500)
}

walkTheDog(() => cleanTheKitchen(() => takeOutTrash(() => {log('You finished all the chores')}))); */

/* CHANGE FOR PROMISES 
1- Remove callback
2- Create new Promise
3- Creation d'une constante (Ex: dogwalked)
4- if...resolve(message)...else reject(message)
5- exécution des promesses: .then{} */

//CONSTRUCTION DES PROMESSES
function walkTheDog(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const dogwalked =true;
        if(dogwalked){resolve('Dogwalked')}
        else {reject('Dog has not been walked')}
    },1500)
  })
}

function cleanTheKitchen(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const kitchencleaned = true;
        if(kitchencleaned){resolve('kitchencleaned')}
        else{reject('Kitchen was not cleaned')}
    },2500)
  })
}

function takeOutTrash(){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
        const trashtakenout = true;
        if(trashtakenout){resolve('Trash was taken out')}
        else{reject('Trash was not taken out')}
    },500)
  })
}

walkTheDog().then(value => {log(value); return(cleanTheKitchen());})
            .then(value => {log(value); return(takeOutTrash());})
            .then(value => {log(value); log('You finished all the chores');})
            .catch(error => {console.log(error);})