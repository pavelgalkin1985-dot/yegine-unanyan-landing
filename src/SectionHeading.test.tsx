import { render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { SectionHeading } from './App';

describe('SectionHeading', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders eyebrow text', () => {
    render(<SectionHeading eyebrow="Test Eyebrow" title="Test Title" />);

    expect(screen.getByText('Test Eyebrow')).toBeInTheDocument();
    expect(screen.getByText('Test Eyebrow')).toHaveClass('eyebrow');
  });

  it('renders title as h2', () => {
    render(<SectionHeading eyebrow="Eyebrow" title="My Title" />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('My Title');
  });

  it('renders optional text paragraph when provided', () => {
    render(<SectionHeading eyebrow="E" title="T" text="Description text" />);

    expect(screen.getByText('Description text')).toBeInTheDocument();
  });

  it('does not render text paragraph when text is omitted', () => {
    const { container } = render(<SectionHeading eyebrow="E" title="T" />);

    const paragraphs = container.querySelectorAll('.section-heading p');
    expect(paragraphs).toHaveLength(1);
  });

  it('wraps content in section-heading div', () => {
    const { container } = render(<SectionHeading eyebrow="E" title="T" />);

    expect(container.querySelector('.section-heading')).toBeInTheDocument();
  });
});
