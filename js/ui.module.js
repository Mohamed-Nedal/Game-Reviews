export class Ui {
  displayGames(data) {
    const displayElement = document.getElementById("gamesListShowen");

    if (data.length < 1) {
      return (displayElement.innerHTML = "<p>Not Found Games!!!!</p>");
    }

    let content = ``;

    for (let i = 0; i < data.length; i++) {
      content += `<div class="col-lg-3 col-md-4 col-xs-12">
              <a href="#" class="game-item" data-game_id="${data[i].id}">
                <div class="game-body">
                  <div class="cover">
                    <img src=${data[i].thumbnail} alt="Game Cover" />
                  </div>
                  <div class="data">
                    <div
                      class="info d-flex align-items-center justify-content-between"
                    >
                      <h3 class="game-title">${data[i].title}</h3>
                      <span>free</span>
                    </div>
                    <p class="desc">
                     ${data[i].short_description}
                    </p>
                  </div>
                </div>
                <div
                  class="game-footer d-flex align-content-center justify-content-between"
                >
                  <span>${data[i].genre}</span>
                  <span>${data[i].platform}</span>
                </div>
              </a>
            </div>`;
    }
    displayElement.innerHTML = content;
  }

  displayDetails(details) {
    let contentItem = `<div class="col-md-4 col-xs-12">
              <div class="img">
                <img src="${details.thumbnail}" alt="Game Image" />
              </div>
            </div>
            <div class="col-md-8 col-xs-12">
              <div class="game-details">
                <h3 class="text-capitalize">title: <span>${details.title}</span></h3>
                <ul>
                  <li>Category: <span class="text-uppercase">${details.genre}</span></li>
                  <li>
                    Platform:
                    <span class="text-capitalize">${details.platform}</span>
                  </li>
                  <li>Status: <span class="text-capitalize">${details.status}</span></li>
                </ul>
                <p>${details.description}</p>

                <a href="${details.game_url}">show game</a>
              </div>
            </div>`;

    document.getElementById("showDetailsRow").innerHTML = contentItem;
  }
}
