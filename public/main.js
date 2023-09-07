import { fetchUsers } from "./data/api.js";

document.addEventListener("DOMContentLoaded", () => {
  const fetchDataButton = document.getElementById("fetchData");
  const userDataContainer = document.getElementById("userData");
  const genderFilterSelect = document.getElementById("genderFilter");

  let genderFilter = "both";

  fetchDataButton.addEventListener("click", async () => {
    const users = await fetchUsers(10, genderFilter);
    renderUserCards(userDataContainer, users);
  });

  genderFilterSelect.addEventListener("change", (event) => {
    genderFilter = event.target.value;
  });

  function renderUserCards(container, users) {
    container.innerHTML = "";

    users.forEach((user) => {
      const card = createUserCard(user);
      container.appendChild(card);
    });
  }

  function createUserCard(user) {
    const card = document.createElement("div");
    card.classList.add("user-card");

    // Créez ici la structure de votre carte utilisateur et ajoutez les données de l'utilisateur.

    return card;
  }
});
