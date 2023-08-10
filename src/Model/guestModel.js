const { Model, DataTypes } = require("sequelize");

class GuestModel extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING
            },
            quantity: {
                type: DataTypes.INTEGER
            }
        }, {
            sequelize,
            tableName: 'guest',
            modelName: 'guest'
        })
    }
}

module.exports = GuestModel