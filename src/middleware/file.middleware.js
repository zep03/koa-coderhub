const Multer = require('koa-multer')
const {AVATAR_PATH} = require('../constants/file-path.js')
const avatarUpload = Multer({
    // dest: './uploads/avatar'
    dest: AVATAR_PATH
})
const avatarHandler = avatarUpload.single('avatar')


module.exports = {
    avatarHandler
}
