const mysql = require('mysql');
const conn = mysql.createConnection({
    host: 'sql5.freesqldatabase.com',
    user: 'sql5483588', /* MySQL User */
    password: 'hIMJajqRIQ', /* MySQL Password */
    database: 'sql5483588' /* MySQL Database */
  });
  conn.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected with App...');
  });
module.exports = conn;