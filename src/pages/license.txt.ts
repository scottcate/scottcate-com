// Publishes the repo's license.txt at /license.txt so the footer can link to it.
import license from '../../license.txt?raw';

export const GET = () => new Response(license, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
