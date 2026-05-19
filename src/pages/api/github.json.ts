import type { APIRoute } from 'astro';
import { getCachedRepos, categorizeRepos } from '../../services/github';

export const GET: APIRoute = async () => {
  try {
    const repos = await getCachedRepos();
    const categorized = categorizeRepos(repos);

    return new Response(JSON.stringify(categorized), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
      },
    });
  } catch (error) {
    console.error('Failed to fetch GitHub repos:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch repositories' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
