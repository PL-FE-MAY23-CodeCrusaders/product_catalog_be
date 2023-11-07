// server.ts
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from '../routes/products'; // Updated import

dotenv.config();

const PORT = Number(process.env.PORT);
const app = express();

app.use(cors());

app.use('/products', router);

app.listen(PORT, () => {
  console.log(`API is ready on http://localhost:${PORT}`);
});
