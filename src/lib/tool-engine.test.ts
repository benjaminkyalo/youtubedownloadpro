import { describe,it,expect } from 'vitest';
import { parseYouTubeInput,calculate,initialNumbers,createSuggestions,channelEstimates,validateToolInput } from './tool-engine';
describe('YouTube input validation',()=>{
 it('rejects channel handles for thumbnail downloads rather than producing empty results',()=>expect(()=>validateToolInput('Thumbnail Viewer','@mkbhd')).toThrow());
 it('accepts video IDs for thumbnails and optional input for calculators',()=>{expect(validateToolInput('Thumbnail Viewer','dQw4w9WgXcQ')).toBe('dQw4w9WgXcQ');expect(validateToolInput('Watch Time Calculator','')).toBe('');});
 it('parses Shorts video IDs',()=>expect(parseYouTubeInput('https://www.youtube.com/shorts/dQw4w9WgXcQ').value).toBe('dQw4w9WgXcQ'));
 it('rejects fake YouTube hosts',()=>expect(()=>parseYouTubeInput('https://youtube.com.attacker.test/watch?v=dQw4w9WgXcQ')).toThrow());
 it('preserves link start offset',()=>expect(parseYouTubeInput('https://youtu.be/dQw4w9WgXcQ?t=1m30s').start).toBe(90));
 it('accepts a channel handle',()=>expect(parseYouTubeInput('@mkbhd').kind).toBe('handle'));
});
describe('Calculations',()=>{
 it('uses actual elapsed days and 30/365 day revenue periods at $2/$6/$10 per thousand views',()=>{const result=channelEstimates(14635056,'2018-06-01T00:00:00Z',new Date('2026-06-01T00:00:00Z'));expect(result?.days).toBe(2922);expect(result?.years).toBe(8);expect(result?.views[0]).toBeCloseTo(5008.575);expect(result?.earnings[0]?.[1]).toBeCloseTo(300.5145);expect(result?.earnings[1]?.[2]).toBeCloseTo(10968.77975);expect(result?.earnings[2]?.[2]).toBeCloseTo(18281.29959);});
 it('does not estimate with missing dates or future dates',()=>{expect(channelEstimates(100,'')).toBeNull();expect(channelEstimates(100,'2027-01-01',new Date('2026-01-01'))).toBeNull();});
 it('calculates 4000 watch hours for 60000 views at 4 minutes',()=>expect(calculate({...initialNumbers,views:60000,minutes:4}).watchHours).toBe(4000));
 it('uses selected RPM, not a guessed channel income',()=>expect(calculate({...initialNumbers,views:100000,rpm:3}).revenue).toBe(300));
 it('requires both numeric eligibility thresholds',()=>{expect(calculate({...initialNumbers,subscribers:1000,hours:4000}).meetsNumericThresholds).toBe(true);expect(calculate({...initialNumbers,subscribers:999,hours:4000}).meetsNumericThresholds).toBe(false);});
 it('rejects negative views',()=>expect(()=>calculate({...initialNumbers,views:-1})).toThrow());
 it('includes sponsorship and affiliate values',()=>expect(calculate({...initialNumbers,sponsorship:50,affiliate:25}).totalRevenue).toBe(375));
});
it('produces keyword hashtags',()=>expect(createSuggestions('Hashtag Generator','Cooking pasta cooking','Supportive')).toEqual(['#cooking','#pasta']));
