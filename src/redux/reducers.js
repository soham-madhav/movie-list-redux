import { combineReducers } from 'redux';

const moviesReducer = () => {
    return [
        {
            id: 1,
            movie_name: "Lion King",
            movie_img: "../movie-imgs/lion-king.jpg",
            movie_release: "11 January 2000",
            director: "Jon Favreau",
            genre: "Animation, Adventure, Drama",
            summary:`After the murder of his father, a young lion prince flees 
                    his kingdom only to learn the true meaning of responsibility and bravery.`
        },
        {
            id: 2,
            movie_name: "Frozen",
            movie_img: "../movie-imgs/frozen.jpg",
            movie_release: "20 April 2013",
            director: "Chris Buck, Jennifer Lee",
            genre: "Animation, Adventure, Comedy",
            summary:`When the newly crowned Queen Elsa accidentally uses her power to turn 
                    things into ice to curse her home in infinite winter, her sister Anna 
                    teams up with a mountain man, his playful reindeer, 
                    and a snowman to change the weather condition.`
        },
        {
            id: 3,
            movie_name: "Piper",
            movie_img: "../movie-imgs/piper.jpg",
            movie_release: "5 September 2015",
            director: "Alan Barillaro",
            genre: "Animation, Short, Family",
            summary:`A hungry sandpiper hatchling ventures from her nest for the first time to dig for 
                    food by the shoreline. The problem is, 
                    the food is buried in the sand where scary waves roll up.`
        },
        {
            id: 4,
            movie_name: "Zootopia",
            movie_img: "../movie-imgs/zootopia.jpg",
            movie_release: "5 April 2016",
            director: "Byron Howard, Rich Moore ",
            genre: "Animation, Adventure, Comedy",
            summary:`In a city of anthropomorphic animals, a rookie bunny cop
                    and a cynical con artist fox must work together to uncover a conspiracy.`
        }
    ]
}




const selectedMovieReducer = (state=null, action) => {
    switch(action.type){
        case 'SELECT_MOVIE':
            return action.payload
        default:
            return state    
    }
} 



const rootReducer = combineReducers({
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer
})


export default rootReducer;