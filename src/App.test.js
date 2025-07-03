import { render, screen } from '@testing-library/react';
import App from './App';

test("renders quinceañera heading", () => {
  render(<App />);
  const headingElement = screen.getByText(/alondra's quinceañera/i);
  expect(headingElement).toBeInTheDocument();
});
