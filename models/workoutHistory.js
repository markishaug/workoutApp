module.exports = function(sequelize, DataTypes) {
    var WorkoutHistory = sequelize.define("WorkoutHistory", {
        date: DataTypes.DATE
    });

    WorkoutHistory.associate = function(models) {
        // Associating WorkoutHistory with UserWorkouts
        WorkoutHistory.hasMany(models.UserWorkout);
    };
    return WorkoutHistory;
};