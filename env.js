//Database connection app wide
var mysql = require('mysql');
global.dbConnection = mysql.createConnection({
	host: 'localhost'
	,user: 'root'
	,password: ''
	,database: 'nodemysql'

});