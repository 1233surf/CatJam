const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    // Extract username and password from the request
    const { username, password } = req.body;

    // Spawn a child process to run the C++ validation code
    const cplusplusProcess = spawn('./"/Users/diamo/OneDrive/Desktop/HTMLProj/VisualStudioCodeProj/your_program.exe"', [username, password]);

    // Initialize variables to capture data and errors
    let responseData = '';
    let errorData = '';

    // Listen for data from the C++ process
    cplusplusProcess.stdout.on('data', (data) => {
        responseData += data.toString();
    });

    // Listen for errors from the C++ process
    cplusplusProcess.stderr.on('data', (data) => {
        errorData += data.toString();
    });

    // Handle the end of the process
    cplusplusProcess.on('close', (code) => {
        if (code === 0) {
            // C++ process completed successfully
            const role = responseData.trim();
            res.status(200).json({ success: true, message: 'Valid credentials', role });
        } else {
            // C++ process failed
            console.error(`Error: ${errorData}`);
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});