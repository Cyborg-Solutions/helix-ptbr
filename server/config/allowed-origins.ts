const defaultOrigins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'http://localhost:3001',
    'http://10.11.0.4',
    'http://10.11.0.1',
    'http://10.10.0.1',
    'http://10.10.0.4',
    'http://localhost:8080',
    'http://172.16.183.69:8080',
    'http://helix.local',
    'http://helix.local:8080',
    'http://helix.local:3000',
    'http://helix.local:3001',
    'http://api.helix.local',
    'https://helix.cyborgsolutions.com.br',
    'https://www.helix.cyborgsolutions.com.br',
    'http://helix.cyborgsolutions.com.br',
];

// Read from environment variable if provided
const envOrigins = process.env.ALLOWED_ORIGINS?.split(',').map(origin => origin.trim()) || [];

// Debug logs
console.log('ALLOWED_ORIGINS env:', process.env.ALLOWED_ORIGINS);
console.log('Parsed env origins:', envOrigins);
console.log('Default origins:', defaultOrigins);

const allowedOrigins = [...defaultOrigins, ...envOrigins];

console.log('Final allowed origins:', allowedOrigins);

export default allowedOrigins;
