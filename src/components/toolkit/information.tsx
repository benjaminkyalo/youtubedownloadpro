import { Check, ArrowRight } from 'lucide-react';
import { benefits } from '@/lib/tools';
import { Button } from '@/components/ui/button';
const features = [
 ['Instant Analysis', 'Get insights about YouTube channels and videos in one place.'],
 ['Comprehensive Tools', 'Explore powerful tools including Monetization Checker, Channel ID Finder, Tag Extractor, and more.'],
 ['Privacy-First', 'Never share passwords or private channel credentials to analyze public content.'],
 ['Multiple Input Formats', 'Support for channel URLs, video links, usernames, and channel IDs for maximum flexibility.'],
 ['User-Friendly Interface', 'Clean, intuitive design that makes complex analytics accessible to everyone.'],
 ['Free Toolkit', 'Explore the tools and find the insights you need for your channel.'],
];
const useCases = [
 ['Content Creators', 'Check monetization status, analyze competitor channels, and optimize your content strategy for better engagement.'],
 ['Digital Marketers', 'Research target audiences, analyze channel performance, and identify trending content for marketing campaigns.'],
 ['SEO Specialists', 'Extract tags, analyze video metadata, and optimize YouTube SEO for better search rankings.'],
 ['Developers & Researchers', 'Explore public YouTube data, build analytics dashboards, and conduct channel research.'],
];
const practices = [
 ['Regular Monitoring', 'Check your channel’s monetization status and performance metrics regularly to stay on top of your growth.'],
 ['Competitor Analysis', 'Study successful channels in your niche to understand what works and adapt your strategy accordingly.'],
 ['Tag Optimization', 'Use our Tag Extractor to find relevant keywords and improve your video discoverability.'],
 ['Data-Driven Decisions', 'Base your content strategy on actual analytics data rather than assumptions for better results.'],
 ['Privacy Awareness', 'Always verify that tools you use respect your privacy and don’t store sensitive channel information.'],
];
function CopyList({ items, checks = false }: { items: string[][]; checks?: boolean }) {
 return <ul className={checks ? 'copy-list check-list' : 'copy-list'}>{items.map(([title,text]) => <li key={title}>{checks ? <Check className="text-primary" /> : <span className="text-primary">•</span>}<p><strong>{title}:</strong> {text}</p></li>)}</ul>;
}
export function Information({ onStart }: { onStart: () => void }) {
 return <section className="information-section"><div className="information-inner"><div className="section-heading"><h2>Understanding youtubedownloadpro</h2><p>youtubedownloadpro is your all-in-one destination for analyzing YouTube channels, checking monetization status, extracting valuable data, and optimizing your content strategy. Whether you’re a content creator, marketer, or developer, our suite of tools helps you make data-driven decisions and grow your YouTube presence effectively.</p></div><div className="copy-block"><h3>Key Features of Our YouTube Toolkit</h3><CopyList items={features} checks /></div><div className="copy-block"><h3>Benefits of Using youtubedownloadpro</h3><div className="benefit-grid">{benefits.map(t => <article key={t.name} className="benefit-card"><span className="tool-icon"><t.icon /></span><h4>{t.name}</h4><p>{t.description}</p></article>)}</div></div><div className="copy-block"><h3>Common Use Cases</h3><CopyList items={useCases} /></div><div className="copy-block"><h3>Best Practices for YouTube Channel Analysis</h3><CopyList items={practices} /></div><aside className="why-choose"><h3>Why Choose Our YouTube Toolkit?</h3><p>Our YouTube Toolkit stands out because it’s designed with both simplicity and power in mind. You don’t need to be a tech expert to use our tools — they’re built for everyone. Whether you’re checking if a channel is monetized, finding a channel ID, or extracting video tags, everything starts with just a few clicks.</p><p>What makes us different is our commitment to privacy and speed. Our tools support multiple input formats — paste a URL, enter a username, or use a channel ID. The flexibility you need, the clarity you deserve.</p><p><strong>Ready to get started?</strong> Try our Monetization Checker tool above. Bookmark this page for quick access to all of our tools whenever you need them.</p><Button variant="link" onClick={onStart} className="px-0">Explore the tools <ArrowRight /></Button></aside></div></section>;
}
