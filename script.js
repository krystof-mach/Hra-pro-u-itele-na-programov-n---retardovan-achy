const conteinerElement = document.getElementById("container");

let pocetpoli = 9;
let stav = [];

for (let i = 0; i < pocetpoli; ) {
   const newPolicko = document.createElement("div")
    newPolicko.className = "policko";

    for (let j = 0; j < pocetpoli/3; j++) {
        const newPolicko2 = document.createElement("div")
        newPolicko2.className = "policko2";
        newPolicko2.id = i;
        newPolicko2.addEventListener("click", event =>{
            if(i%2==0){
                stav[newPolicko2.id] = 1
            }
            else {
                stav[newPolicko2.id] = 2
            }
        })

        newPolicko.appendChild(newPolicko2);
        i++;
    }

    conteinerElement.appendChild(newPolicko);
}