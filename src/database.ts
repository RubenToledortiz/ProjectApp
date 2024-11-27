import mysql, { Connection } from 'promise-mysql'

import keys from './keys'

//crear la conexion a la base de datos
const pool = mysql.createPool(keys.database);
//conectarse
pool.getConnection().then(Connection => {

    pool.releaseConnection(Connection)
    console.log("Db is connected")
})

export default pool