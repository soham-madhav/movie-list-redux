import React from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../redux/actions';

const MovieList = (props) => {

    const movieListItems = props.movies.map(movie => {
        return (
                <div className="movies">
                    <h3>{movie.movie_name}</h3>
                    <img src={movie.movie_img} alt="thumbnail" height='100vh' width='auto' onClick={()=> props.selectMovie(movie)} />
                </div>

                )
        })

    return (
        <div>
            {movieListItems}
        </div>
    )
        
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}


const mapDispatchToProps = {
    selectMovie: selectMovie
}


export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
















