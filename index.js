const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const dateUp = Date.now();

app.get('/', (req, res) => {
  const today = new Date();

  res.json({
    date: today,
    up: `${(Date.now() - dateUp)/1000} seg.`,
    repo: 'https://github.com/josRod128/hello-cloud-run',
    text: 'Funciono el push 6'
  });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
  console.log('Press CTRL + C to quit');
});
