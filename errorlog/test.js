   var fs = require('fs');

   var op = function (flag) {
     var defer = q.defer();
     fs.readFile("a.txt", function (err, data) {
       if (err) defer.reject(err);
       else defer.resolve(data);
     });
     return defer.promise;
   }

   promise0.then(function (data) {
     console.log(data);
   })