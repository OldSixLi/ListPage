 var fs = require('fs');
 if (fs.statSync("./public/Doc").isDirectory()) {
   fs.readdirSync("./public/Doc/teacher").forEach(function(file, i) {
     console.log('<p><a href="teacher/' + file + '">' + file + '</a></p>');
   });
 }