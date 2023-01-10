import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors({ origin: true }));

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

export default app;
