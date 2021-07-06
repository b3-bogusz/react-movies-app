import React from 'react';
import styles from './MovieCard.module.scss';
import Svg from "../../../components/Svg/Svg";
import {iconStar} from "../../../assets/svg/svg";

const starsArray = [1, 2, 3, 4, 5];

const  MovieCard = ({movie}) => {

    return (
        <div className={styles.root}>
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
        </div>
    );
}

export default MovieCard;