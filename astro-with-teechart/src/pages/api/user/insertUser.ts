import { db, User } from 'astro:db';
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
    // Convertir la fecha de nacimiento a un objeto Date antes de insertar
    userObj.dateOfBirth = new Date(userObj.dateOfBirth);
    await db.insert(User).values([userObj]);
    return new Response('User inserted', { status: 200 });
  } catch (error) {
    console.error('Error inserting user:', error);
    return new Response('Error inserting user', { status: 500 });
  }
}
