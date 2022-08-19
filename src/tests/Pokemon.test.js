import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokemon.js />', () => {
  test('O tipo correto do pokémon deve ser mostrado na tela', () => {
    renderWithRouter(<App />);
    const pokemon = screen.getByTestId('pokemon-type');
    expect(pokemon).toHaveTextContent('Electric');
  });

  test('A imagem do pokémon deve ser exibida', () => {
    renderWithRouter(<App />);
    const imgLink = 'https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png';
    const imgPokemon = screen.getByRole('img', { name: /Pikachu sprite/i });
    expect(imgPokemon).toBeInTheDocument();
    expect(imgPokemon).toHaveAttribute('src', imgLink);
    expect(imgPokemon).toHaveAttribute('alt', 'Pikachu sprite');
  });

  test('redireciona para details ao clicar', () => {
    const { history } = renderWithRouter(<App />);
    const details = screen.getByText(/More details/i);
    userEvent.click(details);
    const { pathname } = history.location;
    expect(pathname).toBe('/pokemons/25');
  });

  test('ao clicar no link do pokémon, redireciona a aplicação para detalhes pok', () => {
    renderWithRouter(<App />);
    const details = screen.getByText(/More details/i);
    expect(details).toBeDefined();
    expect(details).toHaveAttribute('href', '/pokemons/25');
  });

  test(' existe um ícone de estrela nos pokémons favoritados:', () => {
    renderWithRouter(<App />);
    const details = screen.getByText(/More details/i);
    userEvent.click(details);

    const pokFav = screen.getByLabelText(/favoritado/i);
    expect(pokFav).toBeDefined();
    userEvent.click(pokFav);

    const imgPok = '/star-icon.svg';
    const detailsPok = /Pikachu is marked as favorite/i;
    const myPok = screen.getByAltText(detailsPok);

    expect(pokFav).toBeDefined();
    expect(myPok).toHaveAttribute('src', imgPok);
  });
});
