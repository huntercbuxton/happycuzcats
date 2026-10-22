import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the main heading', () => {
    render(<App />); 
    // Checks if the component renders successfully
    expect(screen.getByRole('heading')).toBeInTheDocument();
  }); 
});