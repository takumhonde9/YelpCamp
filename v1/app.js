const app = require('express')()
const bodyParser = require('body-parser')
const campgrounds = [
	{name: 'Salmon Creek', image: 'http://backpackingmastery.com/wp-content/uploads/2017/04/Go-Camping-810x608.jpg'},
	{name: 'Granet Hill', image: 'http://backpackingmastery.com/wp-content/uploads/2017/04/Go-Camping-810x608.jpg'},
	{name: 'Mason Views', image: 'http://backpackingmastery.com/wp-content/uploads/2017/04/Go-Camping-810x608.jpg'}
]

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
	/* Landing page */
	res.render('landing')
})

app.get('/campgrounds', (req, res) => {
	res.render('campgrounds', {campgrounds})
})

app.get('/campgrounds/new', (req, res) => {
	/* FORM for sending data */
	res.render('new')
})

app.post('/campgrounds', (req, res) => {
	const name = req.body.name
	const image = req.body.image
	campgrounds.push({name, image})
	// show the campgrounds
	res.redirect('/campgrounds')

})

app.listen(3000, () => {
	console.log('YelpCamp server listening on port 3000')
})