import React from 'react';
import styles from './MovieCard.module.scss';
import Svg from "../../../components/Svg/Svg";
import {iconStar} from "../../../assets/svg/svg";
import {Link} from "react-router-dom";
import getSlugFromTitle from "../../../utils/getSlugFromTitle";

const starsArray = [1, 2, 3, 4, 5];

const  MovieCard = ({movie}) => {

    return (
        <Link
            className={styles.root}
            to={`/movie/${movie.imdbID}/details/${getSlugFromTitle(movie.Title)}`}
        >
            <img
                alt={movie.title}
                className={styles.img}
                src={movie.Poster}
            />
            <div className={styles.year}>
                {movie.Year}
            </div>
            <div className={styles.rating}>
                {starsArray.map(index => (
                    <Svg
                        key={index}
                        className={styles.svg}
                        icon={iconStar}
                        size={1.6}
                    />
                ))}
            </div>

            <div className={styles.title}>
                {movie.Title}
            </div>
        </Link>
    );
}

export default MovieCard;