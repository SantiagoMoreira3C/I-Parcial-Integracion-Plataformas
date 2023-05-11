const request = require('supertest');
const {app, controlactivo} = require('../index');
const server = require('../server');


describe('GET /', () => {
    afterAll((done) => {
        server.close(done);
    });
  
    it('Debe consultar y devolver un array de controlactivos', async () => {
      const response = await request(app).get('/controlactivo');
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });






describe('POST /controlactivo', () => {
  beforeAll(() => {
    server.listen(process.env.PUERTO); 
  });

  afterAll((done) => {
    server.close(done);
});
    beforeEach(() => {
      
      controlactivo.length = 0;
    });
  
    it('debería agregar una nueva controlactivo', async () => {
      const body = {
        id:"3",
        fecha: "10/05/2023",
        persona:"Santiago Gustavo",
        tiempo:"3 años"
      };
  
      const response = await request(app).post('/controlactivo').send(body);
  
      expect(response.status).toBe(201);
      expect(response.body).toEqual({
        message:'saved control activos', body
      });
  
      expect(controlactivo).toHaveLength(1);
      expect(controlactivo[0]).toEqual(body);
    });
  });
  
  

  describe('DELETE /controlactivo/:id', () => {
  beforeAll(() => {
    server.listen(process.env.PUERTO); 
  });

  afterAll((done) => {
    server.close(done); 
  });

  beforeEach(() => {
    controlactivo.length = 0; 
  });

  it('debería eliminar un controlactivo existente', async () => {
    
    const controlactivoEjemplo = {
      id:"3",
      fecha: "10/05/2023",
      persona:"Santiago Gustavo",
      tiempo:"3 años"
    };
    controlactivo.push(controlactivoEjemplo);

    
    
    const response = await request(app).delete(`/controlactivo/${controlactivoEjemplo.id}`);


    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      message: 'Deleted Activo!' 
    });

    expect(controlactivo).toHaveLength(1);
  });


});