import { createPool } from 'mysql2/promise'
const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'T3l3f.2020C',
  port: 3306,
  database: 'UC'
})

pool.getConnection(err => {
  if (err) {
    console.log('Error conectando con la DB')
  }
  console.log('Conectado a la DB')
})

export { pool }
