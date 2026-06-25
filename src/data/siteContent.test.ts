import { describe, it, expect } from 'vitest';
import {
  aboutParagraphs,
  documentCards,
  formats,
  heroFacts,
  images,
  navItems,
  paymentRules,
  preparationSteps,
  requestCards,
  specialist,
  testimonialSources,
  testimonials,
  trustCards,
} from './siteContent';

describe('specialist', () => {
  it('has fullName, shortName, and role', () => {
    expect(specialist.fullName).toBeTruthy();
    expect(specialist.shortName).toBeTruthy();
    expect(specialist.role).toBeTruthy();
  });

  it('role does not contain "психиатр"', () => {
    expect(specialist.role.toLowerCase()).not.toContain('психиатр');
  });
});

describe('images', () => {
  it('has hero and about entries with src and alt', () => {
    expect(images.hero.src).toBeTruthy();
    expect(images.hero.alt).toBeTruthy();
    expect(images.about.src).toBeTruthy();
    expect(images.about.alt).toBeTruthy();
  });

  it('hero and about image paths reference images/ directory', () => {
    expect(images.hero.src).toMatch(/^images\//);
    expect(images.about.src).toMatch(/^images\//);
  });
});

describe('navItems', () => {
  it('is a non-empty array', () => {
    expect(navItems.length).toBeGreaterThan(0);
  });

  it('each item has label and href', () => {
    navItems.forEach((item) => {
      expect(item.label).toBeTruthy();
      expect(item.href).toMatch(/^#/);
    });
  });

  it('contains expected sections', () => {
    const hrefs = navItems.map((i) => i.href);
    expect(hrefs).toContain('#about');
    expect(hrefs).toContain('#contacts');
  });
});

describe('heroFacts', () => {
  it('is a non-empty array of strings', () => {
    expect(heroFacts.length).toBeGreaterThan(0);
    heroFacts.forEach((fact) => {
      expect(typeof fact).toBe('string');
    });
  });
});

describe('aboutParagraphs', () => {
  it('is a non-empty array of strings', () => {
    expect(aboutParagraphs.length).toBeGreaterThan(0);
    aboutParagraphs.forEach((p) => {
      expect(typeof p).toBe('string');
      expect(p.length).toBeGreaterThan(0);
    });
  });
});

describe('requestCards', () => {
  it('is a non-empty array', () => {
    expect(requestCards.length).toBeGreaterThan(0);
  });

  it('each card has title and non-empty points array', () => {
    requestCards.forEach((card) => {
      expect(card.title).toBeTruthy();
      expect(card.points.length).toBeGreaterThan(0);
    });
  });
});

describe('trustCards', () => {
  it('is a non-empty array', () => {
    expect(trustCards.length).toBeGreaterThan(0);
  });

  it('each card has title and text', () => {
    trustCards.forEach((card) => {
      expect(card.title).toBeTruthy();
      expect(card.text).toBeTruthy();
    });
  });
});

describe('documentCards', () => {
  it('is a non-empty array', () => {
    expect(documentCards.length).toBeGreaterThan(0);
  });

  it('each card has label, title, text, image, and alt', () => {
    documentCards.forEach((card) => {
      expect(card.label).toBeTruthy();
      expect(card.title).toBeTruthy();
      expect(card.text).toBeTruthy();
      expect(card.image).toMatch(/^images\//);
      expect(card.alt).toBeTruthy();
    });
  });
});

describe('formats', () => {
  it('is a non-empty array', () => {
    expect(formats.length).toBeGreaterThan(0);
  });

  it('each format has title and text', () => {
    formats.forEach((f) => {
      expect(f.title).toBeTruthy();
      expect(f.text).toBeTruthy();
    });
  });
});

describe('preparationSteps', () => {
  it('is a non-empty array of strings', () => {
    expect(preparationSteps.length).toBeGreaterThan(0);
    preparationSteps.forEach((step) => {
      expect(typeof step).toBe('string');
    });
  });
});

describe('paymentRules', () => {
  it('is a non-empty array of strings', () => {
    expect(paymentRules.length).toBeGreaterThan(0);
    paymentRules.forEach((rule) => {
      expect(typeof rule).toBe('string');
    });
  });
});

describe('testimonials', () => {
  it('is a non-empty array', () => {
    expect(testimonials.length).toBeGreaterThan(0);
  });

  it('each testimonial has source, text, and href', () => {
    testimonials.forEach((t) => {
      expect(t.source).toBeTruthy();
      expect(t.text).toBeTruthy();
      expect(t.href).toMatch(/^https?:\/\//);
    });
  });
});

describe('testimonialSources', () => {
  it('is a non-empty array', () => {
    expect(testimonialSources.length).toBeGreaterThan(0);
  });

  it('each source has label and valid href', () => {
    testimonialSources.forEach((s) => {
      expect(s.label).toBeTruthy();
      expect(s.href).toMatch(/^https?:\/\//);
    });
  });
});
