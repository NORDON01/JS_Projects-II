const log = console.log;
const xhr = new XMLHttpRequest();
log(xhr);                          //readyState 0 - not sent
xhr.open('GET','./api/sample.txt');//readyState 1 - open
xhr.onreadystatechange = function(){    
    if(xhr.readyState === 4 && xhr.status === 200){
                                   //readyState 2, 3 - loading
        const text = document.createElement('p');
        text.textContent = xhr.responseText;
        document.body.appendChild(text);
    }else{
        log({
            status:xhr.status,
            text: xhr.statusText,
            state:xhr.readyState
        });
    }
}

xhr.send();                        //readyState 4 - done      
log('Hello world');