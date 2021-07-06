import React from 'react';
import styles from './TopBar.module.scss';
import Logo from "../../components/Logo/Logo";
import SearchInput from "../SearchInput/SearchInput";


const TopBar = () => {
    return (
        <div className={styles.root}>
            <div className={styles.logoWrapper}>
                <Logo />
            </div>
            <div className={styles.searchInputWrapper}>
                <SearchInput />
            </div>
        </div>
    );
}

export default TopBar;