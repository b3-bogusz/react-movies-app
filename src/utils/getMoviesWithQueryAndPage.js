import api from "../services/api";

const getMoviesWithQueryAndPage = (query, page) => {
    return api.get('', {
        params: {
            s: query,
            type: 'movie',
            page,
        }
    })
}

export default getMoviesWithQueryAndPage;
