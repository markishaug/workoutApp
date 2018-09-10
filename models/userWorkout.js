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
            type: DataTypes.INTEGER,
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
    UserWorkout.associate = function(models) {
        // We're saying that a UserWorkout should belong to a WorkoutHistory
        // A UserWorkout can't be created without an WorkoutHistory due to the foreign key constraint
        UserWorkout.belongsTo(models.WorkoutHistory, {
            foreignKey: {
              allowNull: false
            }
          });
    };
    return UserWorkout;
};