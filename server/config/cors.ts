import cors, { CorsOptions } from 'cors';
import allowedOrigins from './allowed-origins';
import logger from '../tools/logger';

const corsOptions: CorsOptions = {
    origin: (origin, callback) => {
        console.log('CORS check - Origin received:', origin);
        console.log('CORS check - Allowed origins:', allowedOrigins);
        
        if (allowedOrigins.indexOf(origin ?? '') !== -1 || !origin) {
            console.log('CORS check - Origin allowed:', origin);
            callback(null, true);
        } else {
            console.log('CORS check - Origin rejected:', origin);
            logger.error(`Origin ${origin} not allowed by CORS`);
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept', 'Origin'],
};

export default () => cors(corsOptions);
