import cors, { CorsOptions } from 'cors';
import allowedOrigins from './allowed-origins';
import logger from '../tools/logger';

console.log('🚀 CORS CONFIG LOADED - DEBUG MODE ENABLED 🚀');
console.log('🚀 ALLOWING ALL ORIGINS TEMPORARILY 🚀');

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        console.log('🚀 CORS DEBUG - Origin received:', origin);
        console.log('🚀 CORS DEBUG - Allowing ALL origins for testing');
        
        // Temporariamente permitir todas as origens para debug
        callback(null, true);
        
        // Código original comentado:
        // if (allowedOrigins.indexOf(origin ?? '') !== -1 || !origin) {
        //     console.log('CORS check - Origin allowed:', origin);
        //     callback(null, true);
        // } else {
        //     console.log('CORS check - Origin rejected:', origin);
        //     logger.error(`Origin ${origin} not allowed by CORS`);
        //     callback(new Error('Not allowed by CORS'));
        // }
    },
    optionsSuccessStatus: 200,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
};

export default () => cors(corsOptions);
