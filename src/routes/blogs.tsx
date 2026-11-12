import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SiteShell } from '@/components/toolkit/site-shell';
export const Route = createFileRoute('/blogs')({
 head: () => ({ meta: [{ title: 'Creator Blog | YouTubeDownloadPro' }, { name: 'description', content: 'YouTube growth, content strategy, and creator insights.' }, { property: 'og:title', content: 'Creator Blog | YouTubeDownloadPro' }, { property: 'og:description', content: 'YouTube growth, content strategy, and creator insights.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }] }),
 component: Page,
});
function Page() { return <SiteShell><main className="content-page"><h1>Creator Blog</h1><p>YouTube growth, content strategy, and creator insights.</p><h2>Articles are on the way</h2><p>There are no published articles yet.</p><Button asChild><Link to="/">Explore creator tools <ArrowRight /></Link></Button></main></SiteShell>; }
