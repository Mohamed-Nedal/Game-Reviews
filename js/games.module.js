import Details from "./details.module.js";
import options from "./fetchGames.module.js";
import { Ui } from "./ui.module.js";

export default class Games {
  constructor() {
    this.getGames();

    document.querySelectorAll(".navbar .nav-link").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        document.getElementById(
          "gamesListShowen"
        ).innerHTML = `<div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>`;
        document
          .querySelector(".navbar .nav-link.active")
          .classList.remove("active");
        e.target.classList.add("active");
        this.getGames(e.target.dataset.category);
      });

      this.ui = new Ui();
    });
  }

  async getGames(cat = "mmorpg") {
    try {
      const res = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${cat}`,
        options
      );
      const result = await res.json();
      this.ui.displayGames(result);
      this.addDetailsClick();
    } catch (error) {
      console.log("Error!!!", error);
    }
  }

  addDetailsClick() {
    document.querySelectorAll(".game-item").forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const gameId = item.dataset.game_id;
        this.showDetails(gameId);
      });
    });
  }

  showDetails(id) {
    const details = new Details(id);
    document.getElementById("showDetailsUi").classList.remove("d-none");
    document.getElementById("mainGamesUi").classList.add("d-none");
  }
}
