import express from 'express';
import route from './routes/route.js';
import cors from "cors"

const port = 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(route);

app.use("/characters",route)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});