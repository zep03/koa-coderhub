const connection = require('../app/database.js')
class MomentService {
    async create(userId, content) {
        const statement = `insert into moment (content, user_id) values(?, ?);`
        const result = await connection.execute(statement, [content, userId])
        return result[0]
    }
    async getMomentById(momentId) {
        const statement = `SELECT m.id, m.content, m.createAt, m.updateAt as updateTime,
                        JSON_OBJECT('id', u.id, 'name', u.name, 'avatarUrl', u.avatar_url) as author
                        FROM moment as m
                        left join user as u on m.user_id = u.id
                        where m.id = ?;`
        const result = await connection.execute(statement, [momentId])
        return result[0][0]
    }

    async getMomentList(offset, size) {
        const statement = `SELECT m.id, m.content, m.createAt, m.updateAt as updateTime,
                        JSON_OBJECT('id', u.id, 'name', u.name, 'avatarUrl', u.avatar_url) as author,
                        (select count(*) from comment as c where c.moment_id = m.id) as commentCount,
                        (select count(*) from moment_label as ml where ml.moment_id = m.id) as labelCount 
                        FROM moment as m
                        left join user as u on m.user_id = u.id
                        limit ?, ?;`
        const result = await connection.execute(statement, [offset, size])
        return result[0]
    }

    async update(content, momentId) {
        const statement = `update moment set content = ? where id = ?;`
        const result = await connection.execute(statement, [content, momentId])
        return result[0]
    }

    async remove(momentId) {
        const statement = `delete from moment where id = ?;`
        const result = await connection.execute(statement, [momentId])
        return result[0]
    }

    async hasLabel(momentId, labelId) {
        const statement = `select * from moment_label where moment_id = ? and label_id = ?;`
        const [result] = await connection.execute(statement, [momentId, labelId])
        return result[0] ? true : false
    }

    async addLabel(momentId, labelId) {
        const statement =  `insert into moment_label (moment_id, label_id) values (?, ?);`
        const [result] = await connection.execute(statement, [momentId, labelId])
        return result
    }

    async getLabels(momentId) {
        const statement =  `select * from moment as m
                            left join moment_label ml on m.id = ml.moment_id
                            left join label l on ml.label_id = l.id
                            where m.id = ?;`
        const [result] = await connection.execute(statement, [momentId])
        return result
    }
}

module.exports = new MomentService()
