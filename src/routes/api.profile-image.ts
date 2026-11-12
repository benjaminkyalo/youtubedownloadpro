import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';
const imageUrl=z.string().url().max(2048).refine(value=>{const u=new URL(value);return u.protocol==='https:'&&['yt3.ggpht.com','yt3.googleusercontent.com'].includes(u.hostname)&&!u.username&&!u.password&&(!u.port||u.port==='443');});
export const Route=createFileRoute('/api/profile-image')({server:{handlers:{GET:async({request})=>{
 const parsed=imageUrl.safeParse(new URL(request.url).searchParams.get('url'));
 if(!parsed.success)return new Response('Invalid profile image URL',{status:400});
 try {
  const response=await fetch(parsed.data,{redirect:'error',signal:AbortSignal.timeout(15000)});
  if(!response.ok)return new Response('Profile image unavailable',{status:404});
  const mime=response.headers.get('content-type')??'';
  if(!['image/jpeg','image/png','image/webp'].includes(mime.split(';')[0]??''))return new Response('Unsupported image type',{status:400});
  const ext=mime.includes('png')?'png':mime.includes('webp')?'webp':'jpg';
  return new Response(response.body,{headers:{'Content-Type':mime,'Content-Disposition':`attachment; filename="youtube-profile.${ext}"`,'Cache-Control':'public, max-age=3600'}});
 }catch{return new Response('Profile image service unavailable',{status:502});}
}}}});
