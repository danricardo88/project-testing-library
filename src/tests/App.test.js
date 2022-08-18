import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Teste o componente <App.js />', () => {
  test('O primeiro link deve possuir o texto Home', () => {
    renderWithRouter(<App />);
    const home = screen.getByText(/home/i);
    expect(home).toBeInTheDocument();
  });

  test('é redirecionado para a página inicial, na URL / ao clicar no link Home', () => {
    const { history } = renderWithRouter(<App />);
    const backHome = screen.getByRole('link', { name: /home/i });
    expect(backHome).toBeInTheDocument();
    userEvent.click(backHome);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('O segundo link deve possuir o texto About', () => {
    renderWithRouter(<App />);
    const about = screen.getByText(/about/i);
    expect(about).toBeInTheDocument();
  });

  test('é redirecionado para About, na URL /about, ao clicar no link About', () => {
    const { history } = renderWithRouter(<App />);
    const backAbout = screen.getByRole('link', { name: /about/i });
    expect(backAbout).toBeInTheDocument();
    userEvent.click(backAbout);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  test('O terceiro link deve possuir o texto Favorite Pokémons', () => {
    renderWithRouter(<App />);
    const favorites = screen.getByText(/Favorite Pokémons/i);
    expect(favorites).toBeInTheDocument();
  });

  test('redireciona p/ Pokémons Favoritados, na URL /favorites, ao clicar', () => {
    const { history } = renderWithRouter(<App />);
    const backFavorites = screen.getByRole('link', { name: /Favorite Pokémons/i });
    expect(backFavorites).toBeInTheDocument();
    userEvent.click(backFavorites);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  test('redireciona para a página Not Found ao entrar em uma URL desconhecida.', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/taralala');
    const notFound = screen
      .getByRole('heading', { name: /Page requested not found/i, level: 2 });
    // userEvent.click(notFound);
    expect(notFound).toBeInTheDocument('');
  });
});
