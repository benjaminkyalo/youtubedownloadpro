import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { lazy, Suspense } from 'react';
import { ArrowRight } from 'lucide-react';
import { SiteShell } from '@/components/toolkit/site-shell';
import { ToolAction } from '@/components/toolkit/tool-action';
import { allTools, findToolBySlug, toolSlug } from '@/lib/tools';
const RevenueIntelligence = lazy(() => import('@/components/toolkit/revenue-intelligence').then(m => ({ default: m.RevenueIntelligence })));
const MonetizationGuide = lazy(() => import('@/components/toolkit/monetization-guide').then(m => ({ default: m.MonetizationGuide })));
export const Route = createFileRoute('/tools/$slug')({
  loader: ({ params }) => { const tool = findToolBySlug(params.slug); if (!tool) throw notFound(); return { name: tool.name, description: tool.description }; },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: 'Tool not found | YouTubeDownloadPro' }, { name: 'robots', content: 'noindex' }] };
    const title = `Free ${loaderData.name} | YouTubeDownloadPro`;
    return { meta: [{ title }, { name: 'description', content: loaderData.description }, { property: 'og:title', content: title }, { property: 'og:description', content: loaderData.description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary' }] };
  },
  notFoundComponent: () => <SiteShell><main className="hero-section"><div className="hero-inner"><h1>Tool not found</h1><Link to="/" className="text-primary">Back to all tools</Link></div></main></SiteShell>,
  component: ToolPage,
});
function ToolPage() {
  const { slug } = Route.useParams();
  const tool = findToolBySlug(slug)!;
  const others = allTools.filter(t => t.name !== tool.name).slice(0, 8);
  return <SiteShell><main><section className="hero-section"><div className="hero-inner"><span className="tool-icon mx-auto mb-4"><tool.icon /></span><h1>Free YouTube <span className="text-primary">{tool.name}</span></h1><p className="hero-subtitle">{tool.description}</p><ToolAction key={tool.name} initialTool={tool.name} /></div></section>
  {tool.name === 'Monetization Checker' && <Suspense fallback={null}><RevenueIntelligence /><MonetizationGuide onShadowban={() => {}} /></Suspense>}
  <section className="tools-section"><div className="wide-container"><div className="section-heading"><h2>More free tools</h2><p>Explore other YouTube tools — search, analyze, and discover faster.</p></div><div className="tool-grid">{others.map(t => <article key={t.name} className="tool-card"><span className="tool-icon"><t.icon /></span><h3>{t.name}</h3><p>{t.description}</p><Link to="/tools/$slug" params={{ slug: toolSlug(t.name) }} className="learn-link inline-flex items-center gap-1 font-semibold">Learn more <ArrowRight className="size-4" /></Link></article>)}</div></div></section></main></SiteShell>;
}
