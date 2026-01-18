const log = console.log;

const one = document.querySelector('.one'); log(one);
const two = document.querySelector('.two'); log(two);
const three = document.querySelector('.three'); log(three);

const btn = document.querySelector('.btn');log(btn);

/* CALL BACK HELL EXAMPLE */

/* function rouge (){
setTimeout(() => {
one.style.color = 'red';
    setTimeout(() => {
        two.style.color = 'green';
        setTimeout(() => {
            three.style.color = 'blue';
        }, 1000)
    }, 2000)
}, 1000)}

btn.addEventListener('click', rouge); */

/* THE ALTERNATIVE TO CALL BACK HELL: PROMISES */

let maCouleur = 'green';


    function bonneCouleur (elmt, couleur) {
        return new Promise( (resolve, reject) => {
        if((elmt === 'one' && couleur === 'yellow') ||
           (elmt === 'two' && couleur === 'green') ||
           (elmt === 'three' && couleur === 'blue')){
            log(`${elmt}: correct my color is ${couleur}`)
            resolve();
           
        }else{log('Erreur sur la couleur');
            reject(`Bad color: ${maCouleur}`)}
        })
    }
   
 

 bonneCouleur('one', 'red').then(() => {log('Success')})
 .catch((err) => log(err))