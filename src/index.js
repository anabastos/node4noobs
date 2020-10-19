import express from 'express';
import logAccess from './middlewares/log-access';

const app = express();

app.use(logAccess);

app.get("/", (req, res) => {
    return res.send("Hello World");
});

const port = 5000;
app.listen(port, () => {
    console.log(`Server listing on port ${port}`);
})

