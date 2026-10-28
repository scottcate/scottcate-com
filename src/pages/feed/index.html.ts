// Keeps the old WordPress feed URL (/feed/) alive for existing subscribers.
// GitHub Pages can only serve a directory URL from index.html, so the RSS XML
// lives there; feed readers parse it by content. /rss.xml is the canonical feed.
import { feedResponse } from '../../lib/feed';

export const GET = () => feedResponse();
