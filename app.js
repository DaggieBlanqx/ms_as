// require app dependancy modules
const express =  require('express'); //importing expressjs
var path = require('path')

const app = express()


// set an EJS(Embedded JavaScript) View Engine
app.set(`view engine`,`ejs`)

// set a folder for our views
app.set('views',path.join(__dirname, `views`))
 
 
// middleware for static resources eg images,css files etc
// Set Static Path
// public is the name of the folder , you can name it as you want
app.use(express.static(path.join(__dirname,`public`)))



app.get('/test',(req,res)=>{
	res.send('Everything Working  -  Proceed with the code');
	res.end()
})


app.get('/exit',(req,res)=>{
	res.send('Exiting ...')
	res.end()
	process.exit()
})


app.get('/',(req,res)=>{
	res.render(`index`,{})
	res.end()
})

app.get('/pingpong',(req,res)=>{
	res.render(`ping_1`,{})
	res.end()
})

app.get('/pingpong/theme2',(req,res)=>{
	res.render(`ping_2`,{})
	res.end()
})

app.get('/menu_restuarant',(req,res)=>{
	res.render('restuarant',{})
	res.end()

})



// configure port which process will run into
var port = 55
app.set('port', (process.env.PORT || port))
// Turn on our server
app.listen(app.get('port'), ()=>{

  console.log('Node app is running on port', app.get('port'))

})