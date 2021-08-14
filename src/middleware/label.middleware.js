const service = require('../service/label.service.js')

const verifyLabelExists = async (ctx, next) => {
    // 1.取出要添加的所有的标签
    const {labels} = ctx.request.body
    // 2.判断每一个标签在label表中是否存在
    const newLabels = []
    for (let name of labels) {
        const labelResult = await service.getLabelByName(name)
        const label = {
            name: name
        }
        if (!labelResult) {
            // label本身不存在，则创建标签数据
            const result = await service.create(name)
            label.id = result.insertId
        } else {
            label.id = labelResult.id
        }
        newLabels.push(label)
    }
    console.log(newLabels)
    ctx.labels = newLabels
    await next()
}

module.exports = {
    verifyLabelExists
}
