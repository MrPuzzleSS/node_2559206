const express = require('express')
const path = require('path')
const hbs = require('hbs')

const app = express()

const puerto = 8080;

//Servidor de contenido estático
app.use(express.static('public'))
app.use(express.static('public/views/partials/css'))

//
app.set('views', path.join(__dirname+'/public/views'))
app.set('view engine', 'hbs')

//Configuracion del directiorio que guardara los archivos parcial hbs
hbs.registerPartials(__dirname + '/public/views/partials');

app.get('/', (req, res) => {
    //res.write('Home')
    //res.end()
    res.render('home',
    {
        home:'Home',
        nombre: 'Simon Ruiz'
    })
})

app.get('/productos', (req, res) => {
    //res.write('Home')
    //res.end()
    res.render('productos',
    {
        home:'Home',
        nombre: 'Simon R',
        rol: 'Admin',
        mensaje: 'El mejor'
    })  
})

app.listen(puerto, () => {
    console.log(`Escuchando por el puerto ${puerto}`)
})