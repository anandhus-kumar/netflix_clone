const API = '12a950bffe1b968402921b8700d90370'

const request = {
    requestUpcomming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${API}&language=en-US&page=1`,
    requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API}&language=en-US&page=1`,
    requestTrending:`https://api.themoviedb.org/3/trending/all/day?api_key=${API}&language=en-US`,
    requestToprated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${API}&language=en-US&page=1`,
    requestThriller:`https://api.themoviedb.org/3/search/movie?api_key=${API}&query=thriller&include_adult=false&language=en-US&page=1`
}


export default request;