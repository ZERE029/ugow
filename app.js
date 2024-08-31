const express = require('express');
const app = express();

app.use(express.json());



app.get("/", (req, res) => {
    res.send("Bem vindo a nossa API.");
});



app.listen(3333, ()=>{
    console.log("servidor iniciando na parte da 3333: http://localhost:3333");
});



app.get("/users/:id", (req, res) =>{
const {id} = req.params;
const {sit} = req.query;

return res.json({
    id,
    name: "matheus", 
    email: "matheusvital@gmail.com",
    sit
});
})



app.post("/users", (req, res) =>{
var {name, email } = req.body;

return res.json({
    name: name,
    email: email
});
})


app.put("/users/:id", (req, res) =>{
const {id}= req.params;
const {_id, name, email,  situationId}=req.body;

return res.json({id, _id, name, email, situationId});
});


app.delete("/users:id", (req, res) =>{
const {id}= req.params;

return res.json({id});
});

