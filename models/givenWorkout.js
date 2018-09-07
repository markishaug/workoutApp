module.exports = function(sequelize, DataTypes) {
    var GivenWorkout = sequelize.define("GivenWorkout", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        sets: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        reps: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        }
    });
    return GivenWorkout;
};
