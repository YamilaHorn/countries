const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
    sequelize.define("Activity",{
        id:{
            type: DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            primaryKey:true,
            allowNull:false
        },
        name:{
            type: DataTypes.STRING,
            allowNull:false
        },
        difficulty:{
            type: DataTypes.ENUM('1','2','3','4','5'),
            allowNull:false
        },
        duration:{
            type: DataTypes.ENUM('1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'),
            allowNull:true,
        },
        season:{
            type: DataTypes.ENUM('Verano','Otoño','Invierno','Primavera'),
            allowNull:false
        }
    },{timestamps:false})
}
// const { DataTypes } = require('sequelize');

// module.exports = (sequelize) => {
//     // defino el modelo
//     sequelize.define('Activity', {
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             allowNull: false,
//             primaryKey: true
//         },
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         difficulty: {
//             type: DataTypes.INTEGER,
//             allowNull: false
//         },
//         duration: {
//             type: DataTypes.INTEGER
//         },
//         season: {
//             type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
//             allowNull: false
//         }
//     },{timestamps:false})
// };