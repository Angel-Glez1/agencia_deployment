import Sequelize from "sequelize";
import db from "../config/db.js";



//titulo	precio	fecha_ida	fecha_vuelta	imagen	descripcion	disponibles	slug
export const Testimonial = db.define('testimoniales', {
    nombre: { type: Sequelize.STRING },
    correo: { type: Sequelize.STRING },
    mensaje: { type: Sequelize.STRING }
});


