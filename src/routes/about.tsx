import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteShell } from '@/components/toolkit/site-shell';
export const Route = createFileRoute('/about')({
 head: () => ({ meta: [{ title: 'About youtubedownloadpro | YouTubeDownloadPro' }, { name: 'description', content: 'A YouTube toolkit for creators, marketers, and researchers.' }, { property: 'og:title', content: 'About youtubedownloadpro | YouTubeDownloadPro' }, { property: 'og:description', content: 'A YouTube toolkit for creators, marketers, and researchers.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Page,
});
function Page() { return <SiteShell><main className="content-page"><h1>About youtubedownloadpro</h1><p>youtubedownloadpro brings YouTube channel research, creator assets, and growth tools together in one place.</p><h2>Built around your creator workflow</h2><p>Explore channel insights, discover useful metadata, and plan your content strategy. The homepage brings the complete toolkit together with a universal channel and video input.</p><Button asChild><Link to="/">Explore the toolkit <ArrowRight /></Link></Button></main></SiteShell>; }
