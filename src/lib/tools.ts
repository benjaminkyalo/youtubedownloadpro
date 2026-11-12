import { Check, Search, Images, Tags, Banknote, Ban, MessageSquare, ThumbsDown, ChartNoAxesColumnIncreasing, Play, UserRound, AlignLeft, Image, LockKeyhole, Link, EyeOff, History, Code, TriangleAlert, ThumbsUp, ChartNoAxesCombined, Clock, Eye, Video, Radio, Users, Lightbulb, Database, AudioLines, KeyRound, Calendar, Trash2, Music, Flame, ChartPie, Hash, Trophy, Download, Shield, Rocket } from 'lucide-react';
export const essentialTools = [
  { name: 'Monetization Checker', icon: Check, description: 'Is This Channel or Video Monetized? Check if a YouTube channel or video is monetized.' },
  { name: 'Channel ID Finder', icon: Search, description: 'Get YouTube Channel ID and User ID. Learn the difference between channel and user ID.' },
  { name: 'Image Tool', icon: Images, description: 'View and download YouTube profile picture, banner, and video thumbnail in HD.' },
  { name: 'Tag Extractor', icon: Tags, description: 'Quickly extract tags from any YouTube channel or video page.' },
  { name: 'Money Calculator', icon: Banknote, description: 'Calculate revenue from any YouTube channel, video, or view count.' },
  { name: 'Shadowban Detector', icon: Ban, description: 'Quickly identify if any YouTube channel is shadowbanned with full channel info.' },
  { name: 'Comments Viewer', icon: MessageSquare, description: 'Browse top-level comments with likes, timestamps, and reply previews.' },
  { name: 'Dislike Checker', icon: ThumbsDown, description: 'See estimated dislike counts and like/dislike ratio for any YouTube video.' },
];
export const additionalTools = [
  { name: 'YouTube Stats – Top 100 Channels', icon: ChartNoAxesColumnIncreasing, description: 'Top 100 most subscribed YouTube channels worldwide, by country and category — plus full stats, videos, earnings estimates and similar channels for any channel.' },
  { name: 'YouTube Without Ads', icon: Play, description: 'Paste a YouTube link and watch in a clean, distraction-free player. YouTube-served ads may still appear.' },
  { name: 'Profile Downloader', icon: UserRound, description: 'Download any YouTube channel profile picture in every official resolution.' },
  { name: 'Description Viewer', icon: AlignLeft, description: 'Full video description with hashtags, links, tags, and one-click copy.' },
  { name: 'Thumbnail Viewer', icon: Image, description: 'Compare API thumbnails with img.youtube.com sizes up to max resolution.' },
  { name: 'Private Video Checker', icon: LockKeyhole, description: 'See privacy, embeddable flag, and why private videos cannot be played without access.' },
  { name: 'Link Viewer', icon: Link, description: 'Parse any YouTube URL into video and playlist IDs and canonical links.' },
  { name: 'Private YouTube Viewer', icon: EyeOff, description: 'See what the public API reveals about private, unlisted, or public links.' },
  { name: 'Channel History Viewer', icon: History, description: "Browse a channel’s public upload history with timestamps and thumbnails." },
  { name: 'YouTube Embed Viewer', icon: Code, description: 'Generate embed URL, keep start offset, verify iframe playback is allowed.' },
  { name: 'Age Restricted Viewer', icon: TriangleAlert, description: 'Inspect age restriction and content rating metadata for a video.' },
  { name: 'Like Counter', icon: ThumbsUp, description: 'Track real-time like counts with live refresh from the YouTube API.' },
  { name: 'SEO Score Checker', icon: ChartNoAxesCombined, description: 'Comprehensive SEO audit score (0–100) with actionable tips.' },
  { name: 'Watch Time Calculator', icon: Clock, description: 'Calculate watch time and progress toward the 4,000-hour monetization threshold.' },
  { name: 'Views to Money', icon: Eye, description: 'Estimated YouTube earnings for any view count by niche and country.' },
  { name: 'Video Money Calculator', icon: Video, description: 'Estimate ad revenue for a single video with custom CPM/RPM inputs.' },
  { name: 'Advanced Money Calculator', icon: ChartNoAxesCombined, description: 'Full channel income estimator including sponsorship and affiliate income.' },
  { name: 'Live Stream Calculator', icon: Radio, description: 'Calculate live stream revenue from ads, Super Chat, and memberships.' },
  { name: 'Comment Finder', icon: MessageSquare, description: 'Search comments on any YouTube video by keyword instantly.' },
  { name: 'Live Subscriber Count', icon: Users, description: 'Track real-time subscriber counts with auto-refresh.' },
  { name: 'Channel Ideas', icon: Lightbulb, description: 'Generate YouTube channel ideas by niche and content format.' },
  { name: 'Metadata Viewer', icon: Database, description: 'View complete YouTube video or channel metadata and stats.' },
  { name: 'BPM Finder', icon: AudioLines, description: 'Detect BPM from video metadata or use tap tempo.' },
  { name: 'Find YouTube Channel', icon: Search, description: 'Search YouTube channels by name or keyword.' },
  { name: 'Keyword Finder', icon: KeyRound, description: 'Extract SEO keywords from video title, description, and tags.' },
  { name: 'YouTube URL Finder', icon: Link, description: 'Find video and channel URLs by search query.' },
  { name: 'Tag Finder', icon: Tags, description: 'Find video tags plus related tags from the channel.' },
  { name: 'Upload Date Finder', icon: Calendar, description: 'Find exact upload date and time of any YouTube video.' },
  { name: 'Deleted Video Finder', icon: Trash2, description: 'Find deleted videos via Wayback Machine archives.' },
  { name: 'Royalty-Free Music', icon: Music, description: 'Browse copyright-safe music by genre, mood, and duration.' },
  { name: 'Clickbait Title Generator', icon: Flame, description: 'Ranked click-worthy title ideas scored for CTR.' },
  { name: 'Comment Generator', icon: MessageSquare, description: 'Generate engaging YouTube comments in multiple tones.' },
  { name: 'Comment Sentiment Analysis', icon: ChartPie, description: 'Analyze comment sentiment with topic breakdown.' },
  { name: 'Hashtag Generator', icon: Hash, description: 'Generate SEO-friendly YouTube hashtags for videos and Shorts.' },
  { name: 'YouTube Rank Checker', icon: Trophy, description: 'Check where your video ranks in YouTube search for any keyword.' },
];
export const allTools = [...essentialTools, ...additionalTools, { name: 'Video Downloader', icon: Download, description: 'Choose MP4 video quality for content you own or have permission to download.' }, { name: 'Audio Downloader', icon: Music, description: 'Extract audio from videos you own or have permission to use.' }];
export const benefits = [
  { name: 'Improved Channel Performance', icon: ChartNoAxesCombined, description: 'Understand your channel’s strengths and weaknesses with detailed analytics and actionable insights.' },
  { name: 'Enhanced Security & Privacy', icon: Shield, description: 'Make privacy-conscious decisions and keep sensitive channel information secure.' },
  { name: 'Better Content Strategy', icon: Lightbulb, description: 'Make informed decisions about your content based on comprehensive data and competitor analysis.' },
  { name: 'Time-Saving Automation', icon: Rocket, description: 'Automate tedious tasks like finding channel IDs, extracting tags, and calculating earnings instantly.' },
];
export type Tool = typeof allTools[number];
export const toolSlug = (name: string) => name.toLowerCase().replace(/[–—]/g, ' ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
export const findToolBySlug = (slug: string) => allTools.find(t => toolSlug(t.name) === slug);
