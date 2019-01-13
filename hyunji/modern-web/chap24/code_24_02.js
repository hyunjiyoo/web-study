var mysql = require('mysql');

// 데이터베이스와 연결합니다.
var client = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bokari1346',
    database: 'Company'
});

client.connect();

var mysql = 'SELECT * FROM products';

client.query(mysql, function (error, result) {
   if(error) {
       console.log('쿼리 문장에 오류가 있습니다.');
   } else {
       console.log(result);
   }
});

client.end();