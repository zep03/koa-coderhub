const connection = require('../app/database.js')

class MomentService {
    async create(userId, content) {
        const statement = `insert into moment (content, user_id) values(?, ?);`
        const result = await connection.execute(statement, [content, userId])
        console.log(result)
        return result[0]
    }
}


module.exports = new MomentService()
