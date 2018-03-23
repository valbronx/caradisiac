var express = require('express');
var app     = express();
var fs      = require('fs');
var elasticsearch = require('elasticsearch');

var log = console.log.bind(console);

var client = new elasticsearch.Client({
  host: 'localhost:9200',
  log: 'trace'
});


app.get('/cars', function(req, res){
function search()
{
  //Only the first one
  return client.search({
      index: "cars",
      type: 'cars',
      body: {
         sort: [{ "volume": { "order": "desc" } }],
         size: 1,
      }
  });
}
console.log(search());

});










app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;