import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from '../App';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('App component', () => {
  test('Shows a random quote', async () => {
    const fakeResponse = [
      {
        quote:
          'Human history becomes more and more a race between education and catastrophe.',
        author: 'H. G. Wells',
        category: 'Famous'
      }
    ];

    jest.spyOn(window, 'fetch').mockImplementation(() => {
      const fetchResponse = {
        json: () => Promise.resolve(fakeResponse)
      };
      return Promise.resolve(fetchResponse);
    });

    await act(async () => {
      render(<App />, container);
    });

    expect(container.textContent).toBe(
      ' Human history becomes more and more a race between education and catastrophe.- H. G. Wells New Quoteby TSMarques'
    );

    window.fetch.mockRestore();
  });
});
