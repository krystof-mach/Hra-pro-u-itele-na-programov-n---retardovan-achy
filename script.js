const conteinerElement = document.getElementsByClassName("container")[0];

let pocetpoli = 64;
let x = 0;
let vybranyPrvek = null;

let pawn_b = "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Chess_pdt45.svg/60px-Chess_pdt45.svg.png?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail";
let rook_b = "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Chess_rdt45.svg/60px-Chess_rdt45.svg.png?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail";
let knight_b = "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Chess_ndt45.svg/60px-Chess_ndt45.svg.png?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail";
let bishop_b = "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Chess_bdt45.svg/60px-Chess_bdt45.svg.png?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail";
let queen_b = "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Chess_qdt45.svg/60px-Chess_qdt45.svg.png?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail";
let king_b = "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Chess_kdt45.svg/60px-Chess_kdt45.svg.png?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail";

let pawn_w = "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/Chess_plt45.svg/60px-Chess_plt45.svg.png?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail";
let rook_w = "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/72/Chess_rlt45.svg/60px-Chess_rlt45.svg.png?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail";
let knight_w = "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/70/Chess_nlt45.svg/60px-Chess_nlt45.svg.png?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail";
let bishop_w = "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Chess_blt45.svg/60px-Chess_blt45.svg.png?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail";
let queen_w = "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Chess_qlt45.svg/60px-Chess_qlt45.svg.png?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail";
let king_w = "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/Chess_klt45.svg/60px-Chess_klt45.svg.png?utm_source=commons.wikimedia.org&utm_campaign=parser&utm_content=thumbnail";

let stav = [
    rook_b, knight_b, bishop_b, queen_b, king_b, bishop_b, knight_b, rook_b,
    pawn_b, pawn_b,   pawn_b,   pawn_b,  pawn_b, pawn_b,   pawn_b,   pawn_b,
    null,   null,     null,     null,    null,   null,     null,     null,
    null,   null,     null,     null,    null,   null,     null,     null,
    null,   null,     null,     null,    null,   null,     null,     null,
    null,   null,     null,     null,    null,   null,     null,     null,
    pawn_w, pawn_w,   pawn_w,   pawn_w,  pawn_w, pawn_w,   pawn_w,   pawn_w,
    rook_w, knight_w, bishop_w, queen_w, king_w, bishop_w, knight_w, rook_w
];

for (let i = 0; i < pocetpoli; ) {
    const newRadek = document.createElement("div");
    newRadek.className = "radek";
    x++;
    for (let j = 0; j < pocetpoli/8; j++) {
        const newPolicko = document.createElement("div");
        newPolicko.id = i;
        newPolicko.className = "policko";

        newPolicko.addEventListener("click", kliknutiNaPolicko);

        if(x%2==0){
            if(j%2 ==0){
                newPolicko.classList.add("policko2");
            }
            else{
                newPolicko.classList.add("policko3");
            }
        }
        else{
            if(j%2 ==1){
                newPolicko.classList.add("policko2");
            }
            else{
                newPolicko.classList.add("policko3");
            }
        }
        newRadek.appendChild(newPolicko);
        i++;
    }
    conteinerElement.appendChild(newRadek);
}

const Policko = document.querySelectorAll(".policko");

for (let b = 0; b < Policko.length; b++) {
    if (stav[b]) {
        const postavicka = document.createElement("img");
        postavicka.src = stav[b];
        postavicka.className = "figurka";
        Policko[b].appendChild(postavicka);
    }
}
//z pulky generovano a zformatovano Gemini Argon 4
function kliknutiNaPolicko(event) {
    const policko = event.currentTarget;
    const figurka = policko.querySelector("img");

    if (vybranyPrvek === null) {
        if (figurka) {
            vybranyPrvek = figurka;
            policko.classList.add("vybrane");
        }
    } else {
        if (!figurka) {
            const puvodniPolicko = vybranyPrvek.parentElement;
            puvodniPolicko.classList.remove("vybrane");

            policko.appendChild(vybranyPrvek);
            vybranyPrvek = null;
        } else {
            if (vybranyPrvek === figurka) {
                policko.classList.remove("vybrane");
                vybranyPrvek = null;
            } else {
                vybranyPrvek.parentElement.classList.remove("vybrane");
                vybranyPrvek = figurka;
                policko.classList.add("vybrane");
            }
        }
    }
}
