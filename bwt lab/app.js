const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Welcome to home page!');
    });

app.get('/error', (req, res) => {
    throw new Error('something went wrong!');
    });
    
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500).send('Internal Server Error');
    });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
    });
    