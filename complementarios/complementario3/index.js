require('dotenv').config();
const express = require('express')
const cors  =require('cors');

const app =  express();
app.use(cors()).use(express.json())
app.use('/public',  express.static(__dirname+'/public'))


let controlactivo = [];


app.get('/controlactivo', async (req, res) => {
    console.log('TRYING TO FETCH Control de activos');
    res.status(200).send(controlactivo);
      console.log('FETCHED Control de activos');
});



app.post('/controlactivo', async (req, res) => {
    console.log('TRYING TO STORE Control de activos');
    const {body} = req;

    controlactivo.push(body)

    res
        .status(201)
        .send({ message:'saved control activos', body});
      console.log('STORED NEW Control de activos');

});

app.delete('/controlactivo/:id', async (req, res) => {
    console.log('TRYING TO DELETE Activo');
    const {id} =  req.params;
    controlactivo = controlactivo.filter(control => control.id !== id);
      res.status(200).send({ message: 'Deleted Activo!' });
      console.log('DELETED Activo');  
});




module.exports ={app, controlactivo}















