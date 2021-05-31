const Api_key = "4d633f0fc2d623a0669edf0cd7302b70";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${Api_key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${Api_key}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${Api_key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${Api_key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${Api_key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${Api_key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${Api_key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${Api_key}&with_genres=99`,
}

export default requests;