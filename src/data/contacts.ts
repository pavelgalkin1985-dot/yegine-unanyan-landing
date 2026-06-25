const firstMessage =
  'Здравствуйте, Егине Левоновна! Я перешёл(ла) с вашего сайта и хочу записаться на первичную консультацию. Предпочтительный формат: онлайн / офлайн. Подскажите, пожалуйста, ближайшее свободное время.';

const telegramBusinessLink = 'TODO_TELEGRAM_BUSINESS_LINK';
const telegramBotUsername = 'TODO_TELEGRAM_BOT_USERNAME';
const telegramFallbackLink = 'TODO_YEGINE_TELEGRAM_LINK';

const isRealValue = (value: string) => value.length > 0 && !value.startsWith('TODO_');
const normalizedBotUsername = telegramBotUsername.replace(/^@/, '');
const telegramBotStartLink = isRealValue(telegramBotUsername)
  ? `https://t.me/${normalizedBotUsername}?start=site`
  : 'https://t.me/TODO_TELEGRAM_BOT_USERNAME?start=site';

const telegramContact = (() => {
  if (isRealValue(telegramBusinessLink)) {
    return {
      mode: 'business' as const,
      href: telegramBusinessLink,
      ctaLabel: 'Написать готовое сообщение',
      compactLabel: 'Написать',
      hint: 'Сообщение уже подготовлено — останется только проверить и отправить.',
      showHint: true,
    };
  }

  if (isRealValue(telegramBotUsername)) {
    return {
      mode: 'bot' as const,
      href: telegramBotStartLink,
      ctaLabel: 'Записаться через Telegram-бота',
      compactLabel: 'Записаться',
      hint: 'Бот поможет выбрать формат консультации и оставить заявку.',
      showHint: true,
    };
  }

  return {
    mode: 'todo' as const,
    href: telegramFallbackLink,
    ctaLabel: 'Написать в Telegram',
    compactLabel: 'Написать',
    hint: '',
    showHint: false,
  };
})();

export const contacts = {
  telegramBusinessLink,
  telegramBotUsername,
  telegramBotStartLink,
  telegram: {
    label: 'Telegram',
    href: telegramContact.href,
    mode: telegramContact.mode,
    ctaLabel: telegramContact.ctaLabel,
    compactLabel: telegramContact.compactLabel,
    hint: telegramContact.hint,
    showHint: telegramContact.showHint,
  },
  max: {
    label: 'MAX',
    phoneLabel: '+7 904 084 4777',
    href: 'tel:+79040844777', // TODO: replace with real MAX personal link / QR / bot link when provided.
  },
  vk: {
    label: 'VK',
    href: 'TODO_YEGINE_VK_LINK',
  },
  firstMessage,
};
