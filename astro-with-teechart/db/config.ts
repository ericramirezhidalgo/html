import { column, defineDb, defineTable } from 'astro:db';

const User = defineTable({
  columns: {
    username: column.text(),
    password: column.text(),
    mail: column.text(),
    dateOfBirth: column.date(),
    gender: column.text(),
    planType: column.text(),
  },
});


export default defineDb({
  tables: {User}
});