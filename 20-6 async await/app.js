const log = console.log;

const one = document.querySelector('.one'); log(one);
const two = document.querySelector('.two'); log(two);
const three = document.querySelector('.three'); log(three);

const btn = document.querySelector('.btn');log(btn);

btn.addEventListener('click', async()=>{
    try{
    await addColor(1000, one, 'red');
    await addColor(5000, two, 'green');
    await addColor(10000, three, 'blue');
    }catch(error){
        log(error);
    }
})

function addColor(time, element, color){
    return new Promise((resolve, reject)=> {
        if(element){
            setTimeout(()=>{
                element.style.color=color;
                resolve();
            }, time)
        }
        else{
            reject(`There is no such element ${element}`);
        }
    }
  )
}

