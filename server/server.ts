import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import router from './routers/router';

const app = express();

const PORT = process.env.PORT || 4040;

app.use(router);


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
})
