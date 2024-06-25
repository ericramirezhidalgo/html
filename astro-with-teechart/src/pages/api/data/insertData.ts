import { db, ChartData } from 'astro:db';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async function post({ request }) {
  if (!request.body) {
    console.log('No request body:', request.body);
    return new Response('No request body', { status: 400 });
  }
  try {
    const chartData = await request.json();
    console.log('Parsed chartData:', chartData);

    if (!chartData.id || !chartData.type || !chartData.data) {
      console.error('Missing required fields');
      return new Response('Missing required fields', { status: 400 });
    }

    await db.insert(ChartData).values([chartData]);
    return new Response('Chart data inserted', { status: 200 });
  } catch (error) {
    console.error('Error inserting chart data:', error);
    return new Response('Error inserting chart data', { status: 500 });
  }
};
