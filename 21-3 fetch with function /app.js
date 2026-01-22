const log = console.log;
const url = "./api/people.json";
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    fetch(url)
    .then((response) =>response.json())
    .then((data) => { log(data);
                      displayItems(data);
                    })
    .catch((err) => log(err));
})

const displayItems = items => {
    const displayData = items.map((item) => {
     //   log(typeof(item));
        const {name} = item;
        return `<p> ${name} </p>`;
    }).join('');
    log(displayData);
    const element = document.createElement('div');
    element.innerHTML = displayData;
    document.body.appendChild(element);
}