import express from 'express';
import path from 'path';

const app = express();
const PORT = 4900;

// 1. SERVE STATIC ASSETS: This checks the 'html' folder for files like 'style.css'
// Whenever a webpage requests a file, Express looks inside 'html/' first.
app.use(express.static(path.resolve('html')));

// 2. EXPLICIT ROUTE HANDLERS
// Homepage Route
app.get('/', (req, res) => {
    res.sendFile(path.resolve('html/home.html'));
});

// About Page Route
app.get('/about', (req, res) => {
    res.sendFile(path.resolve('html/about.html'));
});

// Contact Page Route
app.get('/contact', (req, res) => {
    res.sendFile(path.resolve('html/contact.html'));
});

// 3. CATCH-ALL 404 MIDDLEWARE (Must always be at the very bottom)
app.use((req, res) => {
    res.status(404).sendFile(path.resolve('html/404.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});