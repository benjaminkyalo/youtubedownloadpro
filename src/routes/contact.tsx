import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteShell } from '@/components/toolkit/site-shell';
export const Route = createFileRoute('/contact')({
 head: () => ({ meta: [{ title: 'Contact youtubedownloadpro | YouTubeDownloadPro' }, { name: 'description', content: 'Get in touch about the YouTubeDownloadPro creator toolkit.' }, { property: 'og:title', content: 'Contact youtubedownloadpro | YouTubeDownloadPro' }, { property: 'og:description', content: 'Get in touch about the YouTubeDownloadPro creator toolkit.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Page,
});
function Page() { return <SiteShell><main className="content-page"><h1>Contact Us</h1><p>For tool questions, feedback, or collaboration inquiries, contact details will be available here once confirmed.</p><h2>Support details coming soon</h2><p>A support email has not yet been provided.</p><Button asChild><Link to="/">Back to the tools <ArrowRight /></Link></Button></main></SiteShell>; }
