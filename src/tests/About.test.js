import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

describe('Teste o componente <About.js />.', () => {
  test('se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const infoPokedex = screen.getByText(/This application simulates a Pokédex/i);
    expect(infoPokedex).toBeInTheDocument();

    const twoInfoPokedex = screen.getByText(/One can filter Pokémons by type/i);
    expect(twoInfoPokedex).toBeInTheDocument();
  });

  test('se a página contém um heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const h2Text = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
    expect(h2Text).toBeInTheDocument();
  });

  // test('se a página contém dois parágrafos com texto sobre a Pokédex;', () => {
  //   RenderWithRouter(<About />);
  //   const textP2 = screen.getByRole('heading', { name: /About Pokédex/i, level: 2 });
  //   expect().toBeInTheDocument();
  // });

  test('se a página contém a seguinte imagem de uma Pokédex:', () => {
    renderWithRouter(<About />);
    const imgText = screen.getByAltText(/Pokédex/i);
    expect(imgText).toBeInTheDocument();
    const linkImg = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(imgText.src).toBe(linkImg);
  });
});
