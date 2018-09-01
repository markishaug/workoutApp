module.exports = function(sequelize, DataTypes) {
    var UserWorkout = sequelize.define("UserWorkout", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        sets: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        reps: {
            type: DataTypes.INT,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        }
    });
    return UserWorkout;
};