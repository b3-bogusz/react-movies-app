import React from 'react';
import styles from './GlobalLoader.module.scss'
import Loader from "../../components/Loader/Loader";
import {connect} from "react-redux";


const GlobalLoader = ({
    isLoading,
 }) => {

    if (!isLoading) {
        return false
    }

    return (
        <div className={styles.root}>
            <Loader size={5}/>
        </div>
    );
}

const mapStateToProps = ({
    global,
}) => ({
    isLoading: global.isLoading,
})

export default connect(mapStateToProps, null)(GlobalLoader);