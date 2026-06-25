import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FramedImage } from './App';
import { images } from './data/siteContent';

import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

describe('FramedImage', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders correctly with a valid image key', () => {
    render(<FramedImage image="about" />);

    const figure = screen.getByRole('figure');
    expect(figure).toBeInTheDocument();

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('alt', images.about.alt);
    expect(img.getAttribute('src')).toContain(images.about.src);
  });

  it('applies custom className correctly', () => {
    render(<FramedImage image="about" className="custom-class" />);

    const figure = screen.getByRole('figure');
    expect(figure).toHaveClass('image-frame');
    expect(figure).toHaveClass('custom-class');
  });

  it('sets loading="eager" when image is "hero"', () => {
    render(<FramedImage image="hero" />);

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('loading', 'eager');
  });

  it('sets loading="lazy" when image is not "hero"', () => {
    render(<FramedImage image="about" />);

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('loading', 'lazy');
  });

  it('handles empty className gracefully', () => {
    render(<FramedImage image="about" className="" />);

    const figure = screen.getByRole('figure');
    expect(figure.className).toBe('image-frame');
  });
});
