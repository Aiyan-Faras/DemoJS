const fs = require('fs');

try { 
    fs.mkdirSync('Myproject');
    fs.writeFileSync('Myprojlect/index.html');
    fs.writeFileSync('Myproject/app.js');
    fs.writeFileSync('Myproject/style.css');
} catch (err) { 
    console.log("something went wrong")
}