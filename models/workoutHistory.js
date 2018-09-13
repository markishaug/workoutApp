module.exports = function(sequelize, DataTypes) {
    var WorkoutHistory = sequelize.define("WorkoutHistory", {
        date: DataTypes.DATE,
        exercise: {
            type: DataTypes.JSON,
            allowNull: false
        }
    });
    WorkoutHistory.associate = function(models) {
        // We're saying that a WorkoutHistory should belong to a user profile
        // A WorkoutHistory can't be created without a profile due to the foreign key constraint
        WorkoutHistory.belongsTo(models.UserProfile, {
          foreignKey: {
            allowNull: false
          }
        });
      };
    return WorkoutHistory;
};