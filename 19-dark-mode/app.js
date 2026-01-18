const log = console.log;
log('dark mode');
const body = document.querySelector('body')
const toogle_btn = document.querySelector('.btn');
toogle_btn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
});

log(articles);          //Affiche le fichier à la console
const articlesContainer = document.querySelector('.articles');

const articlesData = articles.map(item => {
    const {id, title, date, length, snippet} = item;    //Destructuring object
    const formatDate = moment(date).format('MMMM Do, YYYYY'); //????
    return `<article class="post">
          <h2>${title}</h2>
          <div>
            <span>${formatDate}</span>
            <span>${length}</span>
          </div>
          <p>${snippet}</p>
        </article>`   
}).join('');

articlesContainer.innerHTML = articlesData;

log(moment.js);