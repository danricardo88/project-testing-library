import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <Pokedex.js />', () => {
  test('a página contém um heading h2 com o texto Encountered pokémons', () => {
    renderWithRouter(<App />);
    const h2Pok = screen
      .getByRole('heading', { name: /Encountered pokémons/i, level: 2 });
    expect(h2Pok).toBeInTheDocument();
  });

  test('O botão deve conter o texto Próximo pokémon;', () => {
    renderWithRouter(<App />);
    const btnNextPok = screen
      .getByRole('button', { name: /Próximo pokémon/i });
    expect(btnNextPok).toBeInTheDocument();
  });

  test('Os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);
    const btnPokType = screen.getAllByTestId(/pokemon-type-button/i);
    const filtro = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
    filtro.forEach((espc, index) => {
      expect(btnPokType[index]).toHaveTextContent(espc);
    });
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro', () => {
    renderWithRouter(<App />);
    const btnAll = screen.getByRole('button', { name: /All/i });
    userEvent.click(btnAll);
    expect(btnAll).toBeInTheDocument();
  });
});
