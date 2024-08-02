import { Stream, Writer } from "node_modules/@rdfc/js-runner";
import { Readable } from "stream";
import rdf from "rdf-ext";

@param incoming 
@param outgoing 
@param mime 


export function processor(
    incoming: Stream<string>,
    outgoing: Writer<string>,
    mime = "text/turtle",
): 






















/*
const express = require('express');
const port = 5000;
const app = express();

app.get('/', async (req, res) => {
    try {
        const url = 'https://waterkwaliteit-brugge-ldes.kindflower-25e41809.westeurope.azurecontainerapps.io/Waterkwaliteit/latestView';

        // Dynamically import node-fetch
        const fetch = (await import('node-fetch')).default;
        
        const response = await fetch(url);

        // Check if the response is OK (status 200-299)
        if (!response.ok) {
            throw new Error(`Network response was not ok, status: ${response.statusText}`);
        }

        // Check content type to decide how to handle the response
        const contentType = response.headers.get('content-type');
        let data;

        if (contentType && contentType.includes('application/json')) {
            data = await response.json();
        } else {
            data = await response.text();
        }

        res.send(data);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send({ error: 'Failed to fetch data' });
    }
});

app.listen(port, () => {
    console.log(`Server started and is listening to port ${port}`);
});
*/