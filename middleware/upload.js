var multer = require('multer');
var fs = require('fs');
var image_dir = './uploads/image';
var audio_dir = './uploads/audio';

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log("file______", file)
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
            if (!fs.existsSync(image_dir)) {
                fs.mkdirSync(image_dir);
            }
            cb(null, './uploads/image')
        } else if (file.mimetype == 'audio/x-flac') {
            if (!fs.existsSync(audio_dir)) {
                fs.mkdirSync(audio_dir);
            }
            cb(null, audio_dir)
        }
    },
    filename: (req, file, cb) => {
        console.log("file____", file);
        cb(null, file.originalname)
    }
});

var upload = multer({
    storage,
    fileFilter: function (req, file, callback) {
        if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg' || file.mimetype == 'audio/x-flac') {
            callback(null, true);
        } else {
            console.log('only image');
            callback(null, false);
        }
    },
    // limits: {
    //     fileSize: 1024 * 1024 * 2
    // }
})

module.exports = upload;