const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'))
let comments = [
    {
        "name": "Aiyan",
        "comment" : "YO YO HONEY SINGH!!"
    },
    {
        "name": "roman",
        "comment" : "YO YO roman Man!!"
    },
    {
        "name": "plural",
        "comment" : "provee it!!"
    }
]

app.get('/comments', (req, res) => { 
    res.render('/comments/index', {comments})
})


app.listen(3000, () => { 
    console.log("i am listening to port 3000");
})