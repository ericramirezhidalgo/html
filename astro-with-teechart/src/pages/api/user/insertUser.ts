import { db, User, eq } from 'astro:db';
import type {APIRoute} from 'astro';

export const POST: APIRoute =  async function post({ request }) {
  if (!request.body) {
    console.log('No request body:', request.body);
    return new Response('No request body', { status: 400 });
  }
  try {
    console.log('Request body:', request.body);
    let userObj = await request.json();
    console.log('Parsed userObj:', userObj);
    userObj.dateOfBirth = new Date(userObj.dateOfBirth);

    const existingUsers = await db.select().from(User).where(u => eq(u.mail, userObj.mail));
    if (existingUsers.length > 0) {
      return new Response('User with this email already exists', { status: 409 });
    }

    await db.insert(User).values([userObj]);
    return new Response('User inserted', { status: 200 });
  } catch (error) {
    console.error('Error inserting user:', error);
    return new Response('Error inserting user', { status: 500 });
  }
}
