const apiurl ='http://localhost:8080/api/holdModel';


function HentAlt(){
    return fetch(apiurl).then(svar => svar.json());
}
console.log("vent")

const apimapping = new Map;
async function VisAlt() {
    const holdListe = await HentAlt();
    holdListe.forEach((alleHold) => {
        apimapping.get(alleHold);
    })
}












console.log(VisAlt)
VisAlt();







    const pbVisAlt = document.getElementById('pbVisAlt');








    pbVisAlt.addEventListener('click', VisAlt);


