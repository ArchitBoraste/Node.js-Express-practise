import express from 'express';

const app = express();

app.get('/api/data', (req, res) => {
    res.json({ message: "Hello from the backend API!" });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});