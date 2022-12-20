import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 4040;


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
})
