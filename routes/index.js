import express from 'express';
import { guardarTestimonial } from '../controllers/testimonialController.js';
import {
    paginaInico,
    paginaNosotros,
    paginaTestimonios,
    paginaViajes,
    paginaDetalleViaje
} from '../controllers/paginasController.js';


const router = express.Router();

router.get('/', paginaInico);
router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje)

router.get('/testimoniales', paginaTestimonios);
router.post('/testimoniales', guardarTestimonial);
export default router;
