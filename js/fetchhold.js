const out = function (str) {
    console.log(str);
}


const url ='http://localhost:8181/api/hold';


function HentHold(){
    return fetch(url).then(svar => svar.json());
}
console.log("vent")

const apimap = new Map;
async function VisHold() {
    let holdListe = await HentHold();
    out(holdListe);
    holdListe.forEach((alleHold) => {
        apimap.get(alleHold)
    });
}
console.log(VisHold)

    const pbVisHold = document.getElementById('pbVisHold');


    pbVisHold.addEventListener('click', VisHold);



