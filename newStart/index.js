const express = require('express');
const app = express();
let count = 0;
app.listen(3000, () => (
    console.log("listening to port 3000")
))

app.use(() => {
    ++count
    console.log("visited " + count)
})