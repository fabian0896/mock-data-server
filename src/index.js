const express = require('express');
const cors = require('cors');

const setupRoutes = require('./routes');
const errorHandler = require('./middleware/error.handler');

const PORT = process.env.PORT || 3000;
const app = express();

// middelwares
app.use(cors());

// setting up all the routes
setupRoutes(app);

// Errors handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});