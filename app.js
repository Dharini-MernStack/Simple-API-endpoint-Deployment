const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello from Render!');
});

// Start the server
app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
