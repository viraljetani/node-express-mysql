var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 
/*
  dbConnection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + dbConnection.threadId);
});

	dbConnection.query('SELECT * from tb_user', function (err, rows, fields) {
  	if (err) throw err

  		//console.log('The solution is: ', rows[0].ID);
  	//return json.Stringify(rows);
  	dbConnection.end();  */

pool.getConnection(function(err, connection){
  connection.query('SELECT * from tb_user',  function(err, rows){
  	if(err)	{
  		throw err;
  	}else{
  		//console.log( rows );
  			connection.release();
			res.render('userslist', {title:'Showing All Users',data:rows});
  	}
  });
  
  
	});
 

});

module.exports = router;
