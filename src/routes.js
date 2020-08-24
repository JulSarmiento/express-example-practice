const { request, response } = require('express');

/*
 * Se creó un router y lo importamos. 
 */
const router = require('express').Router();

const Phone = require('./models/phone');

// Lista de teléfonos
let phones = Phone.showPhones();

/**
 * Este método lista todos los telefonos que estan en array.
 * un "query param" son parametros opcionales que pueden venir o no en una peticion (url).
 * Los query params los coloca el usuario, yo solo los proceso.
 * Para que el usuario lo sepa, debo mandar una documentación. 
 */
router.get('/phones', (request, response) => {

    let items = phones;
    
    if(request.query){
        console.log(request.query);
        const {maxPrice, order} = request.query;

        items = items.filter((phone) => {
            if(maxPrice){
                return phone.price <= maxPrice
            }

            return true
        });

        if (order) {
            if(order !== '0' && order !== '1'){
               return response.status(400).send(`Order ${order} is invalid`);

            }else if(order === '0') {
                items = items.sort((a, b) => { a.serial - b.serial });
                console.log('ordenando ascendiente')

            }else if(order === '1'){
                items = items.sort((a, b) => { b.serial - a.serial });
                console.log('ordenando descendiente')
            }
        }

    } 

    response.json(items);

})

/**
 * Este método muestra el objeto especificado por medio del parametro de URL ":id" (se reemplaza ese ":id" por el indice deseado).
 */
router.get('/phones/:id', (request, response) => {
    const {id} = request.params;
    // const id = request.params.id

    if(id >= 0 && id < phones.length){
        response.json(phones[id]);
    } else {
        //204 recuerda que no existe contenido.
        response.status(204).send();
    }
        
})

/*
 * Este método nos permite agregar nuevos telefonos en base a sus atributos.
 * Primero llamamos los atributos de la clase mediante al request.body
 * Con ellos, creamos un nuevo phone y lo agregamos al array mediante .push().
 * Finalmente respondemos con el objeto agregado y el estatus 201 (creado) 
 */
router.post('/phones', (request, response) => {
    const {serial, brand, name, capacity, price} = request.body;
    const phone = new Phone(serial, brand, name, capacity, price);

    phones.push(phone);
    response.status(201).json(phone);
})

/*
 * El método PATCH permite actualizar o modificar. 
 * Este método permite modificar partial o totalmente el elemento seleccionado mediante su índice. 
 * Se realiza (separan y luego unen) mendiante spread operator para que permita realizar la modificación de los campos (parametros) existentes y,
 * si se desea, agregar otros.
 */
router.patch('/phones/:id', (request, response) => {
    const {id} = request.params;
    const phone = phones[id]
    
    if(phone){
        phones[id] = {...phone, ...request.body};
        response.json(phones[id]);
    } else {
        response.status(204).send();
    }
})

/*
 * Este método elimina el elemento seleccionado mediante su posición en el array. 
 * El estatus 202 representa "aceptado"
 */
router.delete('/phones/:id', (request, response) => {
    const {id} = request.params;

    if(id >= 0 && id < phones.length){
        phones.splice(id, 1)
        response.status(202).json(phones);
        
    } else {
        response.status(204).send();
    }
})



/**
 * Aqui se exporta la ruta.
 */
module.exports = router;