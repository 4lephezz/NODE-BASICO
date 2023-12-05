/* var nome = "alephe";
console.log(nome);

const superheroes = require('superheroes');
 
superheroes.all;

 
var heroi = superheroes.random();





const supervillains = require('supervillains');

supervillains.all;

var villain = supervillains.random();

console.log(heroi + " vs " + villain);
*/




const express = require('express');
const app = express();

var porta = 8080;

 app.listen(8080, ()=>{
console.log("Servidor ligado na porta http://locashost:" + porta)

 });
 app.get("/", (req, res)=>{

res.send("Olá, seja bem-vindo")

})

app.post("/envio", (req, res) =>{
console.log(req)
res.send("Obrigado por enviar os dados")

})