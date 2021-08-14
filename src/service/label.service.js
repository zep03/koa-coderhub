const connection = require('../app/database.js')

class LabelService {
    async create(name) {
        try {
            const statement = `insert into label (name) values (?);`
            const [result] = await connection.execute(statement, [name])
            return result
        } catch (err) {
            console.log(err)
        }
    }

    async getLabelByName(name) {
        const statement =  `select * from label where name = ?;`
        const [result] = await connection.execute(statement, [name])
        return result[0]
    }
}


module.exports = new LabelService()
