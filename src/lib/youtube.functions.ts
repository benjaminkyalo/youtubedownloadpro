import { createServerFn } from "@tanstack/react-start";

export type VideoInfo = {
  id: string;
  title: string;
  author: string;
  thumbnail: string;
  duration: string;
  views: string;
};

const UA = { "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/124 Safari/537.36", "accept-language": "en-US,en;q=0.9" };

export function extractVideoId(url: string): string | null {
  const m = url.trim().match(/(?:v=|youtu\.be\/|shorts\/|embed\/|live\/)([\w-]{11})/) ?? url.trim().match(/^([\w-]{11})$/);
  return m?.[1] ?? null;
}

export function formatDuration(sec: number): string {
  if (!sec) return "—";
  const h = Math.floor(sec / 3600), m = Math.floor((sec % 3600) / 60), s = sec % 60;
  const p = (n: number) => String(n).padStart(2, "0");
  return h ? `${h}:${p(m)}:${p(s)}` : `${m}:${p(s)}`;
}

export const getVideoInfo = createServerFn({ method: "POST" })
  .inputValidator((d: { url: string }) => d)
  .handler(async ({ data }): Promise<VideoInfo> => {
    const id = extractVideoId(data.url);
    if (!id) throw new Error("That doesn't look like a YouTube link.");
    const o = await fetch(`https://www.youtube.com/oembed?format=json&url=https://www.youtube.com/watch?v=${id}`);
    if (!o.ok) throw new Error("Video not found or unavailable.");
    const meta = (await o.json()) as { title: string; author_name: string };
    let duration = "—", views = "—";
    try {
      const html = await (await fetch(`https://www.youtube.com/watch?v=${id}`, { headers: UA })).text();
      const len = html.match(/"lengthSeconds":"(\d+)"/);
      const vc = html.match(/"viewCount":"(\d+)"/);
      if (len) duration = formatDuration(Number(len[1]));
      if (vc) views = Number(vc[1]).toLocaleString("en-US");
    } catch { /* optional */ }
    return { id, title: meta.title, author: meta.author_name, thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`, duration, views };
  });

export const searchVideos = createServerFn({ method: "POST" })
  .inputValidator((d: { q: string }) => d)
  .handler(async ({ data }): Promise<VideoInfo[]> => {
    const q = data.q.trim().slice(0, 200);
    if (!q) return [];
    const html = await (await fetch(`https://www.youtube.com/results?search_query=${encodeURIComponent(q)}`, { headers: UA })).text();
    const m = html.match(/var ytInitialData = (\{.*?\});<\/script>/s);
    if (!m) return [];
    const out: VideoInfo[] = [];
    const walk = (n: unknown) => {
      if (out.length >= 12 || !n || typeof n !== "object") return;
      const v = (n as Record<string, any>)["videoRenderer"];
      if (v?.videoId) {
        out.push({
          id: v.videoId,
          title: v.title?.runs?.[0]?.text ?? "",
          author: v.ownerText?.runs?.[0]?.text ?? "",
          thumbnail: `https://i.ytimg.com/vi/${v.videoId}/hqdefault.jpg`,
          duration: v.lengthText?.simpleText ?? "—",
          views: v.viewCountText?.simpleText ?? "—",
        });
        return;
      }
      for (const k in n as object) walk((n as any)[k]);
    };
    walk(JSON.parse(m[1] ?? "{}"));
    return out;
  });
