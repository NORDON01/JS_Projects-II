const log = console.log;
const btn = document.querySelector('.btn');
const url = "./api/people.json";
btn.addEventListener('click', () => {getData(url)});
   
function getData(url){
const xhr = new XMLHttpRequest();
log(xhr);                          //readyState 0 - not sent
xhr.open('GET', url);//readyState 1 - open
xhr.onreadystatechange = function(){    
    if(xhr.readyState === 4 && xhr.status === 200){
        const data = JSON.parse(xhr.responseText);
        log(data);
        const displayData = data.map(item => {
            return `<p>${item.name}</p>`
        }).join('');
        const element = document.createElement('div');
        element.innerHTML = displayData;
        document.body.appendChild(element);
    }else{
        log({
            status:xhr.status,
            text: xhr.statusText,
            state:xhr.readyState
        });
    }
}

xhr.send();                        //readyState 4 - done
}

log('Hello world');