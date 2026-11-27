import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  it('renders the page header and main elements', () => {
    render(<App />);  
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  }); 
});