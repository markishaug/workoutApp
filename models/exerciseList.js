module.exports = function(sequelize, DataTypes) {
    var ExerciseList = sequelize.define("ExerciseList", {
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
        bench: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        pullup_bar: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        gymnastic_rings: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        barbell: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        dumbells: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        kettlebell: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        roman_chair: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        ghd_bench: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        resistance_band: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        cable_machine: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        playground: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
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
    return ExerciseList;
};
