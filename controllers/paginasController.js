import { Testimonial } from '../models/Testimoniales.js';
import { Viaje } from '../models/Viaje.js';


/*.... Enlacen de nuestra Web ....*/
const paginaInico = async (req, res) => {

    const promiseDB = []

    promiseDB.push(Viaje.findAll({ limit: 3 }));
    promiseDB.push(Testimonial.findAll({ limit: 3 }));

    try {
        // Consultar
        
        const resultado = await Promise.all(promiseDB);
        res.render('home', {
            pagina: 'Inico',
            clase: 'home',
            viajes: resultado[0],
            testimoniales: resultado[1]
        });

    } catch (error) {
        console.log(error)

    }


};

const paginaNosotros = (req, res) => {
    res.render('nosotros', { pagina: 'nosotros' })
};


/**... Obtener todos los registros de la tabla Viajes ...*/ 
const paginaViajes = async (req, res) => {
    try {
        const viajes = await Viaje.findAll();
        res.render('viajes', { pagina: 'Proximos Viajes', viajes })
    } catch (error) {
        console.log(error);
    }
};

const paginaTestimonios = async (req, res) => {

    try {
        
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', { pagina: 'testimoniales', testimoniales })
    } catch (error) {
        
    }


};


/**... Obtener un viaje por el slug ...*/ 
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params
    try {
        const viaje = await Viaje.findOne({ where: { slug } });
        res.render('viaje', { pagina: 'Informacion Viaje', viaje });
    } catch (error) {
        console.log(error);
    }
}


export {
    paginaInico,
    paginaNosotros,
    paginaViajes,
    paginaTestimonios,
    paginaDetalleViaje

}