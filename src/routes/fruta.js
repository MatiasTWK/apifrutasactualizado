const express = require('express');
const frutaSchema = require('../models/frutas');

const router = express.Router();

//RUTAS
router.post('/frutas', (req, res) => {
    const fruta = frutaSchema(req.body);
    fruta
        .save()
        .then((dato) => res.json(dato))
        .catch((error) => res.json({ message: error }));
});

//OBTENER USUARIOS
router.get('/frutas', (req, res) => {
    frutaSchema
        .find()
        .then((dato) => res.json(dato))
        .catch((error) => res.json({ message: error }));
});


//OBTENER USUARIO POR ID
router.get('/frutas/:id', (req, res) => {
    const { id } = req.params;
    frutaSchema
        .findById(id)
        .then((dato) => res.json(dato))
        .catch((error) => res.json({ message: error }));
});

//ACTUALIZAR UN USUARIO
router.put('/frutas/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, precio } = req.body;
    frutaSchema
        .updateOne({ _id: id }, { $set: { nombre, precio } })
        .then((dato) => res.json(dato))
        .catch((error) => res.json({ message: error }));
});


//ELIMINAR UN USUARIO
router.delete('/frutas/:id', (req, res) => {
    const { id } = req.params;
    frutaSchema
        .deleteOne({ _id: id })
        .then((dato) => res.json(dato))
        .catch((error) => res.json({ message: error }));
});
module.exports = router;