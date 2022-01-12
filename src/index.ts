import express from 'express';
import cors from 'cors';

import setupRoutes from './routes';
import errorHandler from './middleware/error.handler';

const PORT = process.env.PORT || 3000;
const app = express();

// middelwares
app.use(cors());

// setting up all the routes
setupRoutes(app);

// Errors handler
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT}`);
});
