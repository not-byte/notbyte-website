import { render, screen } from '@testing-library/react';
import Footer from './index';
import '@testing-library/jest-dom';
import assert from 'node:assert';
import { describe, it } from '@jest/globals';


describe('Footer Component', () => {
  it('renders About Us section', () => {
    render(<Footer />);
    assert(screen.getByText(/About Us/i));
  });

  it('displays correct contact info', () => {
    render(<Footer />);
    assert(screen.getByText('+48 797 477 825'));
    assert(screen.getByText('info@notbyte.com'));
  });

  it('has working social media links', () => {
    render(<Footer />);
    const instagramLink = screen.getByRole('link', { name: /instagram/i });
    assert(instagramLink.getAttribute('href') === 'https://www.instagram.com/not_byte/');
  });
});
