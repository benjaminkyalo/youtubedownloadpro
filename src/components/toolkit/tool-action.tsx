import { lazy, Suspense, useRef, useState } from 'react';
import { Link as LinkIcon, Wrench, CircleCheck, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { validateToolInput } from '@/lib/tool-engine';
import { allTools } from '@/lib/tools';
const ToolWorkspace = lazy(() => import('./tool-workspace').then(m => ({ default: m.ToolWorkspace })));
export function ToolAction({ initialTool }: { initialTool: string }) {
  const [tool, setTool] = useState(initialTool);
  const [url, setUrl] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState<{ tool: string; input: string; version: number } | null>(null);
  const input = useRef<HTMLInputElement>(null);
  function submit(e: React.FormEvent) {
    e.preventDefault();
    try { const text = validateToolInput(tool, url); setError(''); setSubmitted({ tool, input: text, version: Date.now() }); }
    catch (e) { setError(e instanceof Error && e.name !== 'ZodError' ? e.message : 'Keep your input under 2,000 characters.'); input.current?.focus(); }
  }
  return <><form id="tool-action" onSubmit={submit} className="tool-action"><input maxLength={2000} ref={input} aria-label="Channel or Video URL, ID, or username" placeholder="Channel or Video URL, ID, or @username.." value={url} onChange={e => { setUrl(e.target.value); setError(''); }} /><Select value={tool} onValueChange={setTool}><SelectTrigger aria-label="Select tool"><SelectValue /></SelectTrigger><SelectContent className="max-h-80">{allTools.map(t => <SelectItem key={t.name} value={t.name}>{t.name}</SelectItem>)}</SelectContent></Select><Button type="submit" className="submit-button">Submit</Button></form>{error && <p role="alert" className="input-error"><AlertCircle />{error}</p>}<div className="micro-indicators"><span><LinkIcon />Enter your url</span><span><Wrench />Select Tool</span><span><CircleCheck />Submit & view result</span></div>{submitted && <div className="results-section text-left"><Suspense fallback={<p role="status" className="flex items-center gap-2 text-sm text-muted-foreground"><Loader2 className="animate-spin" />Loading tool…</p>}><ToolWorkspace key={submitted.version} tool={submitted.tool} input={submitted.input} /></Suspense></div>}</>;
}
