import React from 'react';
import { renderToString } from 'react-dom/server';
import { performance } from 'perf_hooks';

const testimonials = [
  {
    source: 'Пациент, ПроДокторов',
    text: 'Пациент отмечает неравнодушие врача, быстрое включение в ситуацию и помощь с дальнейшим маршрутом.',
    href: 'https://prodoctorov.ru/moskva/vrach/900369-unanyan/',
  },
  {
    source: 'Пациент, ПроДокторов',
    text: 'В отзыве выделены профессионализм, чуткое отношение и подробное объяснение важности терапии.',
    href: 'https://prodoctorov.ru/moskva/vrach/900369-unanyan/',
  },
  {
    source: 'Пациент, ПроДокторов',
    text: 'Пациент пишет о доброжелательности, понятных рекомендациях и внимательном отношении на приеме.',
    href: 'https://prodoctorov.ru/moskva/vrach/900369-unanyan/',
  },
];

const largeTestimonials = [];
for (let i = 0; i < 10000; i++) {
    largeTestimonials.push(...testimonials);
}

function renderWithStringKey() {
    return React.createElement('div', { className: 'review-grid' },
        largeTestimonials.map((item, i) => React.createElement('article', { key: item.text + i, className: 'review-card' },
            React.createElement('span', null, item.source),
            React.createElement('p', null, item.text),
            React.createElement('a', { href: item.href }, 'Источник')
        ))
    );
}

function renderWithIndexKey() {
    return React.createElement('div', { className: 'review-grid' },
        largeTestimonials.map((item, index) => React.createElement('article', { key: index, className: 'review-card' },
            React.createElement('span', null, item.source),
            React.createElement('p', null, item.text),
            React.createElement('a', { href: item.href }, 'Источник')
        ))
    );
}

function measure(fn, name) {
    const start = performance.now();
    for (let i = 0; i < 5; i++) {
        renderToString(fn());
    }
    const end = performance.now();
    console.log(`${name}: ${end - start} ms`);
}

// Warmup
renderToString(renderWithStringKey());
renderToString(renderWithIndexKey());

measure(renderWithStringKey, 'String Key');
measure(renderWithIndexKey, 'Index Key');
