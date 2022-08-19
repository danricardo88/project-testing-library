import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemons } from '../pages';

describe('Teste o componente <FavoritePokemons.js />', () => {
  test('se é exibida na tela a mensagem "No favorite pokemon found"', () => {
    renderWithRouter(<FavoritePokemons />);
    const favoritesText = screen.getByText(/No favorite pokemon found/i);
    expect(favoritesText).toBeInTheDocument();
  });

  // test('se são exibidos todos os cards de pokémons favoritados', () => {
  //   const { history } = renderWithRouter(<FavoritePokemons />);
  // });
});
