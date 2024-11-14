const favButton = document.querySelector('.fav-button');
favButton.addEventListener('click', () => {
  favButton.classList.toggle('active');
})


// favourite icon

document.addEventListener('DOMContentLoaded', () => {
  // Get all favorite buttons
  const favButtons = document.querySelectorAll('.fav-button');
  
  // Add event listeners to each button
  favButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          // Get the anime's information
          const animeCard = event.target.closest('.col-md-3');
          const animeTitle = animeCard.querySelector('h4').textContent;
          const animeImage = animeCard.querySelector('img').src;

          // Save to favorites in localStorage
          saveToFavorites(animeTitle, animeImage);
      });
  });
});

// // Function to save to localStorage
// function saveToFavorites(title, image) {
//   // Get current favorites from localStorage
//   let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

//   // Check if the anime is already in favorites
//   const isFavorite = favorites.some(fav => fav.title === title);

//   if (!isFavorite) {
//       // Add the new favorite
//       favorites.push({ title, image });
//       localStorage.setItem('favorites', JSON.stringify(favorites));
//       alert(`${title} has been added to your favorites!`);
//   } else {
//       alert(`${title} is already in your favorites.`);
//   }
// }


document.addEventListener('DOMContentLoaded', () => {
  // Get all favorite buttons
  const favButtons = document.querySelectorAll('.fav-button');

  // Add event listeners to each button
  favButtons.forEach(button => {
      button.addEventListener('click', (event) => {
          // Get the anime's information
          const animeCard = event.target.closest('.col-md-3');
          const animeTitle = animeCard.querySelector('h4').textContent;
          const animeImage = animeCard.querySelector('img').src;

          // Toggle the favorite state of the heart icon
          const heartIcon = animeCard.querySelector('.fa-heart');
          heartIcon.classList.toggle('favorited');

          // Save or remove from favorites in localStorage
          if (heartIcon.classList.contains('favorited')) {
              saveToFavorites(animeTitle, animeImage);
          } else {
              removeFromFavorites(animeTitle);
          }
      });
  });

  // Save to favorites function
  function saveToFavorites(title, image) {
      // Get current favorites from localStorage
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

      // Check if the anime is already in favorites
      const isFavorite = favorites.some(fav => fav.title === title);

      if (!isFavorite) {
          // Add the new favorite
          favorites.push({ title, image });
          localStorage.setItem('favorites', JSON.stringify(favorites));
          alert(`${title} has been added to your favorites!`);
      }
  }

  // Remove from favorites function
  function removeFromFavorites(title) {
      // Get current favorites from localStorage
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

      // Filter out the favorite to be removed
      favorites = favorites.filter(fav => fav.title !== title);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      alert(`${title} has been removed from your favorites.`);
  }
});
