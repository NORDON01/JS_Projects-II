const log = console.log;

const parent = {
    species:'Human',
    breathe:() => {log('Breathing')}
}
log(parent);

const enfant = Object.create(parent); //"Object attache enfant à parent"
enfant.nom = 'Georges';
enfant.age = 70;
log(enfant);

const petitEnfant = Object.create(enfant)  //"Object attache petitEnfant à enfant"
log(petitEnfant);
petitEnfant.age = 5;


log(petitEnfant.age);
log(petitEnfant.nom);
log(petitEnfant.species);

