import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
const schema=z.object({id:z.string().regex(/^[A-Za-z0-9_-]{11}$/),size:z.enum(['default','mqdefault','hqdefault','sddefault','maxresdefault'])});
export const Route=createFileRoute('/api/thumbnail')({server:{handlers:{GET:async({request})=>{
 const url=new URL(request.url); const input=schema.safeParse(Object.fromEntries(url.searchParams));
 if(!input.success) return new Response('Invalid thumbnail request',{status:400});
 try {
  const response=await fetch(`https://i.ytimg.com/vi/${input.data.id}/${input.data.size}.jpg`,{signal:AbortSignal.timeout(15000)});
  if(!response.ok) return new Response('This thumbnail resolution is unavailable',{status:404});
  return new Response(response.body,{headers:{'Content-Type':'image/jpeg','Content-Disposition':`attachment; filename="${input.data.id}-${input.data.size}.jpg"`,'Cache-Control':'public, max-age=3600'}});
 } catch { return new Response('Thumbnail service unavailable',{status:502}); }
}}}});
