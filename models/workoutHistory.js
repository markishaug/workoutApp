module.exports = function(sequelize, DataTypes) {
    var WorkoutHistory = sequelize.define("WorkoutHistory", {
        date: DataTypes.DATE,
        exercise: {
            type: DataTypes.JSON,
            allowNull: false
        }
    });
    return WorkoutHistory;
};