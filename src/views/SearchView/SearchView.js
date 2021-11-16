import React, { useEffect } from 'react';
import { connect } from "react-redux";
import MoviesList from "../../modules/MoviesList/MoviesList";
import styles from './SearchView.module.scss';
import { setSearchedMovies, setPageNumber, setTotalResults } from "../../store/reducers/appSlice/appSlice";
import { setIsLoading } from "../../store/reducers/globalSlice/globalSlice";
import getMoviesWithQueryAndPage from "../../utils/getMoviesWithQueryAndPage";
import TopBar from "../../modules/TopBar/TopBar";
import TypeHeader from '../../modules/TypeHeader/TypeHeader';
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../components/Loader/Loader";
import Svg from "../../components/Svg/Svg";
import {iconSearch} from "../../assets/svg/svg";

const SearchView = ({
    query,
    movies,
    pageNumber,
    totalResults,
    setSearchedMoviesAction,
    setIsLoadingAction,
    setPageNumberAction,
    setTotalResultsAction
}) => {
    if (!movies && !totalResults) {
        setIsLoadingAction(true)
    }

    useEffect(() => {
        if(!movies || movies.length === 0) {
            (async () => {
                setPageNumberAction(1)
                await getMoviesWithQueryAndPage(query, pageNumber)
                    .then(({
                        data: {
                            Search,
                            totalResults,
                        }
                    }) => {
                        setSearchedMoviesAction(Search)
                        setTotalResultsAction(totalResults)
                    })
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
        if (movies?.length < totalResults) {
            setPageNumberAction(pageNumber + 1)
        }
        await getMoviesWithQueryAndPage(query, pageNumber)
            .then(({
                data: {
                    Search,
                }
            }) => setSearchedMoviesAction([...movies, ...Search]))
    }

    return (
        <>
            <TopBar />
            <div className={styles.root}>
                <TypeHeader
                    title="Your Movies"
                    subtitle="Below you can find the movies that came back from your search"
                />
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
       </>
    );
}

const mapStateToProps = ({
    app,
}) => ({
    query: app.query,
    movies: app.movies,
    pageNumber: app.pageNumber,
    totalResults: app.totalResults,
})

const mapsDispatchToProps = {
    setSearchedMoviesAction: setSearchedMovies,
    setIsLoadingAction: setIsLoading,
    setPageNumberAction: setPageNumber,
    setTotalResultsAction: setTotalResults,
}

export default connect(mapStateToProps, mapsDispatchToProps)(SearchView);