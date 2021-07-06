import React from 'react';
import styles from './App.module.scss';
import { BrowserRouter as Router } from "react-router-dom";
import BaseRoutes from "../../router/routes/BaseRoutes";
import GlobalLoader from "../../modules/GlobalLoader/GlobalLoader";

const App = () => (
    <div className={styles.root}>
        <GlobalLoader />
        <Router>
            <BaseRoutes />
        </Router>
    </div>
);

export default App;
