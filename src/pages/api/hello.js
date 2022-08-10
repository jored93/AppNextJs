import { pool } from '../../configs/db'

export default async function handler(req, res) {
  const [rows] = await pool.query('select * from pedidos')
  console.log([rows])
  res.status(200).json({
    message: 'Retrieve orders ok',
    body: rows[0]
  })
}
