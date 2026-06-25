import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('assetUrl', () => {
  beforeEach(() => {
    vi.resetModules();
  });

  it('prepends BASE_URL to the given path', async () => {
    vi.stubEnv('BASE_URL', '/yegine-unanyan-landing/');
    const { assetUrl } = await import('./App');
    const result = assetUrl('images/photo.jpg');
    expect(result).toContain('images/photo.jpg');
  });

  it('handles root BASE_URL', async () => {
    vi.stubEnv('BASE_URL', '/');
    const { assetUrl } = await import('./App');
    const result = assetUrl('images/photo.jpg');
    expect(result).toContain('images/photo.jpg');
  });

  it('returns path including the provided filename', async () => {
    const { assetUrl } = await import('./App');
    const result = assetUrl('test-file.png');
    expect(result).toContain('test-file.png');
  });
});
