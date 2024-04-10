import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Canonical Blog Posts heading', () => {
  render(<App />);
  const linkElement = screen.getByText('Canonical Blog Posts');
  expect(linkElement).toBeInTheDocument();
});

test('renders initial Loading state', () => {
  render(<App />);
  const linkElement = screen.getByText('Loading')
  expect(linkElement).toBeInTheDocument();
});


