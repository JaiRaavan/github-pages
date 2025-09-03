// This file contains JavaScript code to fetch movie data from the movies.json file and dynamically update the movies section on the webpage.

document.addEventListener('DOMContentLoaded', function() {
    fetch('data/movies.json')
        .then(response => response.json())
        .then(data => {
            const moviesContainer = document.getElementById('movies-container');
            data.forEach(movie => {
                const movieCard = document.createElement('div');
                movieCard.className = 'col-md-4 mb-4';
                movieCard.innerHTML = `
                    <div class="card">
                        <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                        <div class="card-body">
                            <h5 class="card-title">${movie.title}</h5>
                            <p class="card-text">${movie.description}</p>
                            <p class="card-text"><strong>Price: $${movie.price}</strong></p>
                            <a href="#" class="btn btn-primary">Buy Ticket</a>
                        </div>
                    </div>
                `;
                moviesContainer.appendChild(movieCard);
            });
        })
        .catch(error => console.error('Error fetching movie data:', error));
});