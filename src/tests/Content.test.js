import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Content } from '../Content';

let container = null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('Renders props correctly', () => {
  act(() => {
    const quote = 'Random quote';
    const author = 'Random Author';

    render(
      <Content
        isLoading={false}
        randomColor={'#000'}
        quote={quote}
        author={author}
      />,
      container
    );
  });
  expect(container.textContent).toBe(' Random quote- Random Author New Quote');
});
