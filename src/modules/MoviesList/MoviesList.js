import React from 'react';
import styles from './MoiviesList.module.scss';
import MovieCard from "./components/MovieCard";

const MoviesList = ({ movies }) => {
    if (!movies) {
        return null;
    }

    const renderedList = movies.map((movie) => {
        return (
            <MovieCard
                key={movie.imdbID}
                id={movie.imdbID}
                posterUrl={movie.Poster}
                title={movie.Title}
                year={movie.Year}
            />
        )
    });

    return (
        <div className={styles.root}>
            {renderedList}
        </div>
    );
}

export default MoviesList;