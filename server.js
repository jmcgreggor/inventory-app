const express = require('express');
const router = require('./controllers/router.js');
const app = express();
const port = 4000;

app.use(express.urlencoded({ extended: false }));

app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
