const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleUpload');
const { createItem } = require('../controller/upload');



//router.route('/uploadAvatar').post(avatar);
router.post("/", uploadMiddleware.single("avatar"), createItem);



module.exports = router;