// import config server
var app = require('./config/server');

// set server listening port
const port = 5000
app.listen(port, () => {
  console.log('Server ON\n see in: http://localhost:'+port)
})
