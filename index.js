// selectors
const card = document.querySelector(".card");

// event listeners
card.addEventListener("click", add);

// functions
function add(event){
    const pagediv = document.createElement("div");
    pagediv.classList.add("card-body")

    const pagelist =  document.createElement("a");
    pagelist.innerText = 'i am a card body';

    pagediv.appendChild(pagelist);
    card.appendChild(pagediv);

}