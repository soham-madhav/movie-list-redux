import React from 'react';
import {connect} from 'react-redux';

const selectedMovieDetails = (props) => {
    if(props.selectedMovie){
        return(
            <div className="movie-details">
                <h3>{props.selectedMovie.movie_name}</h3>
                <div className="movie-details-img">
                    <img src={props.selectedMovie.movie_img} alt="thumbnail" height='300vh' width='auto' />
                </div>
                <div className="movie-details-detail">
                    <h5>
                        Release Date : 
                        {props.selectedMovie.movie_release}
                        <br></br>
                        Director : 
                        {props.selectedMovie.director}
                        <br></br>
                        Genre : 
                        {props.selectedMovie.genre}
                        <br></br>
                        Summary :
                        {props.selectedMovie.summary}
                        <br></br>

                    </h5>
                </div>
            </div>
        )
    }
    else {
        return(
            <div className="movie-details">
                <h3>select a movie yo</h3>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        selectedMovie: state.selectedMovie
    }
}



export default connect(mapStateToProps)(selectedMovieDetails);
