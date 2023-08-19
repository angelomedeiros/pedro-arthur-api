const { Model, DataTypes } = require("sequelize");

class GuestModel extends Model {
    static init(sequelize) {
        super.init({
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING
            },
            quantity: {
                type: DataTypes.INTEGER
            },
            isConfirmed: {
                type: DataTypes.INTEGER
            },
            suggestion: {
                type: DataTypes.STRING
            }
        }, {
            sequelize,
            tableName: 'guest',
            modelName: 'guest'
        });
    }
}

module.exports = GuestModel;