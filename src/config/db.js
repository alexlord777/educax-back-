const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');


// const sequelize = new Sequelize('softedu', 'postgres', '31416', {
//     host: 'localhost',
//     dialect: 'postgres',
    
//         logging: false, // set to console.log to see the raw SQL queries
//         native: false, // lets Sequelize know we can use pg-native for ~30% more speed
//        // Utilizamos 'postgres' para PostgreSQL
//   });

//const url='postgres://postgres:31416@localhost:5432/registro';
const url='postgres://registro_sqha_user:7FMYvHMgl9SQpGjXVTVZHyqYe3GGdVQ0@dpg-cmab3kvqd2ns738tje6g-a/registro_sqha'
 const sequelize = new Sequelize(url,{
     logging: false
 })

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, './models'))
    .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, './models', file)));
    });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

//const { Users,Contenido,Ideas,Investigaciones,Proyects,Tasks} = sequelize.models;

module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};