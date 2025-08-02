const express = require('express');
const cors = require('cors');
const route = require('./routes/route.js');

const port = 8080;
const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use(route);
app.use("/",route)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});