const Multer = require('koa-multer')
const path = require('path')
const Jimp = require('jimp')
const {AVATAR_PATH, PICTURE_PATH} = require('../constants/file-path.js')

const avatarUpload = Multer({
    // dest: './uploads/avatar'
    dest: AVATAR_PATH
})
const avatarHandler = avatarUpload.single('avatar')


const pictureUpload = Multer({
    dest: PICTURE_PATH
})
const pictureHandler = pictureUpload.array('picture', 9)

const pictureResize = async (ctx, next) => {
    // 1.获取所有的图像信息
    const files = ctx.req.files
    console.log(files)
    // 2. 对图像进行处理(sharp/jimp)
    for (let file of files) {
        const destPath = path.join(file.destination, file.filename)
        Jimp.read(file.path).then(image => {
            image.resize(1280, Jimp.AUTO).write(`${destPath}-large`)
            image.resize(640, Jimp.AUTO).write(`${destPath}-middle`)
            image.resize(320, Jimp.AUTO).write(`${destPath}-small`)
        })
    }
    await next()
}

module.exports = {
    avatarHandler,
    pictureHandler,
    pictureResize
}
