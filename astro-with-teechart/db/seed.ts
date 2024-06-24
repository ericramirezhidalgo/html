import { db, User } from 'astro:db';

export default async function () {
	await db.insert(User).values([
		{ username: "eric", password: "password", mail: "eric@mail.com", dateOfBirth: new Date('2000-10-14'), gender: "Male", planType: "Basic" },
		{ username: "user", password: "password", mail: "user@mail.com", dateOfBirth: new Date('2001-05-22'), gender: "Male", planType: "Pro" },
	]);

}
