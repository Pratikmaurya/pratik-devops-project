const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/get-link', (req, res) => {
    const userEmail = req.body.email;
    console.log(`User email received: ${userEmail}`);
    
    // In a real production app, we would send an email here using SMTP.
    // For this demo, we return a success page with the link.
    res.send(`
        <h1>Thanks, ${userEmail}!</h1>
        <p>We have processed your request.</p>
        <p>Here is the GitHub repository link you asked for:</p>
        <a href="https://github.com/Pratikmaurya/pratik-devops-project">Click here to Fork My Project</a>
        <br><br>
        <a href="/">Go Back</a>
    `);
});

app.listen(port, () => {
    console.log(`Pratik's App listening at http://localhost:${port}`);
});
