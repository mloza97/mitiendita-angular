const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist'));

app.listen(precess.env.PORT || 4200, function(){
  console.log('Console listening port 4200!');
});

//PathLocationStrategy
app.get('/*', function(req, res){
  res.sendFile(path.join(__dirname + '/dist/index.html'));
})
