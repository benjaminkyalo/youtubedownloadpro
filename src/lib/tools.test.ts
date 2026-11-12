import { describe, expect, it } from 'vitest';
import { allTools, findToolBySlug, toolSlug } from './tools';
describe('tool pages', () => {
  it('gives every tool a unique page address', () => { expect(new Set(allTools.map(t => toolSlug(t.name))).size).toBe(allTools.length); });
  it('maps monetization checker address', () => { expect(toolSlug('Monetization Checker')).toBe('monetization-checker'); expect(findToolBySlug('monetization-checker')?.name).toBe('Monetization Checker'); });
});
