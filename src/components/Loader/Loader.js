import React from 'react';
import styles from './Loader.module.scss';

const Loader = ({
    size,
    }) => {

    return (
        <div className={styles.root}>
            <div
                className={styles.spinner}
                style={{
                    width: `${size}rem`,
                    height: `${size}rem`,
                }}
            />
            <p className={styles.text}>
                Loading. Please wait...
            </p>
        </div>
    );
}

export default Loader;