var express = require('express');
var app     = express();
var fs      = require('fs');

app.get('/test', function(req, res){

const {getBrands} = require('node-car-api');

async function writeBrands () {
  const brands = await getBrands();
  fs.appendFile('brands.json', JSON.stringify(brands), function(err){
    	  console.log('File successfully written! - Check your project directory for the output.json file');
  	  })
}


 function writeModels () {
  var brands = JSON.parse(fs.readFileSync("brands.json"));
  brands.forEach(function(brand) {

  	const {getModels} = require('node-car-api');

    async function printtt () {
      const models = await getModels(brand);
  		console.log(models);

  		if (models.length > 0){
  			fs.appendFile('allmodels.json', JSON.stringify(models), function(err){console.log('File successfully written! - Check your project directory for the output.json file');})
  		}
    }

	printtt();
});

}





//writeBrands();
setTimeout(writeModels, 3000);



});

app.listen('8081');
console.log('Magic happens on port 8081');
exports = module.exports = app;