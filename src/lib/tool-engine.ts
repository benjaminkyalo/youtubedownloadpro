import { z } from 'zod';
export const textInputSchema = z.string().trim().max(2000);
const videoPattern = /^[A-Za-z0-9_-]{11}$/;
const channelPattern = /^UC[A-Za-z0-9_-]{22}$/;
export type YouTubeInput = { kind: 'video' | 'channel' | 'handle' | 'query'; value: string; playlist?: string | undefined; start: number };
export function parseYouTubeInput(raw: string): YouTubeInput {
 const text = textInputSchema.parse(raw);
 if (videoPattern.test(text)) return { kind: 'video', value: text, start: 0 };
 if (channelPattern.test(text)) return { kind: 'channel', value: text, start: 0 };
 if (/^@[\p{L}\p{N}_.-]{3,30}$/u.test(text)) return { kind: 'handle', value: text, start: 0 };
 if (/^(https?:\/\/|(?:www\.|m\.|music\.)?(?:youtube\.com|youtu\.be)\/)/i.test(text)) {
  const url = new URL(/^https?:/i.test(text) ? text : `https://${text}`);
  if (!['youtube.com','www.youtube.com','m.youtube.com','music.youtube.com','youtu.be','www.youtu.be'].includes(url.hostname) || !['http:','https:'].includes(url.protocol)) throw new Error('Use a genuine youtube.com or youtu.be link.');
  const parts = url.pathname.split('/').filter(Boolean);
  const id = url.hostname.endsWith('youtu.be') ? parts[0] : url.searchParams.get('v') ?? (['shorts','embed','live'].includes(parts[0] ?? '') ? parts[1] : undefined);
  const time = url.searchParams.get('t') ?? url.searchParams.get('start') ?? '0';
  const start = /^\d+$/.test(time) ? Number(time) : [...time.matchAll(/(\d+)(h|m|s)/g)].reduce((sum,m) => sum + Number(m[1]) * (m[2] === 'h' ? 3600 : m[2] === 'm' ? 60 : 1),0);
  if (id && videoPattern.test(id)) return { kind: 'video', value: id, playlist: url.searchParams.get('list') ?? undefined, start: Math.min(start,86400) };
  if (parts[0] === 'channel' && channelPattern.test(parts[1] ?? '')) return { kind: 'channel', value: parts[1] ?? '', start: 0 };
  if (parts[0]?.startsWith('@')) return parseYouTubeInput(parts[0]);
  if (parts[0] === 'user' || parts[0] === 'c') return { kind: 'query', value: parts[1] ?? text, start: 0 };
  throw new Error('This link does not contain a valid video, channel, or handle.');
 }
 if (/https?:|\.[a-z]{2,}\//i.test(text)) throw new Error('Use a genuine YouTube link or enter a search phrase.');
 return { kind: 'query', value: text, start: 0 };
}
export const calculationSchema = z.object({ views: z.coerce.number().min(0).max(1e12), minutes: z.coerce.number().min(0).max(1440), rpm: z.coerce.number().min(0).max(10000), subscribers: z.coerce.number().min(0).max(1e10), hours: z.coerce.number().min(0).max(1e10), sponsorship: z.coerce.number().min(0).max(1e12), affiliate: z.coerce.number().min(0).max(1e12), donations: z.coerce.number().min(0).max(1e12), members: z.coerce.number().min(0).max(1e9), membershipPrice: z.coerce.number().min(0).max(10000) });
export const initialNumbers = { views: 100000, minutes: 4, rpm: 3, subscribers: 0, hours: 0, sponsorship: 0, affiliate: 0, donations: 0, members: 0, membershipPrice: 5 };
export function channelEstimates(views: number, publishedAt: string, now = new Date()) {
 const joined = new Date(publishedAt);
 const days = (now.getTime() - joined.getTime()) / 86400000;
 if (!Number.isFinite(views) || views < 0 || !Number.isFinite(days) || days < 1) return null;
 const daily = views / days;
 let years = now.getUTCFullYear() - joined.getUTCFullYear();
 if (now.getUTCMonth() < joined.getUTCMonth() || (now.getUTCMonth() === joined.getUTCMonth() && now.getUTCDate() < joined.getUTCDate())) years--;
 return { years: Math.max(0, years), days, views: [daily, daily * 30, daily * 365], earnings: [2, 6, 10].map(rate => [daily * rate / 1000, daily * 30 * rate / 1000, daily * 365 * rate / 1000]) };
}
export function calculate(values: unknown) {
 const n = calculationSchema.parse(values);
 const watchHours = n.views * n.minutes / 60;
 const revenue = n.views / 1000 * n.rpm;
 return { watchHours, remainingHours: Math.max(0,4000-watchHours), progress: Math.min(100,watchHours / 4000 * 100), revenue, totalRevenue: revenue+n.sponsorship+n.affiliate, liveRevenue: revenue+n.donations+n.members*n.membershipPrice, meetsNumericThresholds: n.subscribers >= 1000 && n.hours >= 4000 };
}
export function keywords(text: string): string[] {
 const stop = new Set('the and for with this that from your you are was have has how what when where a an to of in on is it be as at by or we my our'.split(' '));
 const words = text.toLowerCase().match(/[\p{L}\p{N}]{3,}/gu) ?? [];
 const counts = new Map<string,number>();
 for (const w of words) if (!stop.has(w)) counts.set(w,(counts.get(w) ?? 0)+1);
 return [...counts].sort((a,b) => b[1]-a[1]).slice(0,20).map(([w]) => w);
}
export function seoAudit(title: string, description: string, tags: string[]) {
 const checks = [{ name: 'Descriptive title (30–70 characters)', pass: title.length >= 30 && title.length <= 70 }, { name: 'Detailed description (200+ characters)', pass: description.length >= 200 }, { name: 'At least 3 tags', pass: tags.length >= 3 }, { name: 'Title keyword in description', pass: keywords(title).some(w => description.toLowerCase().includes(w)) }, { name: 'Description includes a link', pass: /https?:\/\//.test(description) }];
 return { score: checks.filter(c => c.pass).length * 20, checks };
}
export function createSuggestions(tool: string, text: string, tone: string) {
 const topic = text.trim().slice(0,120) || 'your next video';
 if (tool === 'Hashtag Generator') return keywords(text).slice(0,12).map(w => `#${w}`);
 if (tool === 'Channel Ideas') return [`${topic}: beginner-friendly tutorials`,`${topic}: weekly experiments and challenges`,`${topic}: honest reviews and comparisons`,`${topic}: behind-the-scenes stories`,`${topic}: quick tips and common mistakes`];
 if (tool === 'Clickbait Title Generator') return [`${topic}: What I Wish I Knew Earlier`,`I Tried ${topic} — Here’s What Happened`,`7 ${topic} Mistakes to Avoid`,`The Beginner’s Guide to ${topic}`,`Is ${topic} Really Worth It?`];
 return tone === 'Question' ? [`What was the hardest part of ${topic}?`,`Which part of ${topic} would you recommend trying first?`,`Could you share more about ${topic} in a follow-up?`] : [`Thanks for sharing your perspective on ${topic}!`,`The explanation of ${topic} was clear and helpful.`,`I’d love to see more content about ${topic}.`];
}
export const calculatorTools = ['Watch Time Calculator','Money Calculator','Views to Money','Video Money Calculator','Advanced Money Calculator','Live Stream Calculator','Monetization Checker'];
export const generatorTools = ['Channel Ideas','Clickbait Title Generator','Comment Generator','Hashtag Generator'];
export const optionalInputTools = [...calculatorTools,...generatorTools,'BPM Finder','Royalty-Free Music','YouTube Stats – Top 100 Channels','Find YouTube Channel','YouTube URL Finder'];
export const videoOnlyTools = ['Thumbnail Viewer','Link Viewer','YouTube Embed Viewer','YouTube Without Ads','Deleted Video Finder','Video Downloader','Audio Downloader','Comments Viewer','Comment Finder','Comment Sentiment Analysis','Dislike Checker','YouTube Rank Checker'];
export function validateToolInput(tool: string, input: string) {
 const text = textInputSchema.parse(input);
 if (!text && !optionalInputTools.includes(tool)) throw new Error('Enter a channel or video URL, ID, or search phrase to continue.');
 if (!text) return text;
 const parsed = parseYouTubeInput(text);
 if (videoOnlyTools.includes(tool) && parsed.kind !== 'video') throw new Error(`${tool} requires a YouTube video link or 11-character video ID.`);
 return text;
}
