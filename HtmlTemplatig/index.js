const express = require('express')
const app = express()
const data = require('./data.json')
app.set('view engine','ejs')
app.use(express.static('public'))


app.get('/', (req, res) => {
	const rand = Math.floor(Math.random()* 10);
	res.render('index', { random : rand});
})

app.get('/:subreddit', (req, res) => {
	const { subreddit } = req.params;
	const type = data[subreddit];
	res.render('chicken', {...type } )
 })

app.listen(3000,() =>{
	console.log("Hey there")
})

