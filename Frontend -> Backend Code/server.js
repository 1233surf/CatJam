const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;
  
    const cppProcess = spawn('login');
  
    const inputData = { username, password };
    cppProcess.stdin.write(JSON.stringify(inputData));
    cppProcess.stdin.end();
  
    let output = '';
  
    cppProcess.stdout.on('data', (data) => {
      output += data;
    });
  
    cppProcess.on('close', (code) => {
      if (code === 0) {
        const result = JSON.parse(output);
        res.json(result);
      } else {
        res.status(500).json({ error: 'C++ process failed' });
      }
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});