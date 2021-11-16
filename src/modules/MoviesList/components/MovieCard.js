import React from 'react';
import styles from './MovieCard.module.scss';
import Svg from "../../../components/Svg/Svg";
import {iconStar} from "../../../assets/svg/svg";
import {Link} from "react-router-dom";
import getSlugFromTitle from "../../../utils/getSlugFromTitle";

const starsArray = [1, 2, 3, 4, 5];

const  MovieCard = ({
   id,
   posterUrl,
   title,
   year
}) => (
        <Link
            className={styles.root}
            to={`/movie/${id}/details/${getSlugFromTitle(title)}`}
        >
            <img
                className={styles.image}
                loading="lazy"
                src={posterUrl}
                alt={title}
            />
            <div className={styles.year}>
                {year}
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
                {title}
            </div>
        </Link>
)

export default MovieCard;