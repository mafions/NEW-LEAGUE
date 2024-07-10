import fetch from 'node-fetch';

export default async (req, res) => {
    const baseUrl = 'http://api.football-data.org/v4/';
    // Ajusta el path de la solicitud eliminando '/api/' del principio
    const path = req.url.replace('/api/', '');
    const url = `${baseUrl}${path}`;

    const apiKey = process.env.API_KEY;

    // Define una función auxiliar para configurar los headers de CORS
    const setCorsHeaders = (response) => {
        response.setHeader('Access-Control-Allow-Origin', '*');
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
    };

    try {
        const apiResponse = await fetch(url, {
            headers: { 'X-Auth-Token': apiKey },
        });
        const data = await apiResponse.json();

        // Configura los headers de CORS en la respuesta exitosa
        setCorsHeaders(res);
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        // Asegúrate de configurar los headers de CORS también en las respuestas de error
        setCorsHeaders(res);
        res.status(500).json({ error: 'Error al realizar la solicitud' });
    }
};
