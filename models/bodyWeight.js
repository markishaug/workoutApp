module.exports = function(sequelize, DataTypes) {
    var BodyWeight = sequelize.define("BodyWeight", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 30]
            }
        },
        legs: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        posterior: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        back: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        biceps: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        triceps: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        shoulders: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        chest: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        core: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        compound: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        accessory: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }

    });
    return BodyWeight;
};
