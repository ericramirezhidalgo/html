import { column, defineDb, defineTable } from 'astro:db';


interface User {
  username: string;
  password: string;
  mail: string;
  dateOfBirth: Date;
  gender: string;
  planType: string;
}

interface MyDatabase {
  User: User;

}

const UserTable = defineTable({
  columns: {
    username: column.text(),
    password: column.text(),
    mail: column.text(),
    dateOfBirth: column.date(),
    gender: column.text(),
    planType: column.text(),
  },
});


const db = defineDb({
  tables: { User: UserTable }
}) as MyDatabase;

export default db;
