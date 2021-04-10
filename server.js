const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist'));

//PathLocationStrategy
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'))
});

app.listen(process.env.PORT || 8080, function(){
  console.log('Console listening port 8080!');
});
