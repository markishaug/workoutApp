module.exports = function(sequelize, DataTypes) {
    var SelfAssess = sequelize.define("SelfAssess", {
        pushups: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        pullups: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        squats: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
    });
    return SelfAssess;
}