## Game Catalog System
This is a game catalog system developed with Laravel 11.3.1 for the backend and Inertia.js with React for the frontend.
The system allows users to view a list of games, add games to favorites, and explore different game platforms and categories.

## Key Features
Viewing a list of available games.
Adding games to favorites for quick access.
Exploring games by category.
User authentication for access to protected resources.

## Prerequisites
PHP >= 7.4 and Composer installed globally.
Node.js and npm installed globally.
PostgreSQL 15 database (or another compatible database) configured and running locally or on a remote server.

## Installation and Usage
Clone this repository to your local environment:

git clone https://github.com/LeticiaPavaoES/ProjetoJogos.git


Navigate to the project directory and install backend dependencies:

cd ProjetoJogos/backend2

composer install


Configure the PostgreSQL database by editing the .env file with your credentials.

Run migrations and seeds to create tables and populate the database:

php artisan migrate --seed


Start the backend server:

php artisan serve


## In the backend2 directory, install frontend dependencies:

npm install


Start the frontend server:

npm run dev 


Access the system in your web browser:

http://127.0.0.1:8000


## Alternative frontend setup
Navigate to the frontend directory and install dependencies:


cd ../frontend

npm install


Start the frontend server:

npm run dev


Access the system in your web browser:

Local: http://localhost:3000


## Contributing
If you wish to contribute to this project, follow these steps:

Fork this repository.
Create a new branch with your feature:

git checkout -b minha-funcionalidade

Make your changes and commit:

git commit -m 'Adiciona minha funcionalidade'

Push to your fork's main branch:

git push origin minha-funcionalidade
Open a pull request for review.

## For future implementations in this game catalog project, some ideas include:

- Rating and Comment System: Allow users to rate games and leave comments, creating a community around the catalog.

- Advanced Search Filters: Enhance the search functionality with advanced filters such as genre, age rating, release date, among others.

- Personalized Recommendation System: Implement a recommendation system that suggests games based on the user's browsing history and favorite games.

- Integration of Videos and Trailers: Add the ability to watch videos and trailers of games directly in the system, providing users with a preview of the games.

- Achievements and Trophies System: Create an achievements and trophies system for users to unlock by completing certain goals within the games.

- Integration of Third-Party APIs: Integrate third-party APIs, such as game analytics APIs, to provide additional information and insights about the games listed in the catalog.

- Multi-Language Support: Add support for multiple languages to make the system accessible to a wider range of users around the world.

- Wishlist Functionality: Allow users to create wishlists to track the games they want to buy or play in the future.

- User Profile Customization: Enable users to customize their profiles with pictures, personal information, and game preferences.

- Dark Mode: Implement a dark mode to provide a more comfortable viewing option in low-light environments.

## License
This project is licensed under the MIT License.
