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
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        reps: {
            type: DataTypes.ENUM,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        weight: {
            type: DataTypes.ENUM,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        }
    });
    return UserWorkout;
};
