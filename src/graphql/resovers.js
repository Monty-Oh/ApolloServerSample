import movies from "../database/movies";

const resolvers = {
    Query: {
        movies: () => movies,
        movie: (_, { id }) => {
            return movies.filter((movie) => movie.id === id)[0];
        }
    },
    Mutation: {
        addMovie: (_, { name, rating }) => {
            if (movies.find(movie => movie.name === name)) return null;
        }
    }
}