function createGame(player1, hour, player2){
    return `
    <li>
        <img src="assents/icon-${player1}.svg" alt="Bandeira do ${player1}">  
        <strong>${hour}</strong>
        <img src="assents/icon-${player2}.svg" alt="Bandeira da ${player2}">   
    </li>`
}

let delay = 0;
function creatCard(date, day, games){
    delay = delay + 0.3;
    return`
    <div class="card" style = "animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
            <ul>
            ${games}
            </ul>
    </div>`
}
document.querySelector("#cards").innerHTML = 
    creatCard("22/11", "terça",
    createGame("brazil", "16:00", "cameroon") +
    createGame("hugary", "13:00", "argentina")+
    createGame("colombia", "20:00","japan"))
    +
    creatCard("23/11","quarta",
    createGame("botswana", "10:00", "burundi") +
    createGame("hondura", "12:00", "antigua")+
    createGame("cookisland", "21:00","kazakhstan"))
   