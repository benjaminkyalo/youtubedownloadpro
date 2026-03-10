async function ytdl(query, format) {
  const response = await fetch(
    `http://89.117.51.72:4500/api/download?url=${encodeURIComponent(query)}&format=${format}`
  );
  const result = await response.json();
  return result;
}

export default async function download(url, format) {
  return await ytdl(url, format);
}