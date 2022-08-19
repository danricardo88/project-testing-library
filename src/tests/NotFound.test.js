import React from 'react';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';

describe(' Teste o componente <NotFound.js />', () => {
  test('se a página contém um heading h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const h2Not = screen
      .getByRole('heading', { name: /Page requested not found/i, level: 2 });
    expect(h2Not).toBeInTheDocument();
  });

  test('Teste se a página mostra a imagem', () => {
    renderWithRouter(<NotFound />);
    const imgNot = screen
      .getByAltText(/Pikachu crying because the page requested was not found/i);
    expect(imgNot).toBeInTheDocument();

    const linkImg = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    expect(imgNot.src).toBe(linkImg);
  });
});
