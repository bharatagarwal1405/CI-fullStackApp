const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.status(200).send('server is running');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = app; // Export the app for testing purposes