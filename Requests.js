//const API_KEY="b3e6a52b52202bb2ee0edc30022a8201";
const requests = {
 fetchTrending: "/trending/all/week?api_key=b3e6a52b52202bb2ee0edc30022a8201&language=en-US", 
    fetchNetflixOriginals: "/discover/tv?api_key=b3e6a52b52202bb2ee0edc30022a8201&with_networks=213", 
fetchTopRated: "/movie/top_rated?api_key=b3e6a52b52202bb2ee0edc30022a8201&language=en-US", 
fetchActionMovies: "/discover/movie?api_key=b3e6a52b52202bb2ee0edc30022a8201&with_genres=28",
fetchComedyMovies: "/discover/movie?api_key=b3e6a52b52202bb2ee0edc30022a8201&with_genres=35",
fetchHorrorMovies: "/discover/movie?api_key=b3e6a52b52202bb2ee0edc30022a8201&with_genres=27",
    fetchRomanceMovies: "/discover/movie?api_key=b3e6a52b52202bb2ee0edc30022a8201&with_genres=10749",
fetchDocumentaries: "/discover/movie?api_key=b3e6a52b52202bb2ee0edc30022a8201&with_genres=99"
};
export default requests;
