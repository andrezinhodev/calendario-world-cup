function createCardGames(player1, hour, player2) {
  return `
  <li>
    <img src="assets/icon-${player1}.svg" alt="${player1}" />
    <strong>${hour}</strong>
    <img src="assets/icon-${player2}.svg" alt="Logo da ${player2}" />
  </li>
`
}

let delay = 0; 
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
       ${games}
      </ul>
    </div>
  `
}

document.querySelector('#cards').innerHTML = 
  createCard(
    "24/11", 
    "quinta", 
    createCardGames("brazil","16:00", "serbia") + createCardGames("argentina", "13:00", "brazil")
    ) +
  createCard(
    "29/11", 
    "sexta", 
    createCardGames("swit", "18:00", "brazil") + createCardGames("portugal", "14:00", "ghana")
    ) +
  createCard(
    "02/12", 
    "segunda", 
    createCardGames("portugal", "19:00", "brazil") + createCardGames("amenia", "20:00", "swit")
    ) + 
    createCard(
      "16/12",
      "terça",
      createCardGames("islands", "08:00", "portugal") + createCardGames("portugal", "15:00", "hungary")
    ) 
      

