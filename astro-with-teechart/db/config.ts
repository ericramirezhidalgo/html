import { column, defineDb, defineTable } from 'astro:db';


interface ChartData {
  id: string;
  type: string;
  data: number[];
}

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
  ChartData: ChartData;

}

const ChartDataTable = defineTable({
  columns: {
    id: column.text(),
    type: column.text(),
    data: column.text(),
  },
});



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
  tables: { User: UserTable, ChartData:ChartDataTable }
}) as MyDatabase;

export default db;
