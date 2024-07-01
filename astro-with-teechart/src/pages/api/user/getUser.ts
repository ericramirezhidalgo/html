import { db, User, eq } from 'astro:db';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async function post({ request }) {
  if (!request.body) {
    console.log('No request body:', request.body);
    return new Response('No request body', { status: 400 });
  }
  try {
    console.log('Request body:', request.body);
    const { username, mail } = await request.json();
    console.log('Parsed username and mail:', username, mail);

    const users = await db.select().from(User).where(u => eq(u.username, username) || eq(u.mail, mail));
    const user = users[0];

    if (user) {
      return new Response('User exists', { status: 409 });
    } else {
      return new Response('User not found', { status: 200 });
    }
  } catch (error) {
    console.error('Error finding user:', error);
    return new Response('Error finding user', { status: 500 });
  }
}
