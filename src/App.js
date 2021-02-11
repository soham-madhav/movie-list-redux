import React from 'react';
import './App.css';

import MovieList from './components/MovieList';
import SelectedMovieDetails from './components/SelectedMovieDetails';


function App() {
  return (
    <div className="App">
      <div>
        <MovieList />
      </div>
      <div>
        <SelectedMovieDetails />
      </div>
    </div>
  );
}

export default App;
