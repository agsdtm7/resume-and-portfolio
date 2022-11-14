const path = require('path')
const express = require ('express');
const { Server } = require('http');
const app = express();

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.static(publicDirectoryPath))

app.set('view engine', 'hbs')

app.get('/', function(req, res){
    res.render("index", {
        title: "home",
        name: "agus"
    })
})

app.get('/portfolio', function(req, res){
    //res.send("hello from portfolio")
    res.render("portfolio")
})

// app.listen(3000, ()=>{
    
// })


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {

})