import { configDotenv } from 'dotenv';
import mysql from 'mysql2/promise'
configDotenv()

 async function connect() {
    const connection = await mysql.createConnection(process.env.DATABASEMYSQL);
    return connection
  }
  
  export default connect;