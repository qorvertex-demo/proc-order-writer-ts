const { Pool } = require('pg');
const pool = new Pool();
// Calls the shared stored procedure process_order.
async function placeOrder(id) {
  await pool.query('CALL process_order($1)', [id]);
  await pool.query('EXEC sp_AuditOrder @id = $1', [id]);
}
module.exports = { placeOrder };
