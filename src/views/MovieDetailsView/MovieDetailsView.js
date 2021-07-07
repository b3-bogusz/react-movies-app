import React, {useEffect} from 'react';
import api from '../../services/api';
import { setMovieDetails } from "../../store/reducers/movieDetailsSlice/movieDetailsSlice";
import {connect} from "react-redux";
import { useParams } from 'react-router-dom';
import {setIsLoading} from "../../store/reducers/globalSlice/globalSlice";

const MovieDetailsView = ({
    movieDetails,
    setMovieDetailsAction,
    setIsLoadingAction,
}) => {

    const { id } = useParams();

    useEffect(() => {
        if (id !== (movieDetails && movieDetails.imdbID)) {
            (async () => {
                setIsLoadingAction(true)
                await api.get('', {
                    params: {
                        i: id,
                        type: 'movie',
                    }
                }).then(({
                    data,
                }) => setMovieDetailsAction(data))
                .finally(() => setIsLoadingAction(false))
            })()
        }
    }, [])

    return (
        <div>Movie Details</div>
    );
}

const mapStateToProps = ({
   movieDetails,
}) => ({
    movieDetails: movieDetails.movieDetails,
})

const mapsDispatchToProps = {
    setMovieDetailsAction: setMovieDetails,
    setIsLoadingAction: setIsLoading,
}

export default connect(mapStateToProps, mapsDispatchToProps)(MovieDetailsView);
