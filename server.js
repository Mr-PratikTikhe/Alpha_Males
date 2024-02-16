const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Dummy data for course progress (replace with actual database integration)
let courseProgress = {
    course1: 50,
    course2: 75
};

app.use(bodyParser.json());

// Route to fetch course progress
app.get('/api/progress', (req, res) => {
    res.json(courseProgress);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
