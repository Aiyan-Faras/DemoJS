const express = require('express');
const app = express();
let count = 0;
app.listen(3000, () => (
    console.log("listening to port 3000")
))

// app.use(() => {
//     ++count
//     console.log("visited " + count)
// })

app.get('/', (req, res) => {
    res.send(`<h1>Welcome this is my index page</h1>`)
    console.log(req);
})

app.get('/:anything/:more', (req, res) => {
    console.log(req);
    const { anything , more} = req.params;
    res.send(`<h1>welcome to ${anything} and ${more} page<h1>`)
})