let out = function (str) {
    console.log(str);
}


const apiurl ='http://localhost:8181/api/rytter';


function HentRytter(){
    return fetch(apiurl).then(svar => svar.json());
}
console.log("vent")

const apimapping = new Map;
async function VisRytter() {
    let rytterListe = await HentRytter();
    out(rytterListe);
    rytterListe.forEach((allerytter) => {
        apimapping.get(allerytter)
    });
}
console.log(VisRytter)

    const pbVisRytter = document.getElementById('pbVisRytter');


    pbVisRytter.addEventListener('click', VisRytter);

