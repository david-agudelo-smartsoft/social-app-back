const uploadModel = require("../models/upload");
const PUBLIC_URL = process.env.PUBLIC_URL;
/**
 * Obtiene una lista de elementos.
 * @param {object} req
 * @param {object} res
 */
const getItems = async (req, res) => {
    const data = await uploadModel.find({})
    res.send({ data });
};

/**
 * Obtiene un elemento específico.
 * @param {object} req
 * @param {object} res
 */
const getItem = (req, res) => {};

/**
 * Crea un nuevo elemento.
 * @param {object} req
 * @param {object} res
 */
const createItem = async (req, res) => {
    const { body, file } = req
    console.log(file);
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await uploadModel.create(fileData);
    res.send({data});
};

/**
 * Actualiza un elemento existente.
 * @param {object} req
 * @param {object} res
 */
const updateItem = (req, res) => {};

/**
 * Elimina elementos.
 * @param {object} req
 * @param {object} res
 */
const deleteItems = (req, res) => {};

module.exports = { getItems, getItem, createItem, updateItem, deleteItems };
