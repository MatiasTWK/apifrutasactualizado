const frisby = require('frisby');

//Testing GET
it ('GET should return a status of 200 OK', function () {
  return frisby
    .get('http://localhost:9000/api/frutas')
    .expect('status', 200);
});

//Testing POST
it (' POST Debe crearse un dato y no tener errores', function () {
  return frisby
    .post('http://localhost:9000/api/frutas', {
      nombre: 'Aceitunas (20 unidades)',
      precio: 900
    })
    .expect('status', 200);
});

//Testing PUT
it ('PUT Debe actualizarse el dato', function () {
    return frisby
      .put('http://localhost:9000/api/frutas/637cf1c657789025ee705714', {
        nombre: 'Papas x 3 kilos',
        precio: 2670
      })
      .expect('status', 200);
  });

//Testing DELETE
it ('DELETE Debe borrarse el dato con un status 200', function () {
    return frisby
      .del('http://localhost:9000/api/frutas/637cf1c657789025ee705714')
      .expect('status', 200);
  });


