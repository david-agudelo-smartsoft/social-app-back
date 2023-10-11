const multer = require('multer');
const upload = multer.diskStorage({
    destination: function (req, file, cb) {
        const pathUpload = `${__dirname}/../upload`;
        cb(null, pathUpload)
    },
    filename: function (req, file, cb ) {
        const ext = file.originalname.split('.').pop();
        const filename = `file-${Date.now()}.${ext}`;
        cb(null, filename)
    },
});

const uploadMiddleware = multer({ storage: upload });

module.exports = uploadMiddleware;