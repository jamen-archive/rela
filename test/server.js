'use strict';

module.exports = function(){
  const Server = require('../lib/server'),
        test = new Server();

  test.on('connection', function(client){
    client.on('test', function(data){
      console.log(data);
    });

    client.on('_error', function(a){
      console.log(a);
    });
  });

  test.listen(8000);
};
