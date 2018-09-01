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
        bench: {
            type: DataTYpes.BOOLEAN,
            defaultValue: false
        },
        pullup_bar: {
            type: DataTYpes.BOOLEAN,
            defaultValue: false
        },
        gymnastic_rings: {
            type: DataTYpes.BOOLEAN,
            defaultValue: false
        },
        barbell: {
            type: DataTYpes.BOOLEAN,
            defaultValue: false
        },
        dumbells: {
            type: DataTYpes.BOOLEAN,
            defaultValue: true
        },
        ketlebell: {
            type: DataTYpes.BOOLEAN,
            defaultValue: true
        },
        roman_chair: {
            type: DataTYpes.BOOLEAN,
            defaultValue: false
        },
        ghd_bench: {
            type: DataTYpes.BOOLEAN,
            defaultValue: false
        },
        resistance_band: {
            type: DataTYpes.BOOLEAN,
            defaultValue: true
        },
        cable_machine: {
            type: DataTYpes.BOOLEAN,
            defaultValue: false
        },
        playground: {
            type: DataTYpes.BOOLEAN,
            defaultValue: false
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
    return ExerciseList;
};