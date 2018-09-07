module.exports = function(sequelize, DataTypes) {
    var UserProfile = sequelize.define("UserProfile", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        age: {
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
    return UserProfile;
};