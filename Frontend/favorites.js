document.addEventListener('DOMContentLoaded', () => {
    const favoritesList = document.getElementById('favorites-list');

    // Get favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    // If there are no favorites
    if (favorites.length === 0) {
        favoritesList.innerHTML = '<p>You have no favorites yet.</p>';
        return;
    }

    // Generate the favorite animes' HTML
    favorites.forEach(favorite => {
        const animeDiv = document.createElement('div');
        animeDiv.classList.add('anime-card');

        animeDiv.innerHTML = `
            <img src="${favorite.image}" alt="${favorite.title}" style="width: 220px; height: 315px;">
            <h4>${favorite.title}</h4>
        `;

        favoritesList.appendChild(animeDiv);
    });
});
