import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('renders the email', () => {
    render(<Footer />);
    const emailElement = screen.getByText(/mgmedicallaboratory96@gmail.com/i);
    expect(emailElement).toBeInTheDocument();
  });
});
