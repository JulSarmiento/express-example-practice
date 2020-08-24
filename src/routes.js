const { request, response } = require('express');

/*
 * Se creó un router y lo importamos. 
 */
const router = require('express').Router();

const Phone = require('./models/phone');

// Lista de teléfonos
let phones = Phone.showPhones();

/**
 * Este método lista todos los telefonos que estan en array
 */
router.get('/phones', (request, response) => {
    response.json(phones);
})

/**
 * Este método muestra el objeto especificado por medio del parametro de URL ":id" (se reemplaza ese ":id" por el indice deseado).
 */
router.get('/phones/:id', (request, response) => {
    const {id} = request.params;
    // const id = request.params.id

    if(id > 0 && id < phones.length){
        response.json(phones[id]);
    } else {
        //204 recuerda que no existe contenido.
        response.status(204).send();
    }
        
})

router.post('/phones', (request, response) => {
    // Obtenemos los datos del body
    const {brand, name, capacity, price} = request.body;
    
    // Creamos un nuevo Phone
    const phone = new Phone(brand, name, capacity, price);

    // Lo guardamos en la lista de teléfonos
    phones.push(phone);

    // Devolvemos un 201 (Created) y el phone creado
    response.status(201).json(phone);
})

router.patch('./update/name', (request, response) => {
    const {name} = request.params;


})

/**
 * Aqui se exporta la ruta.
 */
module.exports = router;