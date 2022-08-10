import { pool } from '../../../configs/db'

export default async function handler(req, res) {
  const [rows] = await pool.query(
    `select ped.numpedido, cli.nombre, cli.telefono, zon.descripcion, ped.unidades, art.pvp
    from pedidos ped
    inner join clientes cli on ped.codcliente = cli.codcliente
    inner join articulos art on ped.codartic = art.codartic
    inner join zona zon on cli.zonaventas = zon.zona`
  )
  console.log([rows])
  res.status(200).json({
    message: 'Retrieve orders ok',
    body: rows
  })
}
