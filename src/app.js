const express=require('express')
const morgan = require('morgan')
const path=require('path')
const app =express()
const mysql =require('mysql')
const myConnection=require('express-myconnection')
const bodyParser = require('body-parser');
//importando rutas
const personasRoutes=require('./routes/rutas')
//importando
//config express
app.set('port', process.env.PORT||3000)
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))

//funciones que se ejecuten anted de la peticion del usuario
//middleware
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password: '2711DSCg*',
    port:3306,
    database: 'citas'
},'single'))

app.use(bodyParser.urlencoded({
    extended: false
 }));

//routes
app.use('/',personasRoutes)



//static files
app.use(express.static(path.join(__dirname,'public')))


//iniciando servidor
app.listen(app.get('port'), ()=>{
    console.log('server on port 3000')
});