const express = require('express');
const cors = require('cors');
const { router } = require('./routes/auth_Router');
const app = express();

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

require('./db');

app.use('/auth', router);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
