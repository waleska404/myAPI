const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello API');
})

app.listen(port, () => {
    console.log('Server started at port 3000');
})