const connection = require('../app/database.js')

class AuthService {
    async checkResource(tableName, id, userId) {
        try {
            // const statement = 'select * from moment where id = ? and user_id = ?;'
            const statement = `select * from ${tableName} where id = ? and user_id = ?;`
            const result = await connection.execute(statement, [id, userId])
            return result[0].length === 0 ? false : true
        } catch (err) {
            console.log(err)
        }

    }
}


module.exports = new AuthService()
