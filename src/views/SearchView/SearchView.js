import React, { useEffect } from 'react';
import { connect } from "react-redux";
import styles from './SearchView.module.scss'
import TopBar from "../../modules/TopBar/TopBar";
import MoviesList from "../../modules/MoviesList/MoviesList";
import Svg from "../../components/Svg/Svg";
import { setSearchedMovies, setPageNumber } from "../../store/reducers/appSlice/appSlice";
import { setIsLoading } from "../../store/reducers/globalSlice/globalSlice";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../components/Loader/Loader";
import {iconSearch} from "../../assets/svg/svg";
import getMoviesWithQueryAndPage from "../../utils/getMoviesWithQueryAndPage";

const SearchView = ({
    setSearchedMoviesAction,
    query,
    movies,
    pageNumber,
    setIsLoadingAction,
    setPageNumberAction,
}) => {
    if (!movies) {
        setIsLoadingAction(true)
    }

    useEffect(() => {
        if(!movies || movies.length === 0) {
            (async () => {
                await getMoviesWithQueryAndPage(query, pageNumber)
                    .then(({
                        data: {
                            Search,
                        }
                    }) => setSearchedMoviesAction(Search))
                    .finally(() => {
                        setPageNumberAction(pageNumber + 1)
                        setIsLoadingAction(false)
                    })
            })();
        }
    }, [ // eslint-disable-line react-hooks/exhaustive-deps
        setIsLoadingAction,
        setPageNumberAction,
        setSearchedMoviesAction,
    ]);

    const fetchMoreData = async () => {
        setPageNumberAction(pageNumber + 1)
        await getMoviesWithQueryAndPage(query, pageNumber)
            .then(({
                data: {
                    Search,
                }
            }) => setSearchedMoviesAction([...movies, ...Search]))
    }

    return (
        <div className={styles.root}>
            <TopBar />
            {movies ? (
                <InfiniteScroll
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<Loader size={4}/>}
                    dataLength={movies.length}
                >
                    <MoviesList movies={movies}/>
                </InfiniteScroll>
            ) : (
                <div className={styles.empty}>
                    <Svg icon={iconSearch} size={5} className={styles.svg}/>
                    <div>
                        No movies found under this query. Try again with another one!!!
                    </div>
                </div>
            )}
        </div>
    );
}

const mapStateToProps = ({
    app,
}) => ({
    query: app.query,
    movies: app.movies,
    pageNumber: app.pageNumber,
})

const mapsDispatchToProps = {
    setSearchedMoviesAction: setSearchedMovies,
    setIsLoadingAction: setIsLoading,
    setPageNumberAction: setPageNumber,
}

export default connect(mapStateToProps, mapsDispatchToProps)(SearchView);