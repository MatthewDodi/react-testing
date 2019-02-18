import React, { Component } from 'react';
import MovieForm from './MovieForm';

class NewMovie extends Component {
  render() {
    return (
      <div>
        <h2 data-testid="new-movie">New Movie</h2>
        <MovieForm />
      </div>
    );
  }
}

export default NewMovie;
