import options from "./fetchGames.module.js";
import { Ui } from "./ui.module.js";

class Details {
  constructor(id) {
    document.getElementById(
      "showDetailsRow"
    ).innerHTML = `<div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>`;
    document
      .querySelector(".show-game-details .btn-close")
      .addEventListener("click", (e) => {
        e.preventDefault();
        this.closeDetails();
      });
    this.getGameDetails(id);
    this.ui = new Ui();
  }

  async getGameDetails(id) {
    try {
      const res = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
        options
      );
      const game = await res.json();
      this.ui.displayDetails(game);
    } catch (error) {
      console.log("Error!!!", error);
    }
  }

  closeDetails() {
    document.getElementById("showDetailsUi").classList.add("d-none");
    document.getElementById("mainGamesUi").classList.remove("d-none");
  }
}

export default Details;
