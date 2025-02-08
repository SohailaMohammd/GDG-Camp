let card = document.querySelector(".card-info");
let allCard = document.querySelector(".big");

for (let i = 0; i < 2; i++) {
   let clonedCard = card.cloneNode(true); 
   allCard.appendChild(clonedCard);
}
