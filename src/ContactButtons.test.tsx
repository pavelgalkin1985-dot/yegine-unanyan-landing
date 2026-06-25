import { render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import { ContactButtons } from './App';
import { contacts } from './data/contacts';

describe('ContactButtons', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders Telegram, MAX, and VK buttons', () => {
    render(<ContactButtons />);

    expect(screen.getByText('Написать в Telegram')).toBeInTheDocument();
    expect(screen.getByText('Написать в MAX')).toBeInTheDocument();
    expect(screen.getByText('VK')).toBeInTheDocument();
  });

  it('links Telegram button to contacts.telegram.href', () => {
    render(<ContactButtons />);

    const telegramLink = screen.getByText('Написать в Telegram').closest('a');
    expect(telegramLink).toHaveAttribute('href', contacts.telegram.href);
    expect(telegramLink).toHaveAttribute('target', '_blank');
    expect(telegramLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  it('links MAX button to contacts.max.href', () => {
    render(<ContactButtons />);

    const maxLink = screen.getByText('Написать в MAX').closest('a');
    expect(maxLink).toHaveAttribute('href', contacts.max.href);
  });

  it('links VK button to contacts.vk.href', () => {
    render(<ContactButtons />);

    const vkLink = screen.getByText('VK').closest('a');
    expect(vkLink).toHaveAttribute('href', contacts.vk.href);
    expect(vkLink).toHaveAttribute('target', '_blank');
  });

  it('displays phone label from contacts.max', () => {
    render(<ContactButtons />);

    expect(screen.getByText(contacts.max.phoneLabel)).toBeInTheDocument();
  });

  it('applies primary class to Telegram button', () => {
    render(<ContactButtons />);

    const telegramLink = screen.getByText('Написать в Telegram');
    expect(telegramLink).toHaveClass('button', 'button--primary');
  });

  it('applies ghost class to VK button', () => {
    render(<ContactButtons />);

    const vkLink = screen.getByText('VK');
    expect(vkLink).toHaveClass('button', 'button--ghost');
  });

  it('renders without compact class by default', () => {
    const { container } = render(<ContactButtons />);

    const actions = container.querySelector('.contact-actions');
    expect(actions).toBeInTheDocument();
    expect(actions).not.toHaveClass('contact-actions--compact');
  });

  it('renders with compact class when compact prop is true', () => {
    const { container } = render(<ContactButtons compact />);

    const actions = container.querySelector('.contact-actions');
    expect(actions).toBeInTheDocument();
    expect(actions).toHaveClass('contact-actions', 'contact-actions--compact');
  });
});
