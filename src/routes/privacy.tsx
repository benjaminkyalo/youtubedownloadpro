import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteShell } from '@/components/toolkit/site-shell';
export const Route = createFileRoute('/privacy')({
 head: () => ({ meta: [{ title: 'Privacy Policy | YouTubeDownloadPro' }, { name: 'description', content: 'Privacy information for the youtubedownloadpro creator toolkit.' }, { property: 'og:title', content: 'Privacy Policy | YouTubeDownloadPro' }, { property: 'og:description', content: 'Privacy information for the youtubedownloadpro creator toolkit.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Page,
});
function Page() { return <SiteShell><main className="content-page"><h1>Privacy Policy</h1><p>The finalized privacy policy has not been provided yet.</p><h2>Public content only</h2><p>Do not enter passwords, account credentials, or private channel information. External YouTube links and thumbnails are served by YouTube and are subject to its policies.</p><Button asChild><Link to="/contact">Privacy questions <ArrowRight /></Link></Button></main></SiteShell>; }
