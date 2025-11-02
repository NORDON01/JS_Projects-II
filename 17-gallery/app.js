const log = console.log;

function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

//const natures = document.querySelector('.nature'); log(natures);
log("gue se passe-t-il ?")