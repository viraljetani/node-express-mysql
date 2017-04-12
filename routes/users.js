var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
 
  dbConnection.connect();
	dbConnection.query('SELECT * from tb_user', function (err, rows, fields) {
  	if (err) throw err

  		//console.log('The solution is: ', rows[0].ID);
  	//return json.Stringify(rows);
  	dbConnection.end()
  	res.render('userslist', {title:'Showing All Users',data:rows});
	});
 

});

module.exports = router;
