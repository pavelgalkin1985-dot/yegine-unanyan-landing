import { render, screen } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import App from './App';
import { specialist, navItems, heroFacts } from './data/siteContent';
import { contacts } from './data/contacts';

describe('App', () => {
  afterEach(() => {
    cleanup();
  });

  it('renders the site header with brand name', () => {
    render(<App />);

    const brandElements = screen.getAllByText(specialist.shortName);
    expect(brandElements.length).toBeGreaterThanOrEqual(1);
  });

  it('renders navigation items', () => {
    render(<App />);

    navItems.forEach((item) => {
      const links = screen.getAllByText(item.label);
      expect(links.length).toBeGreaterThan(0);
    });
  });

  it('renders hero section with specialist name and role', () => {
    render(<App />);

    expect(screen.getByText(specialist.fullName)).toBeInTheDocument();
    const roleElements = screen.getAllByText(specialist.role);
    expect(roleElements.length).toBeGreaterThanOrEqual(1);
  });

  it('renders hero facts', () => {
    render(<App />);

    heroFacts.forEach((fact) => {
      const elements = screen.getAllByText(fact);
      expect(elements.length).toBeGreaterThanOrEqual(1);
    });
  });

  it('renders hero CTA buttons', () => {
    render(<App />);

    expect(screen.getByText('Начать конфиденциальный диалог')).toBeInTheDocument();
    expect(screen.getByText('Узнать, с чем можно обратиться')).toBeInTheDocument();
  });

  it('renders the about section', () => {
    render(<App />);

    const aboutElements = screen.getAllByText('Обо мне');
    expect(aboutElements.length).toBeGreaterThanOrEqual(1);
  });

  it('renders the requests section', () => {
    render(<App />);

    expect(screen.getByText('С какими запросами я работаю')).toBeInTheDocument();
  });

  it('renders trust section', () => {
    render(<App />);

    expect(screen.getByText('Почему выбирают меня?')).toBeInTheDocument();
  });

  it('renders documents section', () => {
    render(<App />);

    expect(screen.getByText('Образование и профессиональная подготовка')).toBeInTheDocument();
  });

  it('renders formats section', () => {
    render(<App />);

    expect(screen.getByText('Формат подбирается после первого контакта')).toBeInTheDocument();
  });

  it('renders video placeholder section', () => {
    render(<App />);

    expect(screen.getByText('Видеоотзыв пациента')).toBeInTheDocument();
  });

  it('renders reviews section', () => {
    render(<App />);

    expect(screen.getByText('Отзывы пациентов')).toBeInTheDocument();
  });

  it('renders safety section', () => {
    render(<App />);

    expect(screen.getByText('Конфиденциальность и безопасное пространство')).toBeInTheDocument();
  });

  it('renders preparation steps section', () => {
    render(<App />);

    expect(screen.getByText('Как подготовиться')).toBeInTheDocument();
  });

  it('renders policy section', () => {
    render(<App />);

    expect(screen.getByText('Запись, перенос и отмена')).toBeInTheDocument();
  });

  it('renders final CTA section with contact buttons', () => {
    render(<App />);

    expect(screen.getByText('Сделайте первый шаг к решению проблемы уже сегодня')).toBeInTheDocument();
  });

  it('renders first message hint', () => {
    render(<App />);

    expect(screen.getByText(contacts.firstMessage)).toBeInTheDocument();
  });

  it('renders footer with brand and role', () => {
    render(<App />);

    const roleElements = screen.getAllByText(specialist.role);
    expect(roleElements.length).toBeGreaterThanOrEqual(2);
  });

  it('renders mobile sticky CTA', () => {
    render(<App />);

    expect(screen.getByText('Написать Егине Левоновне')).toBeInTheDocument();
  });

  it('renders header CTA linking to Telegram', () => {
    render(<App />);

    const headerCta = screen.getByText('Написать');
    expect(headerCta.closest('a')).toHaveAttribute('href', contacts.telegram.href);
  });
});
