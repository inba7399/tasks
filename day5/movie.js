class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title
        this.studio = studio
        this.rating = rating
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

const movies = [
    new Movie("ironman", "fox", "PG"),
    new Movie("ring", "fox", "PG-18"),
    new Movie("ice age", "disny",),
    new Movie("iron man2", "fox", "PG"),
];

const pgMovies = Movie.getPG(movies);
console.log(casinoRoyale)
console.log(pgMovies);