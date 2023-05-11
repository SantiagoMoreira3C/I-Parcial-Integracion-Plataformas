const {app} = require('./index');

const server = app.listen(process.env.PORT, ()=>{
  console.log(`Servidor iniciado`);
})


module.exports= server