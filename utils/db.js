import mysql from "mysql2/promise";

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_user_api",
  port: 3306,
});

export default dbPool;
