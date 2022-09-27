const figlet = require('figlet');

figlet("Hello Dear!", function (err, data) {
    if (err) { 
        return;
    }
    console.log(data);
})