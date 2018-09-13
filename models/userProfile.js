module.exports = function(sequelize, DataTypes) {
    var UserProfile = sequelize.define("UserProfile", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        }
    });
    UserProfile.associate = function(models) {
        // Associating UserProfile with User profiles
        // When an UserProfile is deleted, also delete any associated User profiles
        UserProfile.hasMany(models.WorkoutHistory, {
          onDelete: "cascade"
        });
      };
    return UserProfile;
};