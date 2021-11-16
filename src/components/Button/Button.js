import React from 'react';
import styles from './Button.module.scss';

const Button = ({ color, children }) => {
    return (
        <div className={styles.root}>
            <div
                className={styles.button}
                style={{
                    color,
                }}>
                {children}
            </div>
        </div>
    )
}

export default Button;