const log = console.log;
const url = "./api/people.json";
/* const response = fetch(url);
log(response) */

/* fetch(url).then((resp) => {
    log(resp);
    return resp.json();
}).then((data) => {
    log(data)
}).catch((err) => log(err)); */

fetch(url)
.then((response) =>response.json())
.then((data) => log(data))
.catch((err) => log(err));

