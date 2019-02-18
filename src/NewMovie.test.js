import React from 'react';
import { render, cleanup } from 'react-testing-library';
import NewMovie from './NewMovie';

afterEach(cleanup);

test('<NewMovie />', () => {
  const { debug, getByTestId, queryByTestId, container } = render(<NewMovie />);
  const newMovie = getByTestId('new-movie');

  debug();

  expect(newMovie.textContent).toBe('New Movie');
  expect(queryByTestId('movie-form')).toBeTruthy();

  // Creates Snapshot and expects it to always stay the same
  expect(container.firstChild).toMatchSnapshot();
});
