const express = require('express');
const bodyParser = require('body-parser');
const mysql = require ('mysql');
const app = express();
const port = process.env.PORT || 5500
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.static('public'))
// //MySQL
var connection = mysql.createConnection({
  host     : '',
  user     : 'id18072817_dbproject',
  password : '$p4>13Bbr*~+q-bT'
});
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});


//login post data
app.post('/loginme', (req, res) => {
    res.send("TestConnectionSuccess");
})
//Listen on environment port or 5500
app.listen(port, () => console.log('Listen on port ${port}'))
