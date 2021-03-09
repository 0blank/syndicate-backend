const express = require('express');
const router = express.Router();

const SongController = require('../controllers/SongsController');
const upload = require('../middleware/upload');

router.get('/', SongController.index);
router.get('/:id', SongController.show);
router.post('/store', upload.single('track'), SongController.store);
router.put('/update', upload.fields([{
    name: 'track', maxCount: 1
}, {
    name: 'image', maxCount: 1
}, {
    name: 'banner', maxCount: 1
}]), SongController.update);
router.delete('/:id', SongController.deleteSong);

module.exports = router;