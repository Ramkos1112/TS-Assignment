/* ------------------------------ TASK 7 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas ir jų žaidėjus.
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus
nurodomas komandos pavadinimas ir papildomose "mini kortelėse" išvardinti žaidėjai su vardais, pavardėmis ir nuoroda į daugiau informacijos apie juos.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
var ENDPOINT = 'NBA.json';
fetch(ENDPOINT)
    .then(function (res) { return res.json(); })
    .then(function (data) {
    var output = document.querySelector("#output");
    data.teams.forEach(function (team) {
        var teamCard = document.createElement("div");
        teamCard.classList.add("teamCard");
        var teamName = document.createElement("h2");
        teamName.textContent = team.name;
        teamCard.appendChild(teamName);
        team.players.forEach(function (player) {
            var playerCard = document.createElement("div");
            playerCard.classList.add("playerCard");
            var playerName = document.createElement("span");
            playerName.textContent = player.firstName.concat(" ", player.lastName);
            var playerInfo = document.createElement("a");
            playerInfo.textContent = "More...";
            playerInfo.setAttribute("href", "".concat(player.googleSearch));
            playerInfo.setAttribute("target", "_blank");
            playerCard.append(playerName, playerInfo);
            teamCard.appendChild(playerCard);
        });
        output.appendChild(teamCard);
    });
});
