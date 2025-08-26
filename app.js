import express from 'express';
import bookRouters from "./routes/books.js";

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/books', bookRouters);

app.get('/', (req, res) =>    res.send('Hello from home page'));

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
});