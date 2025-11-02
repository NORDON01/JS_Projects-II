function getElement(selection) {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  }
  throw new Error(
    `Please check "${selection}" selector, no such element exists`
  );
}

let geek1 = {
    prop1() {
        return 'Object.isExtensible()';
    },
    prop2() {
        return 'JavaScript ';
    }
}
let geek2 = {
    prop3() {
        return 'Geeksforgeeks';
    }
}

Object.setPrototypeOf(geek2, geek1); /* geek2 reçoit les méthodes de geek1 */

console.dir(geek2);
console.log(geek2.prop3());
console.log(geek2.prop2());
console.log(geek2.prop1());