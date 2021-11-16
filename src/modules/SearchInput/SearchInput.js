import React, { useState } from 'react';
import { connect } from "react-redux";
import styles from './SearchInput.module.scss';
import {
    setSearchedMovies,
    setLastSearchedQuery,
    setPageNumber,
    setTotalResults
} from "../../store/reducers/appSlice/appSlice";
import Svg from "../../components/Svg/Svg";
import {iconSearch} from "../../assets/svg/svg";
import {setIsLoading} from "../../store/reducers/globalSlice/globalSlice";
import getMoviesWithQueryAndPage from "../../utils/getMoviesWithQueryAndPage";

const SearchInput = ({
    pageNumber,
    setSearchedMoviesAction,
    setLastSearchedQueryAction,
    setPageNumberAction,
    setIsLoadingAction,
    setTotalResultsAction,
}) => {
    const [searchTerm, setSearchTerm] = useState('');

    const onChange = e => {
        setSearchTerm(e.target.value);
    }

    const onSubmit = async e => {
        e.preventDefault();

        if (!searchTerm) {
            return
        }

        setIsLoadingAction(true)
        setLastSearchedQueryAction(searchTerm);
        setPageNumberAction(1)

        await getMoviesWithQueryAndPage(searchTerm, pageNumber)
            .then(({
                data: {
                   Search,
            }}) => setSearchedMoviesAction(Search))
            .finally(() => {
                setSearchTerm('');
                setIsLoadingAction(false)
            })
    };

    return (
        <form
            className={styles.root}
            onSubmit={onSubmit}
        >
            <Svg
                className={styles.svg}
                icon={iconSearch}
                size={1.3}
            />
            <input
                type="text"
                name="Search input"
                value={searchTerm}
                placeholder="Search movies"
                onChange={onChange}
                className={styles.input}
            />
        </form>
    );
}

const mapStateToProps = ({
    app,
}) => ({
    pageNumber: app.pageNumber,
})

const mapsDispatchToProps = {
    setIsLoadingAction: setIsLoading,
    setSearchedMoviesAction: setSearchedMovies,
    setLastSearchedQueryAction: setLastSearchedQuery,
    setPageNumberAction: setPageNumber,
    setTotalResultsAction: setTotalResults,
}

export default connect(mapStateToProps, mapsDispatchToProps)(SearchInput);