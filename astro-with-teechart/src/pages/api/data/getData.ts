import { db, ChartData } from 'astro:db';
import type {APIRoute} from 'astro';

export const GET: APIRoute = async function get({ request }) {
    try {
      const chartData = await db.select().from(ChartData);
      return new Response(JSON.stringify(chartData), { status: 200 });
    } catch (error) {
      console.error('Error getting chart data:', error);
      return new Response('Error getting chart data', { status: 500 });
    }
  }