document.addEventListener("DOMContentLoaded", function () {
  const fetchDataButton = document.getElementById("fetchData");
  const userDataContainer = document.getElementById("userData");

  fetchDataButton.addEventListener("click", function () {
      // Récupérer 10 utilisateurs depuis l'API
      fetch("https://randomuser.me/api/?results=10")
          .then((response) => response.json())
          .then((data) => {
              const users = data.results;

              // Créer un conteneur pour les cartes d'utilisateur
              const userCardsContainer = document.createElement("div");
              userCardsContainer.className = "user-cards-container";

              // Parcourir les utilisateurs et afficher leurs données
              users.forEach((user) => {
                  const fullName = `${user.name.first} ${user.name.last}`;
                  const email = user.email;
                  const image = user.picture.large;

                  // Créer une div pour chaque utilisateur
                  const userDiv = document.createElement("div");
                  userDiv.className = "user-card";
                  userDiv.innerHTML = `
                      <img src="${image}" alt="${fullName}" />
                      <h2>${fullName}</h2>
                      <p>Email: ${email}</p>
                  `;

                  // Ajouter la div à userCardsContainer
                  userCardsContainer.appendChild(userDiv);
              });

              // Ajouter le conteneur de cartes à userDataContainer
              userDataContainer.appendChild(userCardsContainer);
          })
          .catch((error) => {
              console.error("Erreur lors de la récupération des données:", error);
          });
  });
});
