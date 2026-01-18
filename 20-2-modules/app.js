import {random, people, getElement} from './utils/data.js';
const log = console.log;

let peoples = '';

const my_container = getElement('.container'); log(my_container);
const btn = getElement('.btn'); log(btn);

const showPeople = () => {
    people.map((people) => {
       const { fname, job } = people;   /* Pour décomposer un objet */
       peoples = peoples + `<p>${fname}  ${job}</p>`;
    })
 //   return peoples;
}


btn.addEventListener('click', () => {
    showPeople(); 
    my_container.innerHTML = peoples ;
})