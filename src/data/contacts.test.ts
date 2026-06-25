import { describe, expect, it } from 'vitest';
import { contacts } from './contacts';

describe('Telegram contact flow', () => {
  it('uses the activated Telegram bot start link while Business link is not active', () => {
    expect(contacts.telegramBusinessLink).toBe('TODO_TELEGRAM_BUSINESS_LINK');
    expect(contacts.telegramBotUsername).toBe('YegineUnanyanBot');
    expect(contacts.telegramBotStartLink).toBe('https://t.me/YegineUnanyanBot?start=site');
    expect(contacts.telegram.mode).toBe('bot');
    expect(contacts.telegram.href).toBe('https://t.me/YegineUnanyanBot?start=site');
    expect(contacts.telegram.ctaLabel).toBe('Записаться через Telegram-бота');
    expect(contacts.telegram.showHint).toBe(true);
  });
});

describe('contacts data', () => {
  it('exports a contacts object with telegram, max, and vk entries', () => {
    expect(contacts).toHaveProperty('telegram');
    expect(contacts).toHaveProperty('max');
    expect(contacts).toHaveProperty('vk');
  });

  it('telegram entry has label and href', () => {
    expect(contacts.telegram.label).toBe('Telegram');
    expect(typeof contacts.telegram.href).toBe('string');
    expect(contacts.telegram.href.length).toBeGreaterThan(0);
  });

  it('max entry has label, phoneLabel, and href', () => {
    expect(contacts.max.label).toBe('MAX');
    expect(contacts.max.phoneLabel).toBe('+7 904 084 4777');
    expect(contacts.max.href).toBe('tel:+79040844777');
  });

  it('vk entry has label and href', () => {
    expect(contacts.vk.label).toBe('VK');
    expect(typeof contacts.vk.href).toBe('string');
    expect(contacts.vk.href.length).toBeGreaterThan(0);
  });

  it('exports firstMessage as a non-empty string', () => {
    expect(typeof contacts.firstMessage).toBe('string');
    expect(contacts.firstMessage.length).toBeGreaterThan(0);
  });

  it('max href uses tel: protocol', () => {
    expect(contacts.max.href).toMatch(/^tel:/);
  });
});
