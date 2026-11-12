import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteShell } from '@/components/toolkit/site-shell';
export const Route = createFileRoute('/terms')({
 head: () => ({ meta: [{ title: 'Terms and Conditions | YouTubeDownloadPro' }, { name: 'description', content: 'Terms of use for the youtubedownloadpro creator toolkit.' }, { property: 'og:title', content: 'Terms and Conditions | YouTubeDownloadPro' }, { property: 'og:description', content: 'Terms of use for the youtubedownloadpro creator toolkit.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Page,
});
function Page() { return <SiteShell><main className="content-page"><h1>Terms and Conditions</h1><p>The finalized terms and conditions have not been provided yet.</p><h2>Responsible use</h2><p>Only download content you own or have permission to use, and respect YouTube’s terms. Live tool integrations are not yet available; no monetization, private-video access, or earnings results are guaranteed.</p><Button asChild><Link to="/contact">Contact us <ArrowRight /></Link></Button></main></SiteShell>; }
