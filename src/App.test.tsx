import { describe, it, expect, vi, afterEach } from 'vitest';
import { assetUrl } from './App';

describe('assetUrl', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it('prefixes path with BASE_URL when BASE_URL is /', () => {
    vi.stubEnv('BASE_URL', '/');
    expect(assetUrl('images/hero.jpg')).toBe('/images/hero.jpg');
    expect(assetUrl('foo')).toBe('/foo');
  });

  it('prefixes path with BASE_URL when BASE_URL is a specific path', () => {
    vi.stubEnv('BASE_URL', '/yegine-unanyan-landing/');
    expect(assetUrl('images/hero.jpg')).toBe('/yegine-unanyan-landing/images/hero.jpg');
    expect(assetUrl('some/other/path.png')).toBe('/yegine-unanyan-landing/some/other/path.png');
  });

  it('handles empty path correctly', () => {
    vi.stubEnv('BASE_URL', '/');
    expect(assetUrl('')).toBe('/');

    vi.stubEnv('BASE_URL', '/yegine-unanyan-landing/');
    expect(assetUrl('')).toBe('/yegine-unanyan-landing/');
  });

  it('handles path starting with slash', () => {
    vi.stubEnv('BASE_URL', '/');
    expect(assetUrl('/images/hero.jpg')).toBe('//images/hero.jpg');

    vi.stubEnv('BASE_URL', '/base/');
    expect(assetUrl('/path')).toBe('/base//path');
  });
});
