import { db, User, eq } from 'astro:db';
import type { APIRoute } from 'astro';

export const POST: APIRoute = async function post({ request }) {
  if (!request.body) {
    console.log('No request body:', request.body);
    return new Response('No request body', { status: 400 });
  }
  try {
    console.log('Request body:', request.body);
    const { mail, password } = await request.json();
    console.log('Parsed email and password:', mail, password);

    const users = await db.select().from(User).where(u => eq(u.mail, mail));
    const user = users[0];

    if (user && user.password === password) {
      return new Response(JSON.stringify(user), { status: 200 });
    } else {
      return new Response('Incorrect email or password', { status: 401 });
    }
  } catch (error) {
    console.error('Error finding user:', error);
    return new Response('Error finding user', { status: 500 });
  }
}
