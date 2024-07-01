import { db, ChartData, eq } from 'astro:db';
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

        const existingChart = await db.select().from(ChartData).where(eq(ChartData.id, chartData.id)).execute();

        if (existingChart.length > 0) {
            await db.update(ChartData)
                .set({
                    type: chartData.type,
                    data: JSON.stringify(chartData.data),
                })
                .where(eq(ChartData.id, chartData.id))
                .execute();
        } else {

            await db.insert(ChartData).values([
                {
                    id: chartData.id,
                    type: chartData.type,
                    data: JSON.stringify(chartData.data),
                }
            ]).execute();
        }

        return new Response('Chart data inserted/updated', { status: 200 });
    } catch (error) {
        console.error('Error inserting/updating chart data:', error);
        return new Response('Error inserting/updating chart data', { status: 500 });
    }
};
