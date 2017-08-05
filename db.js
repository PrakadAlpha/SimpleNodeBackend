const mysql = require('mysql');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database :'nodemysql'
});

db.connect(function(err) {
  if(err){
    console.log(err);
  }else {
    console.log('Sql connected...');
  }
});

module.exports = db;
