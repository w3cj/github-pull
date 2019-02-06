const express = require('express');
const { exec } = require('child_process');

require('dotenv').config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'github webhook server'
  });
});

app.post('/github', (req, res) => {
  console.log(req.body);
  exec(`cd ${process.env.DIRECTORY} && git pull`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
    res.json({
      message: 'success'
    });
  });
});

const port = process.env.PORT || 9000;
app.listen(port, () =>{
  console.log(`Listening on ${port}`);
});
