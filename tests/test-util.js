var request = require('request');


var requestManager = function(url,cb){
    request(url, { json: true }, (err, res, body) => {
        if (err) {
             return console.log(err); 
        }
        return cb(res,body)
      });
}

module.exports = {
    requestManager:requestManager
}

