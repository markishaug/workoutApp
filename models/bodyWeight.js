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
            type: DataTYpes.BOOLEAN,
            defaultValue: false
        },
        posterior: {
            type: DataTYpes.BOOLEAN,
            defaultValue: false
        },
        back: {
            type: DataTYpes.BOOLEAN,
            defaultValue: false
        },
        biceps: {
            type: DataTYpes.BOOLEAN,
            defaultValue: false
        },
        triceps: {
            type: DataTYpes.BOOLEAN,
            defaultValue: false
        },
        shoulders: {
            type: DataTYpes.BOOLEAN,
            defaultValue: false
        },
        chest: {
            type: DataTYpes.BOOLEAN,
            defaultValue: false
        },
        core: {
            type: DataTYpes.BOOLEAN,
            defaultValue: true
        },
        compound: {
            type: DataTYpes.BOOLEAN,
            defaultValue: false
        },
        accessory: {
            type: DataTYpes.BOOLEAN,
            defaultValue: false
        }

    });
    return BodyWeight;
};