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
