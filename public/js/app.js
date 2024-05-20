const express = require('express');
const fs = require('fs');
const path = require('path');
const marked = require('marked');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    fs.readFile(path.join(__dirname, 'views', 'index.html'), 'utf8', (err, html) => {
        if (err) {
            res.status(500).send('Error loading page');
            return;
        }
        res.send(html);
    });
});

app.get('/post/:postName', (req, res) => {
    const postName = req.params.postName;
    const postPath = path.join(__dirname, 'posts', `${postName}.md`);

    fs.readFile(postPath, 'utf8', (err, content) => {
        if (err) {
            res.status(404).send('Post not found');
            return;
        }
        const htmlContent = marked(content);
        res.send(`<html><body>${htmlContent}</body></html>`);
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
